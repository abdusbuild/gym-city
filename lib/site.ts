// ---- Edit the gym's contact details here ----
export const SITE = {
  name: "Gym City",
  tagline: "Leave Your Mark",
  // WhatsApp number in international format, digits only (e.g. "919876543210").
  // While empty, every WhatsApp button falls back to calling PHONE.
  whatsapp: "",
  phone: "+911140016184",
  phoneDisplay: "+91 11 4001 6184",
  addressLines: ["A 50–51, Main Road, Thokar No. 6,", "Shaheen Bagh, Jamia Nagar, Okhla,", "New Delhi 110025"],
  addressShort: "A 50–51, Main Road, Thokar No. 6, Shaheen Bagh, Okhla, New Delhi 110025",
  hours: "6:00 AM – 10:30 PM",
  yoga: "8:00 – 9:00 PM",
  lat: 28.550586,
  lng: 77.299522,
  rating: 4.9,
  ratingCount: 42,
};

export const telLink = `tel:${SITE.phone}`;
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${SITE.lat},${SITE.lng}`;
export const mapEmbed = `https://maps.google.com/maps?q=${SITE.lat},${SITE.lng}&z=16&output=embed`;

/** WhatsApp link with a pre-filled message, or a tel: link if no WhatsApp number is set. */
export function waLink(message = "Hi Gym City!") {
  return SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}` : telLink;
}
export const waProps = (message?: string) =>
  SITE.whatsapp
    ? { href: waLink(message), target: "_blank", rel: "noopener noreferrer" }
    : { href: telLink };

/** True once a WhatsApp number is set. Buttons switch between "WhatsApp" and "Call" wording. */
export const HAS_WA = Boolean(SITE.whatsapp);
export const contactLabel = HAS_WA ? "WhatsApp us" : "Call us";

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#floor", label: "Facilities" },
  { href: "#membership", label: "Membership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
