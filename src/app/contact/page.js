import ContactForm from '@/components/ContactForm';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Al-Qutbi Travels',
  description: 'Get in touch with Al-Qutbi Travels for Makkah and Madinah hotel bookings and Umrah packages.',
};

export default function Contact() {
  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <ScrollFadeIn>
          <div className={styles.header}>
            <div className="section-label">GET IN TOUCH</div>
            <h1 className="section-title">Let&rsquo;s Plan Your Journey</h1>
          </div>
        </ScrollFadeIn>

        <div className={styles.split}>
          <div className={styles.left}>
            <p className={styles.intro}>
              Have questions about our hotels or Umrah packages? Reach out directly on WhatsApp for the fastest response.
            </p>
            <div className={styles.details}>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>WhatsApp</div>
                <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className={styles.infoGold}>
                  +92 346-8073895
                </a>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Email</div>
                <a href="mailto:alqutbi95@gmail.com" className={styles.infoValue}>alqutbi95@gmail.com</a>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Location</div>
                <span className={styles.infoMuted}>Pakistan — Serving Worldwide</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
