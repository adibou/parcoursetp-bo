import { css } from '@emotion/react';
import { useState } from 'react';
import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Heading from '../typography/heading';
import Text from '../typography/text';
import Input from './input';
import Label from './label';
import Select from './select';
import Textarea from './textarea';
import SearchInput from './search-input';
import InputNumber from './input-number';
import InputPassword from './input-password';
import CodeBlock from '../data-display/code-block';
import colors from '../tokens/colors';


const INPUT_EXAMPLE = `
import Input from '@ui/inputs/input';
import Label from '@ui/inputs/label';

<Label htmlFor="name">Nom</Label>
<Input id="name" placeholder="Jane Doe" />

<Input aria-invalid defaultValue="valeur invalide" />
`;

const INPUT_NUMBER_EXAMPLE = `
import InputNumber from '@ui/inputs/input-number';

<InputNumber placeholder="0" />
<InputNumber suffix="€" defaultValue={42} />
<InputNumber suffix="%" real defaultValue={12.5} />
`;

const INPUT_PASSWORD_EXAMPLE = `
import InputPassword from '@ui/inputs/input-password';

<InputPassword placeholder="Votre mot de passe" />
`;

const TEXTAREA_EXAMPLE = `
import Textarea from '@ui/inputs/textarea';

<Textarea placeholder="Votre message..." />
`;

const SELECT_EXAMPLE = `
import Select from '@ui/inputs/select';

const LANGS = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
];

<Select
    defaultValue=""
    placeholder="Choisir…"
    options={LANGS}
/>
`;

const LABEL_EXAMPLE = `
import Label from '@ui/inputs/label';

<Label htmlFor="name">Nom</Label>
`;

const SEARCH_EXAMPLE = `
import SearchInput from '@ui/inputs/search-input';

<SearchInput placeholder="Rechercher..." />

<SearchInput
    placeholder="Rechercher..."
    onDebouncedChange={value => search(value)}
    debounceMs={400}
/>
`;


export default function InputsStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <div css={noteStyle}>
                <Text typo="sm" color="secondary">
                    Ces composants sont destinés à un usage <strong>hors formulaire</strong> (champ de recherche, filtre, saisie rapide…).
                    Pour construire un formulaire, voir la section <strong>Forms</strong>.
                </Text>
            </div>
            <Stack id="label" gap={16}>
                <Heading typo="h2">Label</Heading>
                <Bloc gap={40}>
                    <Label>Nom du champ</Label>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={LABEL_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
            <Stack id="input" gap={16}>
                <Heading typo="h2">Input</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-text">Label</Label>
                        <Input id="demo-text" placeholder="Jane Doe" />
                    </Stack>
                    <Stack gap={8}>
                        <Label htmlFor="demo-error">Error</Label>
                        <Input id="demo-error" aria-invalid defaultValue="valeur invalide" />
                    </Stack>
                    <Stack gap={8}>
                        <Label htmlFor="demo-disabled">Disabled</Label>
                        <Input id="demo-disabled" placeholder="Read-only" disabled />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={INPUT_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="input-number" gap={16}>
                <Heading typo="h2">Input number</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-number">Entier</Label>
                        <InputNumber id="demo-number" placeholder="0" />
                    </Stack>
                    <Stack gap={8}>
                        <Label htmlFor="demo-number-suffix">Prix</Label>
                        <InputNumber id="demo-number-suffix" suffix="€" defaultValue={42} />
                    </Stack>
                    <Stack gap={8}>
                        <Label htmlFor="demo-number-real">Ratio</Label>
                        <InputNumber id="demo-number-real" suffix="%" real defaultValue={12.5} />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={INPUT_NUMBER_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="input-password" gap={16}>
                <Heading typo="h2">Input password</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-password">Mot de passe</Label>
                        <InputPassword id="demo-password" placeholder="Votre mot de passe" />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={INPUT_PASSWORD_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="textarea" gap={16}>
                <Heading typo="h2">Textarea</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-textarea">Message</Label>
                        <Textarea id="demo-textarea" placeholder="Votre message..." />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={TEXTAREA_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="search-input" gap={16}>
                <Heading typo="h2">Search input</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-search">Rechercher</Label>
                        <SearchInput id="demo-search" placeholder="Rechercher..." />
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Debounce</Heading>
                        <Text typo="sm" color="secondary">
                            La prop <code>onDebouncedChange</code> se déclenche après <code>debounceMs</code> ms
                            d'inactivité (200 ms par défaut) — utile pour appeler une API de recherche sans spammer à chaque frappe.
                        </Text>
                        <SearchInputDebounceDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={SEARCH_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="select" gap={16}>
                <Heading typo="h2">Select</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Label htmlFor="demo-select">Langue</Label>
                        <Select
                            id="demo-select"
                            defaultValue=""
                            placeholder="Choisir…"
                            options={[
                                { value: 'fr', label: 'Français' },
                                { value: 'en', label: 'English' },
                                { value: 'es', label: 'Español' },
                            ]}
                        />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={SELECT_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>


        </Stack>
    );
}


function SearchInputDebounceDemo() {
    const [liveValue, setLiveValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    return (
        <Stack gap={8}>
            <SearchInput
                placeholder="Tape quelque chose..."
                onChange={e => setLiveValue(e.target.value)}
                onDebouncedChange={setDebouncedValue}
                debounceMs={400}
            />
            <Text typo="sm" color="secondary">Live: "{liveValue}"</Text>
            <Text typo="sm" color="secondary">Debounced (400ms): "{debouncedValue}"</Text>
        </Stack>
    );
}


const noteStyle = css({
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: colors.white,
    border: `solid 2px ${colors.red300}`,
    lineHeight: 1.5,
});
