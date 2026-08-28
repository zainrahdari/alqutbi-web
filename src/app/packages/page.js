import ScrollFadeIn from '@/components/ScrollFadeIn';
import { packages } from '@/data/hotels';
import styles from './page.module.css';

export const metadata = {
  title: 'Umrah Packages | Al-Qutbi Travels',
  description: 'Tailored Umrah packages with premium hotel stays in Makkah and Madinah.',
};

export default function Packages() {
  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <ScrollFadeIn>
          <div className={styles.header}>
            <div className="section-label">UMRAH PACKAGES</div>
            <h1 className="section-title">Tailored Experiences</h1>
          </div>
        </ScrollFadeIn>
        <div className={styles.grid}>
          {packages.map(pkg => {
            const msg = `Assalamu Alaikum, I am interested in your ${pkg.name}. Please share details and pricing.`;
            return (
              <div key={pkg.id} className={styles.card}>
                <h3 className={styles.cardName}>{pkg.name}</h3>
                <p className={styles.cardMeta}>{pkg.duration} · {pkg.hotelType}</p>
                <div className={styles.inclusions}>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className={styles.inclusion}>— {inc}</div>
                  ))}
                </div>
                <div className={styles.price}>{pkg.price}</div>
                <a href={`https://wa.me/923468073895?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">Enquire Now</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
