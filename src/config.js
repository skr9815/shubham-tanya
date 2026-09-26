// ✏️ Edit everything about the wedding here.
// Images live in public/images (Ganesh ji: Thanjavur painting, unknown artist, public domain; palace: Mysuru Palace by Ingo Mehling, CC BY-SA 4.0).
const gwalior = {
  name: 'Enjoy Resort',
  address: 'Shivpuri Link Rd, Gwalior, Madhya Pradesh 474001, India',
  mapQuery: 'Enjoy Resort, Shivpuri Link Rd, Gwalior, Madhya Pradesh 474001',
  city: 'Gwalior, Madhya Pradesh',
  mapLink: 'https://maps.app.goo.gl/7wE7a74Bm4Z2qNQJ9',
}

const begusarai = {
  name: 'Reception Venue',
  address: 'Begusarai, Bihar, India',
  mapQuery: 'Begusarai, Bihar',
  city: 'Begusarai, Bihar',
  mapLink: 'https://maps.app.goo.gl/E6xEkUsEHAJ1HZM17',
}

export const wedding = {
  groom: 'Shubham',
  bride: 'Tanya',
  groomHindi: 'शुभम',
  brideHindi: 'तान्या',
  hashtag: '#ShubhamWedsTanya',
  // Wedding day, used for the countdown (IST).
  date: '2026-11-30T20:00:00+05:30',
  displayDate: 'Monday, 30th November 2026',
  city: 'Gwalior, Madhya Pradesh',
  families: {
    groom: {
      title: 'Groom’s Family',
      hindi: 'वर पक्ष',
      relation: ['S/O', ['Shri Manikant Singh', 'Smt. Nutan Kumari']],
      grandRelation: ['Grand S/O', ['Late Shri Ramnand Singh', 'Late Smt. Vina Rani']],
      address: 'Harrakh, Begusarai, Bihar',
    },
    bride: {
      title: 'Bride’s Family',
      hindi: 'वधू पक्ष',
      relation: ['D/O', ['Shri Brijesh Singh', 'Smt. Vandan Singh']],
      grandRelation: ['Grand D/O', ['Shri Ram Singh', 'Smt. Kamdal Devi']],
      address: 'Gwalior, Madhya Pradesh',
    },
  },
  // icon: small round picture on the event card; image: the event screen's illustration
  // start/end: used by "Add to Calendar" (IST)
  events: [
    { name: 'Engagement & Sangeet', hindi: 'सगाई एवं संगीत', icon: '/images/events/icon-sangeet.jpg', image: '/images/events/sangeet.jpg', bgLandscape: '/images/engagement-bg-landscape.jpg', bgPortrait: '/images/engagement-bg-portrait.jpg', date: 'Sunday, 29 Nov 2026', time: 'Evening onwards', venue: gwalior, dress: 'Indo-Western Glam', start: '2026-11-29T18:00:00+05:30', end: '2026-11-29T23:00:00+05:30' },
    { name: 'Wedding Ceremony', hindi: 'शुभ विवाह', icon: '/images/events/icon-wedding.jpg', image: '/images/events/wedding.jpg', date: 'Monday, 30 Nov 2026', time: '8:00 PM onwards', venue: gwalior, dress: 'Traditional Ethnic', start: '2026-11-30T20:00:00+05:30', end: '2026-11-30T23:59:00+05:30' },
    { name: 'Reception', hindi: 'प्रीतिभोज', icon: '/images/events/icon-reception.jpg', image: '/images/events/reception.jpg', date: 'Saturday, 5 Dec 2026', time: 'Evening onwards', venue: begusarai, dress: 'Festive Formal', start: '2026-12-05T19:00:00+05:30', end: '2026-12-05T23:00:00+05:30' },
  ],
  venues: [
    { ...gwalior, label: 'Engagement · Sangeet · Wedding' },
    { ...begusarai, label: 'Reception' },
  ],
  contacts: [
    { name: 'Shubham', phone: '+44 07721595330' },
  ],
  // Where RSVP replies are sent (opens the guest's email app).
  rsvpEmail: 'skr9815@gmail.com',
}
