import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { SiGithub as IconGithub } from 'react-icons/si';

function CTAProjects() {
    const { t } = useTranslation('cta-projects');

    return (
        <section className='cta-projects container flex'>
            <h2 className='cta-projects__title'>
                {t('cta-projects__title')}
            </h2>
            <div className='cta-projects__body'>
                <span className='cta-projects__link-projects'>
                    {t('cta-projects__link-projects')}
                </span>
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