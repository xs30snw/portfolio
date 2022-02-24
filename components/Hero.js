import { useTranslation } from 'next-i18next';

function Hero() {
    const { t } = useTranslation('common');

    return (
        <section className='hero' aria-labelledby='hero__title'>
            <div className='container flex'>
                <h1 id='hero__title' className='hero__title'>
                    {t('hero__title')}
                </h1>
                <p
                    className='hero__desc-1'
                    dangerouslySetInnerHTML={{ __html: t('hero__desc-1') }} />
                <p
                    className='hero__desc-2'
                    dangerouslySetInnerHTML={{ __html: t('hero__desc-2') }} />
            </div>
        </section>
    );
}

export default Hero;