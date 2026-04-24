import { useEffect, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import Button from '../ui/Button';

function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const contactLinks = {
    email: 'mailto:lucasbelhassof@gmail.com',
    instagram: 'https://www.instagram.com/Lucas_Belhassof',
    whatsappNumber: '21988731312',
  };
  const whatsappHref = contactLinks.whatsappNumber
    ? `https://wa.me/${contactLinks.whatsappNumber}?text=${encodeURIComponent(t('footer.whatsappPrefill'))}`
    : null;
  const contactOptions = [
    {
      id: 'email',
      label: t('footer.options.email.label'),
      description: t('footer.options.email.description'),
      href: contactLinks.email,
      icon: <CiMail aria-hidden="true" />,
    },
    {
      id: 'whatsapp',
      label: t('footer.options.whatsapp.label'),
      description: whatsappHref
        ? t('footer.options.whatsapp.description')
        : t('footer.options.whatsapp.unavailable'),
      href: whatsappHref,
      icon: <FaWhatsapp aria-hidden="true" />,
      external: true,
    },
    {
      id: 'instagram',
      label: t('footer.options.instagram.label'),
      description: t('footer.options.instagram.description'),
      href: contactLinks.instagram,
      icon: <FaInstagram aria-hidden="true" />,
      external: true,
    },
  ];

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <footer className={styles.footer}>
      <div className={styles.cta_block}>
        <span className={styles.eyebrow}>{t('footer.eyebrow')}</span>
        <h2 className={styles.title}>{t('footer.title')}</h2>
        <Button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={styles.button}
          rounded
        >
          {t('footer.openModal')} <CiMail />
        </Button>
      </div>

      {isModalOpen ? (
        <div className={styles.modal_overlay}>
          <button
            type="button"
            className={styles.modal_backdrop}
            onClick={() => setIsModalOpen(false)}
            aria-label={t('footer.close')}
          />

          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-contact-modal-title"
            aria-describedby="footer-contact-modal-description"
          >
            <div className={styles.modal_header}>
              <div>
                <h3 id="footer-contact-modal-title" className={styles.modal_title}>
                  {t('footer.modalTitle')}
                </h3>
              </div>
              <button
                type="button"
                className={styles.close_button}
                onClick={() => setIsModalOpen(false)}
                aria-label={t('footer.close')}
              >
                <IoClose aria-hidden="true" />
              </button>
            </div>

            <p
              id="footer-contact-modal-description"
              className={styles.modal_description}
            >
              {t('footer.modalDescription')}
            </p>

            <div className={styles.options_grid}>
              {contactOptions.map((option) => {
                if (!option.href) {
                  return (
                    <div
                      key={option.id}
                      className={`${styles.option_card} ${styles.option_card_disabled}`}
                      aria-disabled="true"
                    >
                      <span className={styles.option_icon}>{option.icon}</span>
                      <span className={styles.option_content}>
                        <span className={styles.option_label}>{option.label}</span>
                        <span className={styles.option_text}>{option.description}</span>
                      </span>
                    </div>
                  );
                }

                return (
                  <a
                    key={option.id}
                    href={option.href}
                    className={styles.option_card}
                    target={option.external ? '_blank' : undefined}
                    rel={option.external ? 'noopener noreferrer' : undefined}
                  >
                    <span className={styles.option_icon}>{option.icon}</span>
                    <span className={styles.option_content}>
                      <span className={styles.option_label}>{option.label}</span>
                      <span className={styles.option_text}>{option.description}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <p className={styles.copy_right}>
        <span>LBL</span> &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
