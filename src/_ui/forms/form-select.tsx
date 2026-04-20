import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Interpolation, Theme } from '@emotion/react';
import Select, { SelectOption } from '../inputs/select';
import FormItem from './form-item';

type FormSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
    name: string;
    label?: string;
    help?: string;
    css?: Interpolation<Theme>;
    registerOptions?: RegisterOptions;
    options: SelectOption[];
    placeholder?: string;
    required?: boolean | string;
};


export default function FormSelect({ label, name, help, registerOptions, options, placeholder, required, ...props }: FormSelectProps) {
    const form = useFormContext();

    const registerOpts: RegisterOptions = {
        ...registerOptions,
        ...(required !== undefined && required !== false && {
            required: typeof required === 'string' ? required : 'Ce champ est requis',
        }),
    };

    return (
        <FormItem label={label} name={name} help={help}>
            <Select
                id={`rhf-${name}`}
                options={options}
                placeholder={placeholder}
                {...props}
                {...form.register(name, registerOpts)}
            />
        </FormItem>
    );
}
