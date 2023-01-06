import React, { FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from 'features/authByUsername/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpened, onClose }) => {
    return (
        <Modal isOpened={isOpened} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    );
};
