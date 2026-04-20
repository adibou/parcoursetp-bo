import { css } from '@emotion/react';
import Bloc from './bloc';
import Stack from './stack';
import Inline from './inline';
import Heading from '../typography/heading';
import Text from '../typography/text';
import CodeBlock from '../data-display/code-block';
import colors from '../tokens/colors';


const BLOC_EXAMPLE = `
import Bloc from '@ui/layouts/bloc';

<Bloc gap={12} p={24}>
    <h3>Titre</h3>
    <p>Contenu…</p>
</Bloc>
`;

const STACK_EXAMPLE = `
import Stack from '@ui/layouts/stack';

<Stack gap={12}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Stack>

<Stack gap={8} maxWidth={400} justify="between">…</Stack>
`;

const INLINE_EXAMPLE = `
import Inline from '@ui/layouts/inline';

<Inline gap={12}>
    <Button>Annuler</Button>
    <Button>Valider</Button>
</Inline>

<Inline justify="between" align="center" gap={16}>
    <span>Titre</span>
    <Icon name="close" />
</Inline>
`;


export default function LayoutsStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="bloc" gap={16}>
                <Heading typo="h2">Bloc</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Conteneur en carte : fond blanc, coins arrondis, padding <code>p</code> (20 par défaut)
                            et <code>gap</code> vertical entre les enfants.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <div css={demoBgStyle}>
                            <Bloc gap={12} p={20}>
                                <Box label="enfant 1" />
                                <Box label="enfant 2" />
                                <Box label="enfant 3" />
                            </Bloc>
                        </div>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={BLOC_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="stack" gap={16}>
                <Heading typo="h2">Stack</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Flex colonne avec <code>gap</code>, <code>justify</code> et <code>maxWidth</code> optionnels.
                            Aucun style visuel — utilitaire pur.
                        </Text>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">gap</Heading>
                        <Inline gap={24} align="start">
                            {[4, 12, 24].map(gap => (
                                <Stack key={gap} gap={6}>
                                    <Text typo="sm" color="secondary">gap={gap}</Text>
                                    <div css={demoFrameStyle}>
                                        <Stack gap={gap}>
                                            <Box />
                                            <Box />
                                            <Box />
                                        </Stack>
                                    </div>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">maxWidth</Heading>
                        <div css={demoFrameStyle}>
                            <Stack gap={8} maxWidth={280}>
                                <Box label="maxWidth 280" />
                                <Box label="maxWidth 280" />
                            </Stack>
                        </div>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={STACK_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="inline" gap={16}>
                <Heading typo="h2">Inline</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Flex ligne avec <code>gap</code>, <code>justify</code> et <code>align</code>. Pour aligner
                            des boutons ou organiser une barre.
                        </Text>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">gap</Heading>
                        <Stack gap={8}>
                            {[4, 12, 24].map(gap => (
                                <div key={gap} css={demoFrameStyle}>
                                    <Inline gap={gap}>
                                        <Box />
                                        <Box />
                                        <Box />
                                    </Inline>
                                </div>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">justify</Heading>
                        <Stack gap={8}>
                            {(['start', 'center', 'end', 'between'] as const).map(justify => (
                                <Stack key={justify} gap={4}>
                                    <Text typo="sm" color="secondary">justify="{justify}"</Text>
                                    <div css={demoFrameStyle}>
                                        <Inline gap={8} justify={justify}>
                                            <Box />
                                            <Box />
                                            <Box />
                                        </Inline>
                                    </div>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack gap={8}>
                        <Heading typo="h4" color="secondary">align</Heading>
                        <Stack gap={8}>
                            {(['start', 'center', 'end'] as const).map(align => (
                                <Stack key={align} gap={4}>
                                    <Text typo="sm" color="secondary">align="{align}"</Text>
                                    <div css={demoFrameTallStyle}>
                                        <Inline gap={8} align={align}>
                                            <Box />
                                            <Box height={48} />
                                            <Box height={72} />
                                        </Inline>
                                    </div>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={INLINE_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}


function Box({ label, height = 32 }: { label?: string; height?: number }) {
    return (
        <div css={boxStyle(height)}>
            {label && <Text typo="sm" color="secondary">{label}</Text>}
        </div>
    );
}


const boxStyle = (height: number) => css({
    height: `${height}px`,
    minWidth: '60px',
    padding: '0 10px',
    borderRadius: '4px',
    backgroundColor: colors.neutral200,
    border: `solid 1px ${colors.neutral300}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const demoBgStyle = css({
    padding: '16px',
    backgroundColor: colors.neutral100,
    borderRadius: '8px',
});

const demoFrameStyle = css({
    padding: '12px',
    border: `dashed 1px ${colors.neutral300}`,
    borderRadius: '6px',
    backgroundColor: colors.neutral100,
});

const demoFrameTallStyle = css({
    padding: '12px',
    border: `dashed 1px ${colors.neutral300}`,
    borderRadius: '6px',
    backgroundColor: colors.neutral100,
    minHeight: '100px',
});
