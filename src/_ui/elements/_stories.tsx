import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Inline from '../layouts/inline';
import Heading from '../typography/heading';
import Text from '../typography/text';
import Icon from './icon';
import Tag from './tag';
import CodeBlock from '../data-display/code-block';


const ICON_NAMES = ['search', 'add', 'close'] as const;
const ICON_SIZES = [16, 24, 32, 48] as const;
const TAG_COLORS = ['neutral'] as const;

const ICON_COLORS = ['neutral900', 'neutral500', 'red600'] as const;

const ICON_EXAMPLE = `
import Icon from '@ui/elements/icon';

<Icon name="search" />
<Icon name="add" size={32} />
<Icon name="close" color="red600" />
`;

const TAG_EXAMPLE = `
import Tag from '@ui/elements/tag';

<Tag>Draft</Tag>
<Tag color="neutral">Default</Tag>
`;


export default function ElementsStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="icon" gap={16}>
                <Heading typo="h2">Icon</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Available icons</Heading>
                        <Inline gap={32}>
                            {ICON_NAMES.map(name => (
                                <Stack key={name} gap={8}>
                                    <Icon name={name} size={32} />
                                    <Text typo="sm" color="secondary">{name}</Text>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Sizes</Heading>
                        <Inline gap={32} align="center">
                            {ICON_SIZES.map(size => (
                                <Stack key={size} gap={8}>
                                    <Icon name="search" size={size} />
                                    <Text typo="sm" color="secondary">{size}px</Text>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={32} align="center">
                            {ICON_COLORS.map(color => (
                                <Stack key={color} gap={8}>
                                    <Icon name="search" size={32} color={color} />
                                    <Text typo="sm" color="secondary">{color}</Text>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={ICON_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="tag" gap={16}>
                <Heading typo="h2">Tag</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Overview</Heading>
                        <Inline gap={12}>
                            <Tag>Default</Tag>
                            <Tag>Draft</Tag>
                            <Tag>Published</Tag>
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">Colors</Heading>
                        <Inline gap={12}>
                            {TAG_COLORS.map(color => (
                                <Tag key={color} color={color}>{color}</Tag>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={TAG_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}
