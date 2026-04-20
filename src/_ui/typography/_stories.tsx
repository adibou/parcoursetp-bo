import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Inline from '../layouts/inline';
import Heading from './heading';
import Text from './text';
import CodeBlock from '../data-display/code-block';


const HEADING_TYPOS = ['h1', 'h2', 'h3', 'h4'] as const;
const TEXT_TYPOS = [
    'sm', 'smBold',
    'base', 'bold',
    'lg', 'lgBold',
] as const;
const COLORS = ['primary', 'secondary', 'error'] as const;

const HEADING_EXAMPLE = `
import Heading from '@ui/typography/heading';

<Heading typo="h1">Page title</Heading>
<Heading typo="h3" color="secondary">Section</Heading>
`;

const TEXT_EXAMPLE = `
import Text from '@ui/typography/text';

<Text>Body text.</Text>
<Text typo="smBold" color="error">Error message</Text>
`;


export default function TypographyStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="headings" gap={16}>
                <Heading typo="h2">Headings</Heading>
                <Bloc gap={40}>
                    <Stack gap={12}>
                        {HEADING_TYPOS.map(typo => (
                            <Inline key={typo} justify="between" align="center" gap={24}>
                                <Heading typo={typo}>The quick brown fox</Heading>
                                <Text typo="sm" color="secondary">typo="{typo}"</Text>
                            </Inline>
                        ))}
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={24}>
                            {COLORS.map(color => (
                                <Heading key={color} typo="h3" color={color}>{color}</Heading>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={HEADING_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="text" gap={16}>
                <Heading typo="h2">Text</Heading>
                <Bloc gap={40}>
                    <Stack gap={12}>
                        {TEXT_TYPOS.map(typo => (
                            <Inline key={typo} justify="between" align="center" gap={24}>
                                <Text typo={typo}>The quick brown fox jumps over the lazy dog</Text>
                                <Text typo="sm" color="secondary">typo="{typo}"</Text>
                            </Inline>
                        ))}
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={24}>
                            {COLORS.map(color => (
                                <Text key={color} typo="base" color={color}>{color}</Text>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={TEXT_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}
