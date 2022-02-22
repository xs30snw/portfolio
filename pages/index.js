import Head from 'next/head';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header       from '../components/Header';
import Hero         from '../components/Hero';
import Skills       from '../components/Skills';
import Techs        from '../components/Techs';
import CTAProjects  from '../components/CTAProjects';
import Footer       from '../components/Footer';

export default function Home() {
    const { t } = useTranslation('common');
    
    return (<>
        <Head>
            <title>{t('title')}</title>
        </Head>

        <div className='wrapper'>
            <Header />
            
            <main className='index'>
                <Hero />
                <Skills />
                <Techs />
                <CTAProjects />
            </main>

            <Footer className={'footer--at-index'} />
        </div>
    </>)
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, [
            'common',
            'header',
            'locale-switcher',
            'skills',
            'techs',
            'cta-projects',
            'footer',
        ]),
    },
});