import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    container?: HTMLElement;

}

export const Portal: FC<PortalProps> = ({ children, container }) => {
    return createPortal(children, container || document.body);
};
