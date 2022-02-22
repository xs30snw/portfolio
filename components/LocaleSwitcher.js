import React from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

function LocaleSwitcher() {
    const router = useRouter();
    const { t } = useTranslation('locale-switcher');

    const { pathname, asPath, query } = router;
    /**
     * Change just the locale and maintain all other route information including href's query
     */
    function changeLocale() {
        const nextLocale = 
            router.locale === 'en' ? 'ru' : 'en';
        router.push({ pathname, query }, asPath, { locale: nextLocale });
    };
      
    return (<div className='locale-switcher'>
        <label htmlFor='locale-switch' className='locale-switcher__label'>{t('lang')}</label>
        <input  type='checkbox'
                role='switch' 
                id='locale-switch' 
                className={'locale-switcher__switch' + (router.locale === 'en' ? '' : ' locale-ru')}
                onClick={() => changeLocale()} />
    </div>)
}

export default LocaleSwitcher;