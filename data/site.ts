export const siteConfig = {
  // --------------------------------------------------
  // General
  // --------------------------------------------------

  name: "Nagel Studio ·13",
  location: "Beverstedt",
  type: "Home Studio",

  // --------------------------------------------------
  // Contact
  // --------------------------------------------------

  contact: {
    address: "Kirchwistedter Hauptstraße 9, 27616 Beverstedt",
    location: "Beverstedt · Deutschland",
    phone: "+49 171 277 87 83",
    whatsapp: "https://wa.me/491712778783",
    instagram: "https://www.instagram.com/nagel.studio13",
    maps: "https://www.google.com/maps/search/?api=1&query=Kirchwistedter%20Hauptstra%C3%9Fe%209%2C%2027616%20Beverstedt",
    openingHours: [
      "Mo – Fr: 09:00–18:00",
      "Sa: nach Vereinbarung",
      "So: geschlossen",
    ],
  },

  // --------------------------------------------------
  // Booking
  // --------------------------------------------------

  booking: {
    enabled: true,
    provider: "whatsapp",
    url: "https://wa.me/491712778783",
  },

  // --------------------------------------------------
  // Hero
  // --------------------------------------------------

  hero: {
    eyebrow: "Nagelstudio in Beverstedt",

    title: "Schöne Nägel mit Liebe zum Detail",

    description:
      "Professionelle Nagelpflege in entspannter und persönlicher Atmosphäre.",

    primaryAction: {
      label: "Termin vereinbaren",
      href: "https://wa.me/491712778783",
    },

    secondaryAction: {
      label: "Galerie ansehen",
      href: "#gallery",
    },
  },

  // --------------------------------------------------
  // Navigation
  // --------------------------------------------------

  navigation: [
    {
      label: "Über uns",
      href: "#about",
    },
    {
      label: "Leistungen",
      href: "#services",
    },
    {
      label: "Galerie",
      href: "#gallery",
    },
    {
      label: "Kontakt",
      href: "#contact",
    },
  ],
};
