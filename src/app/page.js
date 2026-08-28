import Image from 'next/image';
import Link from 'next/link';
import HotelCard from '@/components/HotelCard';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { makkahHotels, madinahHotels } from '@/data/hotels';
import styles from './page.module.css';

export default function Home() {
  const featured = [
    ...makkahHotels.slice(0, 3).map(h => ({ ...h, city: 'Makkah' })),
    ...madinahHotels.slice(0, 3).map(h => ({ ...h, city: 'Madinah' })),
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image src="/hero-bg.jpg" alt="Masjid al-Haram" fill className={styles.heroBg} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Image
            src="/logo.png"
            alt="Al-Qutbi Travels"
            width={260}
            height={95}
            className={styles.heroLogo}
            priority
          />
          <div className={styles.heroLabel}>MAKKAH · MADINAH · PAKISTAN</div>
          <h1 className={styles.heroTitle}>Sacred Stays.<br />Seamless Journeys.</h1>
          <p className={styles.heroSub}>Premium hotel access across the Holy Cities — curated for pilgrims, priced for agents.</p>
          <div className={styles.heroBtns}>
            <Link href="/makkah-hotels" className="btn-primary">View Hotels</Link>
            <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
          </div>
        </div>
        <div className={styles.scrollLine} />
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {[
            { num: '21+', label: 'Makkah Hotels' },
            { num: '40+', label: 'Madinah Hotels' },
            { num: '5★', label: 'Properties' },
            { num: '100%', label: 'Licensed Agency' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className={`${styles.featured} section`}>
        <div className={styles.featuredInner}>
          <ScrollFadeIn>
            <div className={styles.featuredHeader}>
              <div className="section-label">CURATED SELECTION</div>
              <h2 className="section-title">Featured Properties</h2>
            </div>
          </ScrollFadeIn>
          <div className={styles.featuredGrid}>
            {featured.map(h => <HotelCard key={h.id} hotel={h} />)}
          </div>
          <div className={styles.featuredCta}>
            <Link href="/makkah-hotels" className="btn-ghost">View All Hotels</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.whySection} section`}>
        <ScrollFadeIn>
          <div className={styles.whyInner}>
            <div className={styles.whyQuote}>
              &ldquo;We don&rsquo;t just book hotels — we <em>curate stays</em> that honour the sanctity of your journey.&rdquo;
            </div>
            <div className={styles.whyList}>
              <div className={styles.whyItem}>Licensed &amp; registered travel agency in Pakistan</div>
              <div className={styles.whyItem}>Direct sub-agent access to 60+ premium hotels</div>
              <div className={styles.whyItem}>Makkah &amp; Madinah specialist — nothing else</div>
              <div className={styles.whyItem}>24/7 WhatsApp response guarantee</div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section`}>
        <ScrollFadeIn>
          <h2 className={styles.ctaTitle}>Begin Your Sacred Journey</h2>
          <p className={styles.ctaSub}>Contact us today for the best rates across both Holy Cities.</p>
          <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className="btn-primary">Get in Touch</a>
        </ScrollFadeIn>
      </section>
    </>
  );
}
