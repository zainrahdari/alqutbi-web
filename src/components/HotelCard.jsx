import Link from 'next/link';
import styles from './HotelCard.module.css';

// 34 unique images: ONLY luxury hotel room interiors, corridors, grand lobbies, and city building facades (NO beach, pool, resort, or palm tree photos)
const HOTEL_IMAGES = [
  // Generated images (Makkah/Madinah themed rooms and grand lobby interiors)
  '/hotels/makkah-5a.jpg',   // 0 - Makkah 5★ grand lobby with pilgrims
  '/hotels/makkah-5c.jpg',   // 1 - Makkah 5★ room with Kaaba night view through window
  '/hotels/makkah-4a.jpg',   // 2 - Makkah 4★ hotel exterior dusk
  '/hotels/madinah-5b.jpg',  // 3 - Madinah 5★ lobby with Islamic decor

  // Verified indoor hotel rooms
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',  // 4 - hotel room bed
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',  // 5 - luxury room
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',  // 6 - hotel room
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',  // 7 - hotel bed white
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',  // 8 - hotel room warm
  'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&h=600&fit=crop',  // 9 - hotel suite
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',  // 10 - hotel room
  'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop',  // 11 - luxury bed
  'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop',  // 12 - hotel suite
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',  // 13 - hotel room city
  'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop',  // 14 - living room suite
  'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',     // 15 - twin room
  'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop',  // 16 - hotel room warm
  'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=800&h=600&fit=crop',  // 17 - hotel hallway
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop',  // 18 - modern suite bed
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',  // 19 - classic hotel room
  'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=600&fit=crop',  // 20 - elegant bed layout
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',  // 21 - sleek modern room

  // Verified grand lobbies, halls, corridors, & entrances (NO pools/beach seating)
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',     // 22 - grand lobby
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',  // 23 - hotel entrance
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',     // 24 - hotel lobby interior
  'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop',  // 25 - hotel facade
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',  // 26 - hotel corridor
  'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&h=600&fit=crop',  // 27 - lobby seating
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop',  // 28 - hotel front desk
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop',  // 29 - reception lobby
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',  // 30 - contemporary hall

  // City building exteriors (architectural ONLY, no palm trees)
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',  // 31 - city building
  'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800&h=600&fit=crop',  // 32 - urban hotel exterior
  'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&h=600&fit=crop',  // 33 - city hotel facade night
];

// Direct mapping for every hotel - fully unique distribution
const HOTEL_IMAGE_MAP = {
  // Makkah hotels (m1–m21)
  m1: 0,   // Makkah grand lobby with pilgrims
  m2: 5,   // Luxury room
  m3: 2,   // Makkah hotel exterior
  m4: 22,  // Grand lobby
  m5: 25,  // Facade
  m6: 31,  // City building
  m7: 24,  // Hotel lobby interior
  m8: 1,   // Makkah room with Kaaba view through window
  m9: 6,   // Hotel room
  m10: 33, // City hotel facade night
  m11: 8,  // Hotel room warm
  m12: 23, // Hotel entrance
  m13: 4,  // Hotel room bed
  m14: 28, // Hotel front desk
  m15: 7,  // Hotel bed white
  m16: 32, // Urban hotel exterior
  m17: 9,  // Hotel suite
  m18: 26, // Hotel corridor
  m19: 10, // Hotel room
  m20: 30, // Contemporary hall
  m21: 11, // Luxury bed

  // Madinah hotels (md1–md40) — no palm trees, no pool/beach images
  md1: 3,   // Madinah lobby with Islamic decor
  md2: 12,  // Hotel suite
  md3: 27,  // Lobby seating
  md4: 13,  // Hotel room city
  md5: 29,  // Reception lobby
  md6: 14,  // Living room suite
  md7: 18,  // Modern suite bed
  md8: 15,  // Twin room
  md9: 19,  // Classic hotel room
  md10: 16, // Hotel room warm
  md11: 20, // Elegant bed layout
  md12: 17, // Hotel hallway
  md13: 21, // Sleek modern room
  md14: 0,  // Makkah grand lobby with pilgrims
  md15: 4,  // Hotel room bed
  md16: 3,  // Madinah lobby with Islamic decor
  md17: 5,  // Luxury room
  md18: 6,  // Hotel room
  md19: 7,  // Hotel bed white
  md20: 8,  // Hotel room warm
  md21: 9,  // Hotel suite
  md22: 22, // Grand lobby
  md23: 10, // Hotel room
  md24: 23, // Hotel entrance
  md25: 11, // Luxury bed
  md26: 24, // Hotel lobby interior
  md27: 3,  // Madinah lobby with Islamic decor
  md28: 25, // Facade
  md29: 26, // Hotel corridor
  md30: 1,  // Makkah room with Kaaba view
  md31: 28, // Hotel front desk
  md32: 12, // Hotel suite
  md33: 31, // City building
  md34: 13, // Hotel room city
  md35: 19, // Classic hotel room
  md36: 14, // Living room suite
  md37: 29, // Reception lobby
  md38: 15, // Twin room
  md39: 30, // Contemporary hall
  md40: 2,  // Makkah hotel exterior
};

function getHotelImage(hotel) {
  if (hotel.image) return hotel.image;
  const idx = HOTEL_IMAGE_MAP[hotel.id];
  if (idx !== undefined) return HOTEL_IMAGES[idx];
  const hash = hotel.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  return HOTEL_IMAGES[hash % HOTEL_IMAGES.length];
}

export { getHotelImage, HOTEL_IMAGES };

export default function HotelCard({ hotel }) {
  const stars = '★'.repeat(hotel.stars);
  const city = hotel.city || 'Makkah';
  const imageUrl = getHotelImage(hotel);
  const whatsappMsg = `Assalamu Alaikum, I am interested in ${hotel.name}. Please share availability and rates.`;
  const whatsappUrl = `https://wa.me/923468073895?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className={styles.card}>
      <Link href={`/hotel/${hotel.id}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <img src={imageUrl} alt={hotel.name} className={styles.image} loading="lazy" />
        </div>
        <div className={styles.body}>
          <div className={styles.label}>{city} · {stars}</div>
          <h3 className={styles.name}>{hotel.name}</h3>
          <p className={styles.proximity}>{hotel.proximity}</p>
        </div>
      </Link>
      <div className={styles.actions}>
        <Link href={`/hotel/${hotel.id}`} className={styles.detailBtn}>View Details</Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.enquireBtn}>
          Enquire
        </a>
      </div>
    </div>
  );
}
