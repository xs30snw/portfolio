import fs   from 'fs';
import path from 'path';

import Head from 'next/head';

import { useTranslation }         from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header      from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer      from '../components/Footer';

export default function Projects({ projects }) {
    const { t } = useTranslation('projects');

    return (<>
        <Head>
            <title>{t('title')}</title>
        </Head>

        <div className='wrapper'>

            <Header />

            <main className='projects'>
                <h2 className='projects__title container'>{t('projects__title')}</h2>
                <div className='projects__cards container flex'>
                    {
                        projects.map( (item, index) => (
                            <ProjectCard 
                                key = {'project-'+index}
                                project = {item} />
                        ))
                    }
                </div>
                <p className='projects__subtitle container'>{t('projects__subtitle')}</p>
            </main>  

            <Footer />
        </div>
    </>)
};

export const getStaticProps = async ({ locale }) => {

    const file = fs.readFileSync(path.join('projects/projects.json'));
    const fileJson = JSON.parse(file);
    const projects = locale === 'en'
        ? fileJson['projects-en']
        : fileJson['projects-ru'];

    return {
        props: {
            projects,
            ...await serverSideTranslations(locale, [
                'header',
                'locale-switcher',
                'projects',
                'footer',
            ]),
        }
    }
};