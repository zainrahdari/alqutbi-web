import Image from 'next/image';
import HotelCard from '@/components/HotelCard';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { madinahHotels } from '@/data/hotels';
import styles from './page.module.css';

export const metadata = {
  title: 'Madinah Hotels | Al-Qutbi Travels',
  description: '40 curated hotel properties near Masjid an-Nabawi in Madinah. Book through Al-Qutbi Travels.',
};

export default function MadinahHotels() {
  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <Image src="/banner-madinah.jpg" alt="Masjid an-Nabawi, Madinah" fill priority />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <div className="section-label" style={{ textAlign: 'center' }}>AL-MADINAH AL-MUNAWWARAH</div>
          <h1 className="section-title" style={{ marginBottom: 0, textAlign: 'center' }}>40 Curated Hotels</h1>
        </div>
      </div>

      <section className={`${styles.page} section`}>
        <div className="container">
          <hr className="divider" />
        </div>
        <div className="container" style={{ marginTop: '48px' }}>
          <ScrollFadeIn>
            <div className={styles.grid}>
              {madinahHotels.map(h => (
                <HotelCard key={h.id} hotel={{ ...h, city: 'Madinah' }} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
