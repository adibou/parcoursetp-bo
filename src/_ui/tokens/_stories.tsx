import { css } from '@emotion/react';
import colors from './colors';
import typos from './typos';
import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Inline from '../layouts/inline';
import Heading from '../typography/heading';
import Text from '../typography/text';
import CodeBlock from '../data-display/code-block';


const WHITE_PALETTE = ['white'] as const;

const NEUTRAL_PALETTE = [
    'neutral100', 'neutral200', 'neutral300', 'neutral400', 'neutral500',
    'neutral600', 'neutral700', 'neutral800', 'neutral900',
] as const;

const RED_PALETTE = [
    'red100', 'red300', 'red400', 'red500', 'red600', 'red700', 'red800',
] as const;

const HEADING_TYPOS = ['h1', 'h2', 'h3', 'h4'] as const;
const TEXT_TYPOS = [
    'textSm', 'textSmBold',
    'textBase', 'textBaseBold',
    'textLg', 'textLgBold',
] as const;

const COLORS_EXAMPLE = `
import colors from '@ui/tokens/colors';

<div style={{ backgroundColor: colors.neutral100 }}>
    <span style={{ color: colors.red600 }}>Error</span>
</div>
`;

const TYPOS_EXAMPLE = `
import typos from '@ui/token/typos';
<span style={typos.h1}>Heading 1</span>
<span style={typos.textBase}>Body text</span>
`;


export default function TokenStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="colors" gap={16}>
                <Heading typo="h2">Colors</Heading>
                <Bloc gap={40}>
                    <PaletteRow names={WHITE_PALETTE} />
                    <PaletteRow names={NEUTRAL_PALETTE} />
                    <PaletteRow names={RED_PALETTE} />
                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={COLORS_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
            <Stack id="typography" gap={16}>
                <Heading typo="h2">Typography</Heading>
                <Bloc gap={40}>
                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Headings</Heading>
                        {HEADING_TYPOS.map(name => <TypoSample key={name} name={name} />)}
                    </Stack>
                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Text</Heading>
                        {TEXT_TYPOS.map(name => <TypoSample key={name} name={name} />)}
                    </Stack>
                    
                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={TYPOS_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}


function PaletteRow({ names }: { names: readonly (keyof typeof colors)[] }) {
    return (
        <div css={paletteRowStyle}>
            {names.map(name => (
                <ColorSwatch key={name} name={name} value={colors[name]} />
            ))}
        </div>
    );
}


function ColorSwatch({ name, value }: { name: string; value: string }) {
    return (
        <Stack gap={6}>
            <div css={swatchStyle(value)} />
            <Text typo="smBold">{name}</Text>
            <Text typo="sm" color="secondary">{value}</Text>
        </Stack>
    );
}


function TypoSample({ name }: { name: keyof typeof typos }) {
    return (
        <Inline justify="between" align="center" gap={24}>
            <span css={typos[name]}>The quick brown fox jumps over the lazy dog</span>
            <Text typo="sm" color="secondary">{name}</Text>
        </Inline>
    );
}


const paletteRowStyle = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gap: '12px',
});

const swatchStyle = (value: string) => css({
    width: '100%',
    height: '56px',
    borderRadius: '6px',
    backgroundColor: value,
    border: `solid 1px ${colors.neutral200}`,
});
