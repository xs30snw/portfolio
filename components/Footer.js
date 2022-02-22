import { useTranslation } from 'next-i18next';

function Footer({className}) {
    const { t } = useTranslation('footer');

    return (
        <footer className={'container ' + className} >
            <address className='footer__address'>
                {t('footer__address-1')}<br />
                {t('footer__address-2')} <a href='mailto:e4n22s@gmail.com' className='link'>e-mail</a>.
            </address>
        </footer>
    );
}

export default Footer;