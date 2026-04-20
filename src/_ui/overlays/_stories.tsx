import { useForm } from 'react-hook-form';
import Bloc from '../layouts/bloc';
import Stack from '../layouts/stack';
import Inline from '../layouts/inline';
import Heading from '../typography/heading';
import Text from '../typography/text';
import Button from '../buttons/button';
import OutlinedButton from '../buttons/outlined-button';
import CodeBlock from '../data-display/code-block';
import SideModal from './side-modal';
import TitledSideModal from './titled-side-modal';
import SideModalForm from './side-modal-form';
import confirmation from './confirmation';
import useModal from './use-modal';
import FormInput from '../forms/form-input';
import FormSelect from '../forms/form-select';


const CONFIRMATION_EXAMPLE = `
import confirmation from '@ui/overlays/confirmation';

confirmation(
    'Supprimer cet élément ?',
    'Cette action est irréversible.',
    () => deleteItem(id),
);

// avec couleur & libellé custom :
confirmation('Publier ?', 'Le contenu sera visible.', publish, 'neutral', 'Publier');
`;

const USE_MODAL_EXAMPLE = `
import useModal from '@ui/overlays/use-modal';

const modal = useModal();

<Button onClick={modal.show}>Ouvrir</Button>
{modal.visible && (
    <SideModal onClose={modal.hide}>…</SideModal>
)}
`;

const SIDE_MODAL_EXAMPLE = `
import SideModal from '@ui/overlays/side-modal';
import useModal from '@ui/overlays/use-modal';

const modal = useModal();

<Button onClick={modal.show}>Ouvrir</Button>
{modal.visible && (
    <SideModal onClose={modal.hide}>
        <div style={{ padding: 24 }}>Contenu libre…</div>
    </SideModal>
)}
`;

const TITLED_SIDE_MODAL_EXAMPLE = `
import TitledSideModal from '@ui/overlays/titled-side-modal';

<TitledSideModal title="Détails" onClose={close}>
    <Text>Contenu de la modale.</Text>
</TitledSideModal>
`;

const SIDE_MODAL_FORM_EXAMPLE = `
import { useForm } from 'react-hook-form';
import SideModalForm from '@ui/overlays/side-modal-form';

const form = useForm({
    mode: 'onTouched',
    defaultValues: { name: '', role: '' },
});

<SideModalForm
    form={form}
    title="Éditer le profil"
    onClose={close}
    onSubmit={async (data) => save(data)}
>
    <FormInput name="name" label="Nom" required />
    <FormSelect name="role" label="Rôle" options={ROLES} placeholder="Choisir…" />
</SideModalForm>
`;


export default function OverlaysStories() {
    return (
        <Stack gap={40} maxWidth={1200}>
            <Stack id="confirmation" gap={16}>
                <Heading typo="h2">Confirmation</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Fonction impérative qui affiche une modale centrée de confirmation. Le callback est appelé
                            uniquement si l'utilisateur confirme.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <Inline gap={12}>
                            <Button
                                color="error"
                                onClick={() => confirmation(
                                    'Supprimer cet élément ?',
                                    'Cette action est irréversible.',
                                    () => alert('Supprimé !'),
                                )}
                            >
                                Supprimer…
                            </Button>
                            <Button
                                color="neutral"
                                onClick={() => confirmation(
                                    'Publier ?',
                                    'Le contenu sera visible publiquement.',
                                    () => alert('Publié !'),
                                    'neutral',
                                    'Publier',
                                )}
                            >
                                Publier…
                            </Button>
                        </Inline>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={CONFIRMATION_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="use-modal" gap={16}>
                <Heading typo="h2">useModal</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Petit hook pour gérer l'état d'ouverture d'une modale — renvoie <code>visible</code>,
                            <code>show</code> et <code>hide</code>. Évite de réécrire le même <code>useState</code>
                            à chaque fois.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={USE_MODAL_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="side-modal" gap={16}>
                <Heading typo="h2">Side modal</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Modale latérale nue — contenu libre. Clique sur le fond pour fermer.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <SideModalDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={SIDE_MODAL_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="titled-side-modal" gap={16}>
                <Heading typo="h2">Titled side modal</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Variante avec un header (titre + bouton de fermeture).
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <TitledSideModalDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={TITLED_SIDE_MODAL_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>

            <Stack id="side-modal-form" gap={16}>
                <Heading typo="h2">Side modal form</Heading>
                <Bloc gap={40}>
                    <Stack gap={8}>
                        <Text color="secondary">
                            Modale latérale pensée pour l'édition : header avec titre, corps scrollable contenant un
                            formulaire <code>react-hook-form</code>, et un footer en bloc (submit + annuler) épinglé en bas.
                            Fermeture automatique après un submit réussi.
                        </Text>
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Démo :</Heading>
                        <SideModalFormDemo />
                    </Stack>

                    <Stack gap={16}>
                        <Heading typo="h4" color="secondary">Exemple :</Heading>
                        <CodeBlock code={SIDE_MODAL_FORM_EXAMPLE} />
                    </Stack>
                </Bloc>
            </Stack>
        </Stack>
    );
}


function SideModalDemo() {
    const modal = useModal();
    return (
        <>
            <OutlinedButton onClick={modal.show}>Ouvrir la modale</OutlinedButton>
            {modal.visible && (
                <SideModal onClose={modal.hide}>
                    <div style={{ padding: 24 }}>
                        <Text color="secondary">
                            Le contenu de la modale est entièrement à ta charge.
                        </Text>
                    </div>
                </SideModal>
            )}
        </>
    );
}


function TitledSideModalDemo() {
    const modal = useModal();
    return (
        <>
            <OutlinedButton onClick={modal.show}>Ouvrir</OutlinedButton>
            {modal.visible && (
                <TitledSideModal title="Détails" onClose={modal.hide}>
                    <Stack gap={12}>
                        <Text>Une modale avec un titre et un bouton de fermeture.</Text>
                        <Text color="secondary">
                            Idéal pour afficher des détails, des informations ou du contenu statique.
                        </Text>
                    </Stack>
                </TitledSideModal>
            )}
        </>
    );
}


const ROLES = [
    { value: 'admin', label: 'Admin' },
    { value: 'member', label: 'Membre' },
    { value: 'guest', label: 'Invité' },
];

function SideModalFormDemo() {
    const modal = useModal();
    const form = useForm({ mode: 'onTouched', defaultValues: { name: '', role: '' } });

    return (
        <>
            <OutlinedButton
                onClick={() => {
                    form.reset({ name: '', role: '' });
                    modal.show();
                }}
            >
                Éditer le profil
            </OutlinedButton>
            {modal.visible && (
                <SideModalForm
                    form={form}
                    title="Éditer le profil"
                    onClose={modal.hide}
                    onSubmit={async () => { await new Promise(r => setTimeout(r, 400)); }}
                >
                    <FormInput name="name" label="Nom" required min={3} max={30} />
                    <FormSelect name="role" label="Rôle" required placeholder="Choisir…" options={ROLES} />
                </SideModalForm>
            )}
        </>
    );
}
