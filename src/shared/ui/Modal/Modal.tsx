import { classNames } from 'shared/lib';
import React, { FC, useCallback, useEffect } from 'react';
import style from './Modal.module.scss';
import { Portal } from 'shared/ui';

interface ModalProps {
    children: React.ReactNode;
    isOpened?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpened, onClose }) => {
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
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <Portal>
            <div className={classNames(style.modal, mods)}>
                <div className={style.overlay} onClick={handleClose}>
                    <div className={style.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
