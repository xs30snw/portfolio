import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.scss';
import '../styles/header.scss';
import '../styles/localeSwitcher.scss';
import '../styles/themeSwitcher.scss';
import '../styles/hero.scss';
import '../styles/skills.scss';
import '../styles/techs.scss';
import '../styles/ctaProjects.scss';
import '../styles/footer.scss';

import '../styles/projects.scss';

function MyApp({ Component, pageProps }) {
    return (<>
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    </>)
}

export default appWithTranslation(MyApp);