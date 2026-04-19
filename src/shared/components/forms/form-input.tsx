import { RegisterOptions, useFormContext } from 'react-hook-form';
import Input from '../inputs/input';
import FormItem from './form-item';
import { Interpolation, Theme } from '@emotion/react';
import Textarea from '../inputs/texarea';

type FormInputProps = React.HTMLAttributes<HTMLElement> & {
    name: string;
    label?: string;
    help?: string;
    css?: Interpolation<Theme>;
    registerOptions?: RegisterOptions;
    multiline?: boolean;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoComplete?: string;
    type?: React.HTMLInputTypeAttribute;
};


export default function FormInput({ label, name, help, registerOptions, multiline, type, ...props }: FormInputProps) {
    const form = useFormContext();

    return (
        <FormItem label={label} name={name} help={help}>
            {multiline
                ? <Textarea id={`rhf-${name}`} {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} {...form.register(name, registerOptions)} />
                : <Input id={`rhf-${name}`} type={type} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} {...form.register(name, registerOptions)} />
            }
        </FormItem>
    );
}