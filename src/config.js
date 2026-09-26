// ✏️ Edit everything about the wedding here.
// Images live in public/images (Ganesh ji: Ravi Varma Press, public domain; palace: Mysuru Palace by Ingo Mehling, CC BY-SA 4.0).
const gwalior = {
  name: 'Enjoy Resort',
  address: 'Shivpuri Link Rd, Gwalior, Madhya Pradesh 474001, India',
  mapQuery: 'Enjoy Resort, Shivpuri Link Rd, Gwalior, Madhya Pradesh 474001',
  mapLink: 'https://maps.app.goo.gl/7wE7a74Bm4Z2qNQJ9',
}

const begusarai = {
  name: 'Reception Venue',
  address: 'Begusarai, Bihar, India',
  mapQuery: 'Begusarai, Bihar',
  mapLink: 'https://maps.app.goo.gl/E6xEkUsEHAJ1HZM17',
}

export const wedding = {
  groom: 'Shubham',
  bride: 'Tanya',
  groomHindi: 'शुभम',
  brideHindi: 'तान्या',
  hashtag: '#ShubhamWedsTanya',
  // Wedding day, used for the countdown (IST).
  date: '2026-11-30T18:00:00+05:30',
  displayDate: 'Monday, 30th November 2026',
  city: 'Gwalior, Madhya Pradesh',
  families: {
    groom: 'Groom’s Family',
    bride: 'Bride’s Family',
  },
  story: [
    { year: 'Pehli Mulaqat', title: 'First Meeting', text: 'A chance meeting that neither of us knew would change everything.' },
    { year: 'Pyaar', title: 'Falling in Love', text: 'Endless conversations, long drives and a friendship that became love.' },
    { year: 'Rishta', title: 'Families United', text: 'With the blessings of our elders, two families become one.' },
  ],
  events: [
    { name: 'Haldi Carnival', hindi: 'हल्दी', icon: '🌼', date: 'Sunday, 29 Nov 2026', time: 'Morning', venue: gwalior, dress: 'Shades of Yellow' },
    { name: 'Engagement & Sangeet', hindi: 'सगाई एवं संगीत', icon: '💍', date: 'Sunday, 29 Nov 2026', time: 'Evening onwards', venue: gwalior, dress: 'Indo-Western Glam' },
    { name: 'Wedding Ceremony', hindi: 'शुभ विवाह', icon: '🪔', date: 'Monday, 30 Nov 2026', time: 'Evening onwards', venue: gwalior, dress: 'Traditional Ethnic' },
    { name: 'Reception', hindi: 'प्रीतिभोज', icon: '🥂', date: 'Saturday, 5 Dec 2026', time: 'Evening onwards', venue: begusarai, dress: 'Festive Formal' },
  ],
  venues: [
    { ...gwalior, label: 'Haldi · Engagement · Sangeet · Wedding' },
    { ...begusarai, label: 'Reception' },
  ],
  contacts: [
    { name: 'Shubham', phone: '+91 98765 43210' },
    { name: 'Tanya', phone: '+91 91234 56789' },
  ],
  // Where RSVP replies are sent (opens the guest's email app).
  rsvpEmail: 'skr9815@gmail.com',
}
