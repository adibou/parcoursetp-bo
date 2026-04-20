import { UseFormReturn } from 'react-hook-form';
import Button from '../buttons/button';
import LinkButton from '../buttons/link-button';
import { css } from '@emotion/react';
import colors from '@/shared/colors';

interface FormFooterProps {
    form: UseFormReturn<any, any>
    onCancel?: () => void;
}

export default function FormFooter({ form, onCancel }: FormFooterProps) {

    function handleCancel() {
        form.reset();
        onCancel?.();
    }

    return (
        <div css={footerStyle}>            
            {form.formState.isDirty && <>
                <LinkButton onClick={handleCancel}>Annuler</LinkButton>
                <Button type="submit">Enregistrer</Button>
            </>}
            {!form.formState.isDirty && <div css={allSavedStyle}>Tout est enregistré !</div>}
        </div>
    );
}


const footerStyle = css({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px',
});

const allSavedStyle = css({
    color:colors.neutral800,
    fontStyle: 'italic',
    fontSize: '14px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: colors.neutral100,
});