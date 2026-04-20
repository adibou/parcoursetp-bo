import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, Route, useLocation } from 'react-router-dom';
import colors from './tokens/colors';
import Bloc from './layouts/bloc';
import Heading from './typography/heading';
import Inline from './layouts/inline';
import Stack from './layouts/stack';
import TokenStories from './tokens/_stories';
import TypographyStories from './typography/_stories';
import ButtonsStories from './buttons/_stories';
import ElementsStories from './elements/_stories';
import InputsStories from './inputs/_stories';
import FormsStories from './forms/_stories';
import OverlaysStories from './overlays/_stories';
import LayoutsStories from './layouts/_stories';


type StorySection = {
    to: string;
    label: string;
    subs?: { id: string; label: string }[];
};

const SECTIONS: StorySection[] = [
    { to: 'tokens', label: 'Tokens', subs: [
        { id: 'colors', label: 'Colors' },
        { id: 'typography', label: 'Typography' },
    ]},
    { to: 'typography', label: 'Typography', subs: [
        { id: 'headings', label: 'Headings' },
        { id: 'text', label: 'Text' },
    ]},
    { to: 'layouts', label: 'Layouts', subs: [
        { id: 'bloc', label: 'Bloc' },
        { id: 'stack', label: 'Stack' },
        { id: 'inline', label: 'Inline' },
    ]},
    { to: 'buttons', label: 'Buttons', subs: [
        { id: 'overview', label: 'Overview' },
        { id: 'button', label: 'Button' },
        { id: 'outlined-button', label: 'Outlined button' },
        { id: 'link-button', label: 'Link button' },
        { id: 'block-prop', label: 'Block prop' },
    ]},
    { to: 'elements', label: 'Elements', subs: [
        { id: 'icon', label: 'Icon' },
        { id: 'tag', label: 'Tag' },
    ]},
    { to: 'inputs', label: 'Inputs', subs: [
        { id: 'label', label: 'Label' },
        { id: 'input', label: 'Input' },
        { id: 'input-number', label: 'Input number' },
        { id: 'input-password', label: 'Input password' },
        { id: 'textarea', label: 'Textarea' },
        { id: 'search-input', label: 'Search input' },
        { id: 'select', label: 'Select' },
    ]},
    { to: 'forms', label: 'Forms', subs: [
        { id: 'overview', label: 'Overview' },
        { id: 'form-input', label: 'FormInput' },
        { id: 'form-textarea', label: 'FormTextarea' },
        { id: 'form-number', label: 'FormNumber' },
        { id: 'form-password', label: 'FormPassword' },
        { id: 'form-select', label: 'FormSelect' },
    ]},
    { to: 'overlays', label: 'Overlays', subs: [
        { id: 'confirmation', label: 'Confirmation' },
        { id: 'use-modal', label: 'useModal' },
        { id: 'side-modal', label: 'Side modal' },
        { id: 'titled-side-modal', label: 'Titled side modal' },
        { id: 'side-modal-form', label: 'Side modal form' },
    ]},
];


export function storiesRoutes() {
    return (
        <Route path="stories" element={<Stories />}>
            <Route index element={<div></div>} />
            <Route path="tokens" element={<TokenStories />} />
            <Route path="typography" element={<TypographyStories />} />
            <Route path="layouts" element={<LayoutsStories />} />
            <Route path="buttons" element={<ButtonsStories />} />
            <Route path="elements" element={<ElementsStories />} />
            <Route path="inputs" element={<InputsStories />} />
            <Route path="forms" element={<FormsStories />} />
            <Route path="overlays" element={<OverlaysStories />} />
        </Route>
    );
}


export default function Stories() {
    const mainRef = useRef<HTMLElement>(null);
    const { pathname } = useLocation();
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const currentParent = pathname.split('/').filter(Boolean)[1] ?? null;
    const currentSubs = SECTIONS.find(s => s.to === currentParent)?.subs ?? [];

    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0 });
        setActiveSection(currentSubs[0]?.id ?? null);
    }, [pathname]);

    useEffect(() => {
        const main = mainRef.current;
        if (!main || currentSubs.length === 0) return;

        const elements = currentSubs
            .map(sub => document.getElementById(sub.id))
            .filter((el): el is HTMLElement => el !== null);
        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActiveSection(visible[0].target.id);
            },
            { root: main, rootMargin: '0px 0px -300px 0px', threshold: 0 },
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        const main = mainRef.current;
        if (!el || !main) return;
        const top = main.scrollTop + el.getBoundingClientRect().top - main.getBoundingClientRect().top - 24;
        main.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <div css={layoutStyle}>
            <div css={navtyle}>
                <Bloc gap={8}>
                    <Inline justify="center"><Heading typo="h4">UI Storybook</Heading></Inline>
                    <Stack>
                        {SECTIONS.map(section => (
                            <div key={section.to}>
                                <StoryLink to={section.to}>{section.label}</StoryLink>
                                {currentParent === section.to && section.subs && (
                                    <div css={subNavStyle}>
                                        {section.subs.map(sub => (
                                            <button
                                                key={sub.id}
                                                type="button"
                                                onClick={() => scrollToSection(sub.id)}
                                                css={subLinkStyle(activeSection === sub.id)}
                                            >
                                                {sub.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Stack>
                </Bloc>
            </div>

            <main ref={mainRef} css={contentStyle}>
                <Outlet />
            </main>
        </div>
    );
}


function StoryLink({ to, children }: { to: string; children: React.ReactNode }) {
    return (
        <NavLink to={to} end>
            {({ isActive }) => <span css={navLinkStyle(isActive)}>{children}</span>}
        </NavLink>
    );
}


const navtyle = css({
    paddingTop: '40px',
    paddingLeft: '40px',
});

const layoutStyle = css({
    display:'grid',
    gridTemplateColumns: '250px 1fr',
    height: '100vh',
    gap:'40px',
    backgroundColor: colors.neutral100,
});

const contentStyle = css({
    width: '100%',
    margin: '0 auto',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingRight: '40px',
    overflowY: 'auto',
    minHeight: 0,
});


const navLinkStyle = (isActive: boolean) => css({
    display: 'block',
    padding: '8px 12px',
    borderRadius: '5px',
    fontSize: '14px',
    textDecoration: 'none',
    color: isActive ? colors.neutral900 : colors.neutral600,
    fontWeight: isActive ? 600 : 400,
    backgroundColor: isActive ? colors.neutral200 : 'transparent',
    '&:hover': {
        backgroundColor: isActive ? colors.neutral200 : colors.neutral100,
    },
});

const subNavStyle = css({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '16px',
    marginTop: '4px',
    marginBottom: '4px',
    paddingLeft: '10px',
    borderLeft: `solid 1px ${colors.neutral300}`,
});

const subLinkStyle = (isActive: boolean) => css({
    background: 'none',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '13px',
    fontFamily: 'inherit',
    color: isActive ? colors.neutral900 : colors.neutral600,
    fontWeight: isActive ? 600 : 400,
    backgroundColor: isActive ? colors.neutral100 : 'transparent',
    '&:hover': {
        backgroundColor: isActive ? colors.neutral200 : colors.neutral100,
        color: colors.neutral900,
    },
});
