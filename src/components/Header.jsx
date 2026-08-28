"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/makkah-hotels', label: 'Makkah Hotels' },
  { href: '/madinah-hotels', label: 'Madinah Hotels' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Al-Qutbi Travel & Tours"
              width={170}
              height={170}
              className={styles.logoImg}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            {links.map(l => (
              <Link key={l.href} href={l.href} className={styles.navLink}>{l.label}</Link>
            ))}
          </nav>

          <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <FaWhatsapp /> Enquire Now
          </a>

          <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.overlay}>
          <button className={styles.overlayClose} onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          <Image src="/logo.png" alt="Al-Qutbi" width={200} height={72} className={styles.overlayLogo} />
          {links.map(l => (
            <Link key={l.href} href={l.href} className={styles.overlayLink} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
