import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Interpolation, Theme } from '@emotion/react';
import InputPassword from '../inputs/input-password';
import FormItem from './form-item';

type FormPasswordProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    name: string;
    label?: string;
    help?: string;
    css?: Interpolation<Theme>;
    registerOptions?: RegisterOptions;
    min?: number;
    max?: number;
    required?: boolean | string;
};


export default function FormPassword({ label, name, help, registerOptions, min, max, required, ...props }: FormPasswordProps) {
    const form = useFormContext();

    const options: RegisterOptions = {
        ...registerOptions,
        ...(required !== undefined && required !== false && {
            required: typeof required === 'string' ? required : 'Ce champ est requis',
        }),
        ...(min !== undefined && { minLength: { value: min, message: `Minimum ${min} caractères` } }),
        ...(max !== undefined && { maxLength: { value: max, message: `Maximum ${max} caractères` } }),
    };

    return (
        <FormItem label={label} name={name} help={help}>
            <InputPassword id={`rhf-${name}`} {...props} {...form.register(name, options)} />
        </FormItem>
    );
}
