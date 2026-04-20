import colors from '@ui/tokens/colors';
import { css } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import LinkButton from '@ui/elements/link-button';
import Button from '@ui/elements/button';


export default function confirmation( title: string, message: string, callback: () => void, color: string = colors.red600, text: string = 'Confirmer') {
    const container = document.getElementById('confirm');

    if (!container) {
        return;
    }
    const root = createRoot(container);

    function clearConfirm() {
        root.unmount();
    }

    function handleConfirm() {
        clearConfirm();
        callback();
    }

    root.render(
        <>
            <div css={backgroundStyle}>
                <div css={confirmModalStyle}>
                    <div>{title}</div>
                    <p>{message}</p>
                    <div css={footerStyle}>
                        <LinkButton onClick={clearConfirm}>Annuler</LinkButton>
                        <Button color={color} onClick={handleConfirm}>{text}</Button>
                    </div>
                </div>
            </div>
        </>,
    );
}

const backgroundStyle = css({
    position: 'fixed',
    zIndex: 40000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(213, 219, 225, 0.5)',
});

const confirmModalStyle = css({
    backgroundColor: '#fff',
    padding: '20px',
    width: '500px',
    maxWidth: '100%',
    borderRadius: '15px',
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

const footerStyle = css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
});