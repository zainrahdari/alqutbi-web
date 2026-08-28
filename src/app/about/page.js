import ScrollFadeIn from '@/components/ScrollFadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Al-Qutbi Travels',
  description: 'Learn about Al-Qutbi Travels — a licensed travel agency in Pakistan specializing in Makkah and Madinah hotel bookings.',
};

export default function About() {
  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <ScrollFadeIn>
          <div className={styles.header}>
            <div className="section-label">ABOUT US</div>
            <h1 className="section-title">Your Trusted Partner</h1>
          </div>
        </ScrollFadeIn>

        <div className={styles.split}>
          <div className={styles.text}>
            <p>Al-Qutbi Travels is a licensed and registered travel agency based in Pakistan, specializing exclusively in Makkah and Madinah hotel accommodations for Umrah pilgrims and travel agents worldwide.</p>
            <p>With direct sub-agent access to over 60 premium properties across both Holy Cities, we offer competitive rates, real-time availability, and personalized service that larger operators simply cannot match.</p>
            <p>Our focus is narrow by design — we do Makkah and Madinah hotels, and we do them better than anyone. From 3-star economy stays to 5-star Haram-view suites, every property in our portfolio is personally vetted.</p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>21+</div>
              <div className={styles.statLabel}>Makkah Hotels</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>40+</div>
              <div className={styles.statLabel}>Madinah Hotels</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>24/7</div>
              <div className={styles.statLabel}>WhatsApp Support</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Licensed Agency</div>
            </div>
          </div>
        </div>

        <ScrollFadeIn>
          <div className={styles.mission}>
            <p className={styles.missionText}>Our mission is simple — to make your sacred journey seamless, affordable, and memorable. Every booking is handled with the care and attention it deserves.</p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

