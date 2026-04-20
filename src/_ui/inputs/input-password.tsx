import { css, Interpolation, Theme } from '@emotion/react';
import { forwardRef, useState } from 'react';
import colors from '../tokens/colors';
import Icon from '../elements/icon';

type InputPasswordProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    css?: Interpolation<Theme>;
};

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(function InputPassword(props, ref) {
    const { css: cssProp, ...rest } = props;
    const [visible, setVisible] = useState(false);

    return (
        <div css={wrapperStyle}>
            <input
                ref={ref}
                type={visible ? 'text' : 'password'}
                autoComplete="current-password"
                css={[inputStyle, cssProp]}
                {...rest}
            />
            <button
                type="button"
                onClick={() => setVisible(v => !v)}
                aria-label={visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                css={toggleStyle}
                tabIndex={-1}
            >
                <Icon name={visible ? 'eye-off' : 'eye'} size={18} color="neutral500" />
            </button>
        </div>
    );
});

export default InputPassword;


const wrapperStyle = css({
    position: 'relative',
    display: 'block',
    width: '100%',
});

const inputStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 16px',
    paddingRight: '42px',
    width: '100%',
    minWidth: '40px',
    outline: 'none',
    '&:focus': {
        borderColor: colors.neutral500,
    },
    '&[aria-invalid="true"]': {
        borderColor: colors.red600,
    },
    '&[aria-invalid="true"]:focus': {
        borderColor: colors.red600,
    },
});

const toggleStyle = css({
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '4px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: colors.neutral500,
    '&:hover': {
        backgroundColor: colors.neutral100,
    },
});
