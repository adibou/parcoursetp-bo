import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Inline from '../layouts/inline';
import Heading from '../typography/heading';
import Button from './button';
import OutlinedButton from './outlined-button';
import LinkButton from './link-button';
import CodeBlock from '../data-display/code-block';


const SIZES = ['small', 'medium', 'large'] as const;
const COLORS = ['neutral', 'error', 'secondary'] as const;

const OVERVIEW_EXAMPLE = `
import Button from '@ui/elements/button';
import OutlinedButton from '@ui/elements/outlined-button';
import LinkButton from '@ui/elements/link-button';

<Button>Primary</Button>
<OutlinedButton>Outlined</OutlinedButton>
<LinkButton>Link</LinkButton>
`;

const BUTTON_EXAMPLE = `
<Button size="small">Small</Button>
<Button color="error">Delete</Button>
<Button color="secondary">Secondary</Button>
<Button block>Full width</Button>
`;

const OUTLINED_EXAMPLE = `
<OutlinedButton size="large">Large</OutlinedButton>
<OutlinedButton color="error">Delete</OutlinedButton>
<OutlinedButton color="secondary">Secondary</OutlinedButton>
`;

const LINK_EXAMPLE = `
<LinkButton>Read more</LinkButton>
<LinkButton color="error">Cancel</LinkButton>
<LinkButton color="secondary">Secondary</LinkButton>
`;

const BLOCK_EXAMPLE = `
<Button block>Enregistrer</Button>
<OutlinedButton block>Annuler</OutlinedButton>
<LinkButton block>Voir plus</LinkButton>
`;


export default function ButtonsStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="overview" gap={16}>
                <Heading typo="h2">Overview</Heading>
                <Bloc gap={40}>
                    <Inline gap={16}>
                        <Button>Button</Button>
                        <OutlinedButton>Outlined</OutlinedButton>
                        <LinkButton>Link</LinkButton>
                    </Inline>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={OVERVIEW_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="button" gap={16}>
                <Heading typo="h2">Button</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Sizes</Heading>
                        <Inline gap={16} align="center">
                            {SIZES.map(size => (
                                <Inline key={size} align="center" gap={8}>
                                    <Button size={size}>{size}</Button>
                                </Inline>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={16}>
                            {COLORS.map(color => (
                                <Button key={color} color={color}>{color}</Button>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={BUTTON_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="outlined-button" gap={16}>
                <Heading typo="h2">Outlined button</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Sizes</Heading>
                        <Inline gap={16} align="center">
                            {SIZES.map(size => (
                                <Inline key={size} align="center" gap={8}>
                                    <OutlinedButton size={size}>{size}</OutlinedButton>
                                </Inline>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={16}>
                            {COLORS.map(color => (
                                <OutlinedButton key={color} color={color}>{color}</OutlinedButton>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={OUTLINED_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="link-button" gap={16}>
                <Heading typo="h2">Link button</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Sizes</Heading>
                        <Inline gap={16} align="center">
                            {SIZES.map(size => (
                                <Inline key={size} align="center" gap={8}>
                                    <LinkButton size={size}>{size}</LinkButton>
                                </Inline>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={16}>
                            {COLORS.map(color => (
                                <LinkButton key={color} color={color}>{color}</LinkButton>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={LINK_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="block-prop" gap={16}>
                <Heading typo="h2">Block prop</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">
                            La prop <code>block</code> étire le bouton sur toute la largeur disponible.
                        </Heading>
                        <Stack gap={12}>
                            <Button block>Button block</Button>
                            <OutlinedButton block>OutlinedButton block</OutlinedButton>
                            <LinkButton block>LinkButton block</LinkButton>
                        </Stack>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={BLOCK_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}
