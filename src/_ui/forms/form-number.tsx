import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Interpolation, Theme } from '@emotion/react';
import InputNumber from '../inputs/input-number';
import FormItem from './form-item';

type FormNumberProps = React.HTMLAttributes<HTMLElement> & {
    name: string;
    label?: string;
    help?: string;
    css?: Interpolation<Theme>;
    registerOptions?: RegisterOptions;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    min?: number;
    max?: number;
    required?: boolean | string;
    real?: boolean;
    suffix?: string;
};


export default function FormNumber({ label, name, help, registerOptions, min, max, required, real, suffix, ...props }: FormNumberProps) {
    const form = useFormContext();

    const options: RegisterOptions = {
        valueAsNumber: true,
        ...registerOptions,
        ...(required !== undefined && required !== false && {
            required: typeof required === 'string' ? required : 'Ce champ est requis',
        }),
        ...(min !== undefined && { min: { value: min, message: `Minimum ${min}` } }),
        ...(max !== undefined && { max: { value: max, message: `Maximum ${max}` } }),
    };

    return (
        <FormItem label={label} name={name} help={help}>
            <InputNumber
                id={`rhf-${name}`}
                real={real}
                suffix={suffix}
                {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                {...form.register(name, options)}
            />
        </FormItem>
    );
}
