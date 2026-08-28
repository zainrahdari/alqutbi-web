import Image from 'next/image';
import HotelCard from '@/components/HotelCard';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { makkahHotels } from '@/data/hotels';
import styles from './page.module.css';

export const metadata = {
  title: 'Makkah Hotels | Al-Qutbi Travels',
  description: '21 premium hotel properties near Masjid al-Haram in Makkah. Book through Al-Qutbi Travels.',
};

export default function MakkahHotels() {
  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <Image src="/banner-makkah.jpg" alt="Masjid al-Haram, Makkah" fill priority />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <div className="section-label" style={{ textAlign: 'center' }}>MAKKAH AL-MUKARRAMAH</div>
          <h1 className="section-title" style={{ marginBottom: 0, textAlign: 'center' }}>21 Premium Properties</h1>
        </div>
      </div>

      <section className={`${styles.page} section`}>
        <div className="container">
          <hr className="divider" />
        </div>
        <div className="container" style={{ marginTop: '48px' }}>
          <ScrollFadeIn>
            <div className={styles.grid}>
              {makkahHotels.map(h => (
                <HotelCard key={h.id} hotel={{ ...h, city: 'Makkah' }} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
