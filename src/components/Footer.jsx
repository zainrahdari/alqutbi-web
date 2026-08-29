import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Image src="/logo.png" alt="Al-Qutbi Travel & Tours" width={160} height={56} className={styles.logoImg} />
          </div>
          <div>
            <div className={styles.colTitle}>Quick Links</div>
            <Link href="/makkah-hotels" className={styles.link}>Makkah Hotels</Link>
            <Link href="/madinah-hotels" className={styles.link}>Madinah Hotels</Link>
            <Link href="/packages" className={styles.link}>Umrah Packages</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div>
            <div className={styles.colTitle}>Contact</div>
            <p className={styles.contactLine}>WhatsApp: <span className={styles.contactGold}>+92 346-8073895</span></p>
            <p className={styles.contactLine}>Email: alqutbi95@gmail.com</p>
            <p className={styles.contactLine}>Pakistan — Serving Worldwide</p>
          </div>
        </div>

        <div className={styles.terms}>
          <div className={styles.termsTitle}>Terms &amp; Conditions</div>
          <div className={styles.termsList}>
            <div className={styles.termsItem}>• Reservation should be made according to the Gregorian calendar</div>
            <div className={styles.termsItem}>• Check-in: 04:00 PM | Check-out: 12:00 PM</div>
            <div className={styles.termsItem}>• All reservations departing before booked check-out date will be charged for remaining nights</div>
            <div className={styles.termsItem}>• High Season: Cancellation free 30 days prior — after that 1 night fee charged, full amount if cancelled 7 days before arrival</div>
            <div className={styles.termsItem}>• Low/Mid Season: Cancellation free 14 days prior — after that 1 night fee, full amount if cancelled 3 days before arrival</div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© 2025 Al-Qutbi Travels. Licensed Travel Agency, Pakistan.</span>
          <div className={styles.socials}>
            <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaWhatsapp /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" className={styles.socialIcon}><FaFacebook /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
