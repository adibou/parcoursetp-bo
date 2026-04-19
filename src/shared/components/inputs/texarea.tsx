import colors from '@/shared/colors';
import { css, Interpolation, Theme } from '@emotion/react';
import React, { useRef, useLayoutEffect, forwardRef } from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    css?: Interpolation<Theme>;
};

function composeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    return (value: T | null) => {
        refs.forEach(ref => {
            if (!ref) return;
            if (typeof ref === 'function') ref(value);
            else (ref as React.RefObject<T | null>).current = value;
        });
    };
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(props, forwardedRef) {
    const { onInput, onChange, css: cssProp, ...rest } = props;
    const innerRef = useRef<HTMLTextAreaElement | null>(null);

    const resize = () => {
        const el = innerRef.current;
        if (!el) return;
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
    };

    useLayoutEffect(() => {
        resize();
    }, [rest.value, rest.defaultValue]);

    const handleInput: React.InputEventHandler<HTMLTextAreaElement> = (e) => {
        resize();
        onInput?.(e);
    };

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        resize();
        onChange?.(e);
    };

    return (
        <textarea
            {...rest}
            ref={composeRefs(forwardedRef, innerRef)}
            onInput={handleInput}
            onChange={handleChange}
            css={[baseStyle, cssProp]}
        />
    );
});

export default Textarea;

const baseStyle = css({
    borderRadius: '5px',
    border: `solid 1px ${colors.neutral300}`,
    padding: '10px 16px',
    width: '100%',
    minWidth: '40px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    resize: 'none',
    minHeight: 'calc(3em + 20px)',
});
