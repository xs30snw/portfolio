import { useTranslation } from 'next-i18next';

function Skills() {
    const { t } = useTranslation('skills');

    return (
        <section className='skills container flex'>
            <h2
                className='skills__title'
                dangerouslySetInnerHTML={{ __html: t('skills__title') }} />

            {/* HTML */}
            <article className='skill'>
                <h2 className='skill__title bg-gradient bg-gradient--html'><span>HTML</span></h2>
                        
                <section className='skill__body outline--html'>
                    <h3 
                        className='skill__body__title'
                        dangerouslySetInnerHTML={{ __html: t('html--skill__body__title') }} />
                    <ul>
                        <li>{t('html--skill__body__li-1')}</li>
                        <li>{t('html--skill__body__li-2')}</li>
                        <li>{t('html--skill__body__li-3')}</li>
                        <li>{t('html--skill__body__li-4')}</li>
                    </ul>
                </section>                
            </article>

            {/* CSS */}
            <article className='skill'>
                <h2 className='skill__title bg-gradient bg-gradient--css'><span>CSS</span></h2>
                        
                <section className='skill__body outline--css'>
                    <h3 
                        className='skill__body__title'
                        dangerouslySetInnerHTML={{ __html: t('css--skill__body__title') }} />
                    <ul>
                        <li>{t('css--skill__body__li-1')}</li>
                        <li>{t('css--skill__body__li-2')}</li>
                        <li>{t('css--skill__body__li-3')}</li>
                        <li>{t('css--skill__body__li-4')}</li>
                        <li>{t('css--skill__body__li-5')}</li>
                    </ul>
                </section>  
            </article>

            {/* JavaScript */}
            <article className='skill'>
                <h2 className='skill__title bg-gradient bg-gradient--js'><span>JavaScript</span></h2>

                <section className='skill__body outline--js'>
                    <h3 
                        className='skill__body__title'
                        dangerouslySetInnerHTML={{ __html: t('js--skill__body__title') }} />
                    <ul>
                        <li>{t('js--skill__body__li-1')}</li>
                        <li>{t('js--skill__body__li-2')}</li>
                        <li>{t('js--skill__body__li-3')}</li>
                        <li>{t('js--skill__body__li-4')}</li>
                    </ul>
                </section> 
            </article>
        </section>
    )
}

export default Skills;