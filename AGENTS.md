<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Al-Qutbi Travels Website - Project Context

**Last Updated:** July 2026
**Purpose:** This document provides context for any LLM or developer picking up this project. It outlines the current state, tech stack, design system, and next steps for the Al-Qutbi Travels web application.

## 1. Tech Stack & Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS (CSS Modules for components, `globals.css` for design system). **No TailwindCSS is used.**
- **Deployment:** Ready for Vercel/Netlify (standard Next.js build).
- **Data Source:** Static JSON/JS arrays located in `src/data/hotels.js`.

## 2. Design System
- **Primary Color:** Dark Green (`#1B4332`)
- **Accent/Gold Color:** Gold (`#C9A84C`)
- **Background:** White/Off-white for clean contrast.
- **Typography:**
  - Headings: *Playfair Display* (adds a premium, elegant feel).
  - Body: *Inter* (clean, modern, highly readable).
- **Logo:** Located in the `Header` component. The scale has been fine-tuned to `0.6` via CSS transforms in `Header.module.css`.

## 3. Project Structure
- `/src/app/`: Contains all route pages (`page.js` for Home, Makkah Hotels, Madinah Hotels, Packages, About, Contact).
- `/src/components/`: Reusable UI elements (`Header`, `Footer`, `HotelCard`, `FloatingWhatsApp`).
- `/src/data/`: `hotels.js` contains the data for 61 hotels and the Umrah packages.
- `/public/`: Contains local static assets (logo, generated hero images).

## 4. Completed Features (Current State)
- ✅ **Responsive UI:** Fully responsive across mobile, tablet, and desktop.
- ✅ **Routing:** Navigation between all core pages works perfectly.
- ✅ **WhatsApp Integration:** All hotel inquiries and contact buttons generate pre-filled WhatsApp links (`wa.me`) targeting the agency.
- ✅ **Hotel Image Mapping:** Since scraping real images from Booking.com/Agoda failed due to bot protections, the project uses a mix of AI-generated luxury hotel images (in `/public/hotels/`) and a verified list of Unsplash URLs. These 34 unique images are deterministically mapped to the 61 hotels in `src/components/HotelCard.jsx` using a hash function, ensuring no adjacent hotels look identical while maintaining city/star-rating accuracy.
- ✅ **Package Tiers:** Economy, Standard, and Star packages are accurately priced and displayed.

## 5. Next Steps (Pending Tasks)
If you are an LLM continuing this work, here is what the user might want to do next:
1. **Real Content Injection:** Replace generic placeholder text in the About page or specific hotel amenities with actual client copy.
2. **SEO Setup:** Add Next.js metadata objects (titles, descriptions, Open Graph images) to `layout.js` and individual `page.js` files.
3. **Real Image Replacement:** As the client acquires real photos of their hotels, update the URLs in `src/data/hotels.js` and remove the mapping logic in `HotelCard.jsx`.
4. **Deployment:** Run `npm run build` and deploy to production.
5. **Analytics:** Add tracking scripts (Google Analytics) if requested.

## 6. Important Notes for LLMs
- **CSS Strategy:** Do not attempt to install or use Tailwind. Stick to CSS Modules (`.module.css`) for component-scoped styles and `globals.css` for variables.
- **Images:** The `Next/Image` component is currently configured to accept images from `images.unsplash.com`. If adding new external image sources, update `next.config.js` accordingly.
- **Logo:** The logo size was a point of heavy iteration. Do not change the `scale(0.6)` in `Header.module.css` unless explicitly asked by the user.
