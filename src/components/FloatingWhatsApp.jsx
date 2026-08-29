"use client";

import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/923468073895" target="_blank" rel="noopener noreferrer" className={styles.btn} title="Contact us on WhatsApp">
      <FaWhatsapp />
    </a>
  );
}
