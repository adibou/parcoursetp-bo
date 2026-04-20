import { css } from '@emotion/react';
import ModalBackground from './modal-background';

type SideModalProps = {
    onClose: () => void;
    width?: number | string;
    children: React.ReactNode;
};

export default function SideModal({ onClose, width = 500, children }: SideModalProps) {
    return (
        <ModalBackground onClick={onClose}>
            <div css={panelStyle(width)}>
                {children}
            </div>
        </ModalBackground>
    );
}


const panelStyle = (width: number | string) => css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: typeof width === 'number' ? `${width}px` : width,
    maxWidth: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '-4px 0 16px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    zIndex: 41,
});
