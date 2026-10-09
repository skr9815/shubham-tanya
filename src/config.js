// ✏️ Edit everything about the wedding here.
// Images live in public/images (palace photo: Mysuru Palace by Ingo Mehling, CC BY-SA 4.0).
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
  // Blessing titles placed before the Hindi names
  groomTitleHindi: 'आयुष्मान',
  brideTitleHindi: 'आयुष्मती',
  hashtag: '#TanyaWedsShubham',
  // Wedding day, used for the countdown (IST).
  date: '2026-11-30T20:00:00+05:30',
  displayDate: 'Monday, 30th November 2026',
  city: 'Gwalior, Madhya Pradesh',
  families: {
    groom: {
      title: 'Groom’s Family',
      hindi: 'वर पक्ष',
      relation: ['S/o', ['Shri Manikant', 'Smt. Nutan Kumari']],
      // Full names for the invitation line in the hero
      parents: 'Shri Manikant & Smt. Nutan Kumari',
      grandRelation: ['Grand S/o', ['Late Shri RamNandan Singh', 'Late Smt.Vina Rani']],
      address: 'Vina Niwas Harrakh, Begusarai, Bihar',
    },
    bride: {
      title: 'Bride’s Family',
      hindi: 'वधू पक्ष',
      relation: ['D/o', ['Shri Brajesh', 'Smt. Vandana Kumari']],
      // Full names for the invitation line in the hero
      parents: 'Shri Brajesh & Smt. Vandana Kumari',
      grandRelation: ['Grand D/o', ['Late Shri LalChand', 'Late Smt. Kamla Devi']],
      address: 'Lashkar Gwalior, Madhya Pradesh',
    },
  },
  // icon: small round picture on the event card
  // bgLandscape / bgPortrait: event screen artwork for wide / tall screens (default couple art if omitted)
  // bgPortraitX: horizontal focus of the portrait art; cardSide: 'left' puts the card left of the couple on wide screens
  // start/end: used by "Add to Calendar" (IST)
  events: [
    { name: 'Engagement & Sangeet', hindi: 'सगाई एवं संगीत', icon: '/images/events/icon-sangeet.jpg', bgLandscape: '/images/engagement-bg-landscape.jpg', bgPortrait: '/images/engagement-bg-portrait.jpg', bgPortraitX: '75%', cardSide: 'left', date: 'Sunday, 29 Nov 2026', time: 'Evening onwards', venue: gwalior, dress: 'Indo-Western Glam', start: '2026-11-29T18:00:00+05:30', end: '2026-11-29T23:00:00+05:30' },
    { name: 'Wedding Ceremony', hindi: 'शुभ विवाह', icon: '/images/events/icon-wedding.jpg', bgLandscape: '/images/wedding-bg-landscape.jpg', bgPortrait: '/images/wedding-bg-portrait.jpg', bgPortraitX: '85%', cardSide: 'left', date: 'Monday, 30 Nov 2026', time: '8:00 PM onwards', venue: gwalior, dress: 'Traditional Ethnic', start: '2026-11-30T20:00:00+05:30', end: '2026-11-30T23:59:00+05:30' },
    { name: 'Reception', hindi: 'वर-वधू स्वागत समारोह', icon: '/images/events/icon-reception.jpg', bgLandscape: '/images/reception-bg-landscape.jpg', bgPortrait: '/images/reception-bg-portrait.jpg', bgPortraitX: '100%', cardSide: 'left', date: 'Saturday, 5 Dec 2026', time: 'Evening onwards', venue: begusarai, dress: 'Festive Formal', start: '2026-12-05T19:00:00+05:30', end: '2026-12-05T23:00:00+05:30' },
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
  // Printable invitation card guests can view and download from the Venue section.
  // Put the file in the public/ folder with this exact name (a .pdf, .jpg or .png — update the extension here to match).
  // Until the file exists, the buttons show "Invitation card coming soon".
  invitationCard: '/invitation-card.pdf',
  // Digital (video) invitation on YouTube. Leave empty to show "coming soon".
  digitalInvitation: '',
  // Photographer's AI face-recognition gallery: guests take a selfie and see only the photos they appear in.
  // Paste the gallery link here; a QR code for it is generated automatically. Leave empty to show "coming soon".
  photoGallery: '',
}
