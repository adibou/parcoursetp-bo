import { UseFormReturn } from 'react-hook-form';
import FormFooter from '@ui/forms/form-footer';
import { FormErrors } from '@ui/forms/form-error';
import TitledSideModal from './titled-side-modal';
import Form from '../forms/form';

type SideModalFormProps = {
    form: UseFormReturn<any, any>;
    onSubmit: (data: any) => void | false | Promise<void | false>;
    onClose: () => void;
    title: string;
    width?: number | string;
    gap?: number;
    children: React.ReactNode;
};

export default function SideModalForm({
    form,
    onSubmit,
    onClose,
    title,
    width,
    gap = 16,
    children,
}: SideModalFormProps) {


    return (
        <TitledSideModal onClose={onClose} width={width} title={title}>
            <Form form={form} gap={gap} onSubmit={onSubmit}>
                {children}
                <FormErrors form={form} />
                <FormFooter form={form} onCancel={onClose} />
            </Form>
        </TitledSideModal   >
    );
}
