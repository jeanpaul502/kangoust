import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { addCollection } from '@iconify/react';
import griddyIcons from '@iconify-json/griddy-icons/icons.json';
import solarIcons from '@iconify-json/solar/icons.json';

// Enregistrement global des icônes pour un chargement instantané sans requête réseau
addCollection(griddyIcons);
addCollection(solarIcons);

const appName = import.meta.env.VITE_APP_NAME || 'Kangoust';

createInertiaApp({
    title: (title) => title ? title : appName,
    resolve: (name) => {
        const pages = import.meta.glob('./screens/**/*.jsx');
        // Map: "Landing"          => views/landing/pages/Landing.jsx
        // Map: "Auth/Login"       => views/auth/pages/Login.jsx
        // Map: "Onboarding/Index" => views/onboarding/pages/Index.jsx
        const parts = name.split('/');
        let path;
        if (name === 'Dashboard') {
            path = './screens/dashboard/Home/pages/HomePage.jsx';
        } else if (parts.length === 1) {
            const module = parts[0].toLowerCase();
            path = `./screens/${module}/pages/${parts[0]}.jsx`;
        } else {
            const module = parts[0].toLowerCase();
            const page = parts[parts.length - 1];
            path = `./screens/${module}/pages/${page}.jsx`;
        }
        return resolvePageComponent(path, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#f59e0b',
        showSpinner: true,
    },
});
