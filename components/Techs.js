import { useTranslation } from 'next-i18next';

import { SiLinux        as IconLinux,
         SiGit          as IconGit,
         SiCplusplus    as IconCplusplus,
         SiPhp          as IconPhp,
         SiMysql        as IconMysql,
         SiPython       as IconPython,
         SiWebpack      as IconWebpack,
         SiTypescript   as IconTypescript,
         SiSass         as IconSass,
         SiBootstrap    as IconBootstrap,
         SiTailwindcss  as IconTailwindcss,
         SiNextdotjs    as IconNextdotjs } from 'react-icons/si';

function Techs() {
    const { t } = useTranslation('techs');

    return (
        <section className='techs flex'>
            <header className='techs__header container flex'>
                <h2 className='techs__title'>{t('techs__title')}</h2>
                <p className='techs__subtitle'>
                    {t('techs__subtitle')}
                </p>
            </header>
            <section className='techs__body'>
                <h3
                    className='techs__body__title container'
                    dangerouslySetInnerHTML={{ __html: t('techs__body__title') }} />
                <div className='techs__scroller'>
                    <div className='techs__card shadow' role='img' aria-label='Linux'><IconLinux /></div>
                    <div className='techs__card shadow' role='img' aria-label='Git'><IconGit /></div>
                    <div className='techs__card shadow' role='img' aria-label='C++'><IconCplusplus /></div>
                    <div className='techs__card shadow' role='img' aria-label='PHP'><IconPhp /></div>
                    <div className='techs__card shadow' role='img' aria-label='MySQL'><IconMysql /></div>
                    <div className='techs__card shadow' role='img' aria-label='Python'><IconPython /></div>
                    <div className='techs__card shadow' role='img' aria-label='Webpack'><IconWebpack /></div>
                    <div className='techs__card shadow' role='img' aria-label='TypeScript'><IconTypescript /></div>
                    <div className='techs__card shadow' role='img' aria-label='Sass'><IconSass /></div>
                    <div className='techs__card shadow' role='img' aria-label='Bootstrap'><IconBootstrap /></div>
                    <div className='techs__card shadow' role='img' aria-label='Tailwind CSS'><IconTailwindcss /></div>
                    <div className='techs__card shadow' role='img' aria-label='Next.js'><IconNextdotjs /></div>
                </div>
                <div className='techs-vertical-border'></div>
            </section>
        </section>
    );
}

export default Techs;