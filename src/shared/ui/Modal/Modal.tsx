import { classNames } from 'shared/lib';
import React, { FC, useCallback, useEffect } from 'react';
import style from './Modal.module.scss';
import { Portal } from 'shared/ui';

interface ModalProps {
    className?: string;
    children: React.ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpened, onClose, lazy }) => {
    const [isMounted, setIsMounted] = React.useState(false);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [style.opened]: isOpened
    };

    useEffect(() => {
        if (isOpened) {
            setIsMounted(true);
        }

        return () => {
            setIsMounted(false);
        };
    }, [isOpened]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    if (lazy && !isMounted) {
        return <></>;
    }

    return (
        <Portal>
            <div className={classNames(style.modal, mods, [className])}>
                <div className={style.overlay} onClick={handleClose}>
                    <div className={style.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
