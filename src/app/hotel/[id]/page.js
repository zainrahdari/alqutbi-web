import Link from 'next/link';
import { makkahHotels, madinahHotels } from '@/data/hotels';
import { getHotelImage } from '@/components/HotelCard';
import styles from './page.module.css';

const allHotels = [
  ...makkahHotels.map(h => ({ ...h, city: 'Makkah' })),
  ...madinahHotels.map(h => ({ ...h, city: 'Madinah' })),
];

export function generateStaticParams() {
  return allHotels.map(h => ({ id: h.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const hotel = allHotels.find(h => h.id === id);
  if (!hotel) return { title: 'Hotel Not Found | Al-Qutbi Travels' };
  return {
    title: `${hotel.name} | Al-Qutbi Travels`,
    description: hotel.description || `${hotel.stars}-star hotel ${hotel.proximity} in ${hotel.city}`,
  };
}

export default async function HotelDetail({ params }) {
  const { id } = await params;
  const hotel = allHotels.find(h => h.id === id);

  if (!hotel) {
    return (
      <section className={`${styles.page} section`}>
        <div className="container">
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>Hotel Not Found</h1>
            <p className={styles.notFoundSub}>The hotel you are looking for does not exist.</p>
            <Link href="/makkah-hotels" className="btn-primary">Browse Hotels</Link>
          </div>
        </div>
      </section>
    );
  }

  const stars = '★'.repeat(hotel.stars);
  const imageUrl = getHotelImage(hotel);
  const whatsappMsg = `Assalamu Alaikum, I am interested in ${hotel.name} in ${hotel.city}. Please share availability and rates.`;
  const whatsappUrl = `https://wa.me/923468073895?text=${encodeURIComponent(whatsappMsg)}`;
  const backLink = hotel.city === 'Makkah' ? '/makkah-hotels' : '/madinah-hotels';

  return (
    <section className={`${styles.page} section`}>
      <div className="container">
        <Link href={backLink} className={styles.back}>← Back to {hotel.city} Hotels</Link>
        <div className={styles.top}>
          <div className={styles.imageWrap}>
            <img src={imageUrl} alt={hotel.name} className={styles.image} />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{hotel.city} · {stars} · {hotel.proximity}</div>
            <h1 className={styles.hotelName}>{hotel.name}</h1>
            {hotel.address && <p className={styles.address}>{hotel.address}</p>}
            <div className={styles.divider} />
            {hotel.description && <p className={styles.description}>{hotel.description}</p>}
            <div className={styles.amenitiesTitle}>Amenities</div>
            <div className={styles.amenities}>
              {hotel.amenities.map(a => (
                <span key={a} className={styles.amenity}>{a}</span>
              ))}
            </div>
            <div className={styles.btns}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Enquire via WhatsApp</a>
              <Link href={backLink} className="btn-ghost">Back to Hotels</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
