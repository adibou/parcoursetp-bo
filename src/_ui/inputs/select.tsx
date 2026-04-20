import { css, Interpolation, Theme } from '@emotion/react';
import { forwardRef } from 'react';
import colors from '../tokens/colors';

export type SelectOption = {
    value: string;
    label: string;
};

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
    css?: Interpolation<Theme>;
    options: SelectOption[];
    placeholder?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
    const { css: cssProp, options, placeholder, ...rest } = props;
    return (
        <select ref={ref} css={[selectStyle, cssProp]} {...rest}>
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
});

export default Select;


const selectStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 16px',
    width: '100%',
    minWidth: '40px',
    backgroundColor: '#ffffff',
    appearance: 'none',
    cursor: 'pointer',
    outline: 'none',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23525252' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M1 1.5 L6 6.5 L11 1.5'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '36px',
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
