const HOTEL_IMAGES = {
  m1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Makkah_Hotel.jpg/800px-Makkah_Hotel.jpg',
  m5: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  m8: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  m9: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  m12: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  m14: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  m20: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Abraj_Al_Bait_Towers.jpg/800px-Abraj_Al_Bait_Towers.jpg',
  md16: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg/800px-Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg',
  md28: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg/800px-Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg',
  md30: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg/800px-Masjid_Nabawi_The_Prophet%27s_Mosque%2C_Medina.jpg',
};

const UNSPLASH_HOTEL = [
  'https://images.unsplash.com/photo-1564769625902-49c865dd7e53?w=800&q=80',
  'https://images.unsplash.com/photo-1591618340125-9b8b9e8c4d5f?w=800&q=80',
  'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=800&q=80',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  'https://images.unsplash.com/photo-1445019980597-93fa95876848?w=800&q=80',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
  'https://images.unsplash.com/photo-1618773928121-c1ef278f1a00?w=800&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
];

export function getHotelInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
}

export function getHotelImageUrl(hotel, city = 'Makkah') {
  if (HOTEL_IMAGES[hotel.id]) return HOTEL_IMAGES[hotel.id];

  const num = parseInt(hotel.id.replace(/\D/g, ''), 10) || 1;
  const pool = city === 'Madinah' ? UNSPLASH_HOTEL.slice().reverse() : UNSPLASH_HOTEL;
  return pool[(num - 1) % pool.length];
}

export function getHeroImageUrl() {
  return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kabaa.jpg/1600px-Kabaa.jpg';
}
