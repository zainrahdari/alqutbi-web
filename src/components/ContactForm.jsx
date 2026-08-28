"use client";

import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const name = fd.get('name');
        const interest = fd.get('interest');
        const message = fd.get('message');
        const text = `Assalamu Alaikum! My name is ${name}. I am interested in: ${interest}. ${message}`;
        window.open(`https://wa.me/923468073895?text=${encodeURIComponent(text)}`, '_blank');
      }}
    >
      <div className={styles.formField}>
        <label htmlFor="home-name" className={styles.formLabel}>Name</label>
        <input type="text" id="home-name" name="name" required className={styles.formInput} />
      </div>
      <div className={styles.formField}>
        <label htmlFor="home-interest" className={styles.formLabel}>Interested In</label>
        <select id="home-interest" name="interest" className={styles.formSelect}>
          <option value="Makkah Hotel">Makkah Hotel</option>
          <option value="Madinah Hotel">Madinah Hotel</option>
          <option value="Umrah Package">Umrah Package</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>
      <div className={styles.formField}>
        <label htmlFor="home-message" className={styles.formLabel}>Message</label>
        <textarea id="home-message" name="message" rows={4} className={styles.formTextarea} />
      </div>
      <button type="submit" className={styles.formSubmit}>Send Enquiry</button>
    </form>
  );
}
