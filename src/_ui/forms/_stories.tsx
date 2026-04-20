import { useForm } from 'react-hook-form';
import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Heading from '../typography/heading';
import Text from '../typography/text';
import CodeBlock from '../data-display/code-block';
import Form from './form';
import FormInput from './form-input';
import FormTextarea from './form-textarea';
import FormSelect from './form-select';
import FormNumber from './form-number';
import FormPassword from './form-password';
import FormFooter from './form-footer';


const OVERVIEW_EXAMPLE = `
import { useForm } from 'react-hook-form';
import Form from '@ui/forms/form';
import FormInput from '@ui/forms/form-input';
import FormSelect from '@ui/forms/form-select';
import FormFooter from '@ui/forms/form-footer';

export default function ProfileForm() {
    const form = useForm({
        mode: 'onTouched',
        defaultValues: { name: '', role: '' },
    });

    const ROLES = [
        { value: 'admin', label: 'Admin' },
        { value: 'member', label: 'Membre' },
    ];

    return (
        <Form form={form} gap={16} onSubmit={async (data) => save(data)}>
            <FormInput name="name" label="Nom" help="entre 3 et 8 caractères" required min={3} max={8} />
            <FormSelect name="role" label="Rôle" placeholder="Choisir…" options={ROLES} />
            <FormError form={form} />
            <FormFooter form={form} />
        </Form>
    );
}
`;

const FORM_INPUT_EXAMPLE = `
<FormInput name="name" label="Nom" required />
<FormInput name="pseudo" label="Pseudo" help="3 à 12 caractères" required min={3} max={12} />
`;

const FORM_TEXTAREA_EXAMPLE = `
<FormTextarea name="bio" label="Bio" placeholder="Quelques mots..." max={500} />
`;

const FORM_SELECT_EXAMPLE = `
const LANGS = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
];

<FormSelect name="lang" label="Langue" required placeholder="Choisir…" options={LANGS} />
`;

const FORM_NUMBER_EXAMPLE = `
<FormNumber name="age" label="Âge" suffix="ans" required min={0} max={120} />
<FormNumber name="price" label="Prix" suffix="€" real min={0} />
<FormNumber name="ratio" label="Ratio" suffix="%" real min={0} max={100} />
`;

const FORM_PASSWORD_EXAMPLE = `
<FormPassword name="password" label="Mot de passe" required min={8} max={64} />
`;


export default function FormsStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="overview" gap={16}>
                <Heading typo="h2">Overview</Heading>
                <Bloc gap={40}>
                    <Stack gap={4}>
                        <Text color="secondary">
                            - Un formulaire se construit avec <strong>Form</strong> (wrapper autour de <code>react-hook-form</code>),
                            

                        </Text>
                        <Text color="secondary">
                            - des champs <strong>FormInput</strong>, <strong>FormTextarea</strong>, <strong>FormNumber</strong>,
                            <strong>FormPassword</strong>, <strong>FormSelect</strong>
                        </Text>
                        <Text color="secondary">
                            - <strong>FormError</strong> pour afficher un message d'erreur global
                        </Text>
                        <Text color="secondary">
                            - <strong>FormFooter</strong> qui affiche automatiquement les boutons <em>Annuler</em> / <em>Enregistrer</em> lorsque le formulaire
                            est <code>dirty</code>.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <OverviewDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={OVERVIEW_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="form-input" gap={16}>
                <Heading typo="h2">FormInput</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Un champ de formulaire branché sur <code>react-hook-form</code>. Passe <code>multiline</code> pour obtenir
                            un <code>Textarea</code>, et <code>registerOptions</code> pour la validation.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <FormInputDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={FORM_INPUT_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="form-textarea" gap={16}>
                <Heading typo="h2">FormTextarea</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Version multi-ligne de <code>FormInput</code>. Mêmes props de validation
                            (<code>required</code>, <code>min</code>, <code>max</code> en caractères).
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <FormTextareaDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={FORM_TEXTAREA_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="form-number" gap={16}>
                <Heading typo="h2">FormNumber</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Champ numérique dédié. Props : <code>min</code>, <code>max</code>, <code>required</code>,
                            <code>real</code> (pour accepter les décimales) et <code>suffix</code> (affiché à l'intérieur
                            du champ, ex : <code>€</code>, <code>%</code>, <code>kg</code>).
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <FormNumberDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={FORM_NUMBER_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="form-password" gap={16}>
                <Heading typo="h2">FormPassword</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Champ de mot de passe avec bouton pour afficher/masquer la saisie.
                            Props de validation : <code>required</code>, <code>min</code>, <code>max</code> (en caractères).
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <FormPasswordDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={FORM_PASSWORD_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="form-select" gap={16}>
                <Heading typo="h2">FormSelect</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Équivalent de <code>FormInput</code> pour un <code>select</code>. On passe la liste via
                            la prop <code>options</code> au format <code>{`{ value, label }[]`}</code>, et un
                            <code>placeholder</code> optionnel pour l'option vide.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <FormSelectDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={FORM_SELECT_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}


const ROLES = [
    { value: 'admin', label: 'Admin' },
    { value: 'member', label: 'Membre' },
];

const LANGS = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
];


function OverviewDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { name: '', role: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormInput name="name" label="Nom" help="entre 3 et 8 caractères" required min={3} max={8} />
            <FormSelect name="role" label="Rôle" placeholder="Choisir…" options={ROLES} />
            <FormFooter form={form} />
        </Form>
    );
}


function FormInputDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { name: '', pseudo: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormInput name="name" label="Nom" required />
            <FormInput name="pseudo" label="Pseudo" help="3 à 12 caractères" required min={3} max={12} />
            <FormFooter form={form} />
        </Form>
    );
}


function FormTextareaDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { bio: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormTextarea name="bio" label="Bio" placeholder="Quelques mots..." max={500} />
            <FormFooter form={form} />
        </Form>
    );
}


function FormNumberDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { age: '', price: '', ratio: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormNumber name="age" label="Âge" suffix="ans" required min={0} max={120} />
            <FormNumber name="price" label="Prix" suffix="€" real min={0} />
            <FormNumber name="ratio" label="Ratio" suffix="%" real min={0} max={100} />
            <FormFooter form={form} />
        </Form>
    );
}


function FormPasswordDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { password: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormPassword name="password" label="Mot de passe" help="Entre 8 et 64 caractères" required min={8} max={64} />
            <FormFooter form={form} />
        </Form>
    );
}


function FormSelectDemo() {
    const form = useForm({ mode: 'onTouched', defaultValues: { lang: '', role: '' } });

    return (
        <Form form={form} gap={16} onSubmit={async () => { await new Promise(r => setTimeout(r, 300)); }}>
            <FormSelect name="lang" label="Langue" required placeholder="Choisir…" options={LANGS} />
            <FormSelect
                name="role"
                label="Rôle"
                help="Détermine les permissions"
                placeholder="Choisir…"
                options={ROLES}
            />
            <FormFooter form={form} />
        </Form>
    );
}
