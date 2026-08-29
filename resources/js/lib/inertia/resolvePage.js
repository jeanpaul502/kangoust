const pages = import.meta.glob('../../screens/**/pages/*.jsx');

const legacyPages = {
    Landing: '../../screens/landing/pages/Landing.jsx',
    Onboarding: '../../screens/onboarding/pages/Onboarding.jsx',
};

export function inertiaPagePath(name) {
    if (legacyPages[name]) return legacyPages[name];
    const segments = name.split('/').filter(Boolean);
    if (segments.length < 2) return `../../screens/${name.toLowerCase()}/pages/${name}.jsx`;
    const page = segments.pop();
    const root = segments.shift().toLowerCase();
    return `../../screens/${[root, ...segments].join('/')}/pages/${page}.jsx`;
}

export function resolveInertiaPage(name, resolver) {
    const path = inertiaPagePath(name);
    if (!pages[path]) throw new Error(`Page Inertia introuvable: ${name} (${path})`);
    return resolver(path, pages);
}
