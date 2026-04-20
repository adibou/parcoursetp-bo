import { css } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import LinkButton from '@/_ui/buttons/link-button';
import Button, { BUTTON_COLORS } from '@/_ui/buttons/button';
import colors from '../tokens/colors';
import Heading from '../typography/heading';
import Text from '../typography/text';
import Inline from '../layouts/inline';





export default function confirmation( 
    title: string, 
    message: string, 
    callback: () => void, 
    color: keyof typeof BUTTON_COLORS = 'error', 
    text: string = 'Confirmer') {


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
                    <Heading typo="h3">{title}</Heading>
                    <Text>{message}</Text>
                    <Inline justify='end' gap='10'>
                        <LinkButton onClick={clearConfirm}>Annuler</LinkButton>
                        <Button color={color} onClick={handleConfirm}>{text}</Button>
                    </Inline>
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
    backgroundColor: colors.white,
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