import { css } from '@emotion/react';
import SideModal from './side-modal';
import Inline from '@ui/layouts/inline';
import Heading from '@ui/typography/heading';
import Icon from '@ui/elements/icon';

type TitledSideModalProps = {
    onClose: () => void;
    title: string;
    width?: number | string;
    children: React.ReactNode;
};

export default function TitledSideModal({ onClose, title, width, children }: TitledSideModalProps) {
    return (
        <SideModal onClose={onClose} width={width}>
            <div css={headerStyle}>
                <Inline justify="between" align="center" gap={16}>
                    <Heading typo="h2">{title}</Heading>
                    <div css={closeButtonStyle} onClick={onClose}>
                        <Icon name="close" size={24} color="neutral700" />
                    </div>
                </Inline>
            </div>
            <div css={bodyStyle}>
                {children}
            </div>
        </SideModal>
    );
}


const closeButtonStyle = css({
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
});

const bodyStyle = css({
    padding: '24px',
});

const headerStyle = css({
    padding: '24px'
});
