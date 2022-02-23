import { appWithTranslation } from 'next-i18next';

import '../styles/globals.scss';
import '../styles/header.scss';
import '../styles/localeSwitcher.scss';
import '../styles/hero.scss';
import '../styles/skills.scss';
import '../styles/techs.scss';
import '../styles/ctaProjects.scss';
import '../styles/footer.scss';

import '../styles/projects.scss';

function MyApp({ Component, pageProps }) {
    return (<>
        <Component {...pageProps} />
    </>)
}

export default appWithTranslation(MyApp);