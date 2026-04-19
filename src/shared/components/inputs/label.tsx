import colors from '@/shared/colors';
import { css, Interpolation, Theme } from '@emotion/react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    css?: Interpolation<Theme>;
};


export default function Label(props: LabelProps) {

    const { css:cssProp, ...rest } = props;

    return <label css={[labelStyle, cssProp]} {...rest} />;
}


const labelStyle = css({
    display:'block',
    color:colors.neutral600,
    fontSize:'14px',
});