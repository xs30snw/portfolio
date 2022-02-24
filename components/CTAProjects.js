import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { SiGithub as IconGithub } from 'react-icons/si';

function CTAProjects() {
    const { t } = useTranslation('cta-projects');

    return (
        <section className='cta-projects container flex' aria-labelledby='cta-projects__title'>
            <h2
                id='cta-projects__title'
                className='cta-projects__title'
                dangerouslySetInnerHTML={{ __html: t('cta-projects__title') }} />
            <div className='cta-projects__body'>
                <Link href='/projects' passHref>
                    <a className='cta-projects__link-projects'>
                        {t('cta-projects__link-projects')}
                    </a>
                </Link>
                <a href='https://github.com/xs30snw' target='_blank' className='cta-projects__link-github' rel="noreferrer">
                    <IconGithub role='img' aria-label='GitHub' />
                </a> 
            </div>
            
            <p className='cta-projects__note'>
                {t('cta-projects__note')}
            </p>
        </section>
    );
}

export default CTAProjects;