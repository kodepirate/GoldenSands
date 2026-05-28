// =============================================================================
// Golden Sands Configuration
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Golden Sands — Guesthouse and Family Restaurant",
  description: "Luxury guesthouse in the heart of the Eastern Rhodopes. Homemade food, cozy atmosphere, and untouched nature await your family.",
  language: "en",
  keywords: "guesthouse, restaurant, Rhodopes, Koriya, vacation, Bulgaria",
  ogImage: "/images/villa-exterior.jpg",
  canonical: "https://goldensands.bg",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavLink {
  name: string;
  href: string;
  icon: string;
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Golden Sands",
  brandSubname: "",
  tagline: "GUESTHOUSE",
  navLinks: [
    { name: "Home", href: "#hero", icon: "Home" },
    { name: "Services", href: "#uslugi", icon: "Sparkles" },
    { name: "Restaurant", href: "#restorant", icon: "UtensilsCrossed" },
    { name: "Gallery", href: "#galeria", icon: "Image" },
    { name: "About Us", href: "#za-nas", icon: "Heart" },
    { name: "Contact", href: "#kontakti", icon: "Mail" },
  ],
  ctaButtonText: "Book Now",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  subtitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  backgroundVideo: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Welcome to",
  mainTitle: "Golden Sands",
  subtitle: "Guesthouse and family restaurant in the heart of the Eastern Rhodopes",
  ctaButtonText: "Explore",
  ctaTarget: "#uslugi",
  backgroundVideo: "/videos/hero-countryside.mp4",
  backgroundImage: "/images/villa-exterior.jpg",
};

// -----------------------------------------------------------------------------
// Services Config
// -----------------------------------------------------------------------------
export interface ServiceCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  cards: ServiceCard[];
}

export const servicesConfig: ServicesConfig = {
  label: "Our Services",
  heading: "Rediscover peace in the Rhodopes",
  cards: [
    {
      image: "/images/villa-exterior.jpg",
      title: "Accommodation",
      description: "Two cozy rooms and a large hall for families or friends — with all amenities and a warming fireplace.",
      link: "#",
    },
    {
      image: "/images/restaurant-dining.jpg",
      title: "Family Restaurant",
      description: "Freshly prepared food from local products in a cozy setting with a fireplace and courtyard.",
      link: "#",
    },
    {
      image: "/images/hiking-trail.jpg",
      title: "Nature and Walks",
      description: "Discover the magic of the Rhodopes with eco trails, Kardzhali dam, chapels, and ancient Thracian sanctuaries.",
      link: "#",
    },
    {
      image: "/images/gallery-6.jpg",
      title: "Events and Occasions",
      description: "Birthdays, family celebrations, or corporate gatherings — we will make your occasion special.",
      link: "#",
    },
  ],
};

// -----------------------------------------------------------------------------
// About Config
// -----------------------------------------------------------------------------
export interface ValuePillar {
  icon: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  label: string;
  heading: string;
  image: string;
  text: string;
  signoff: string;
  pillars: ValuePillar[];
}

export const aboutConfig: AboutConfig = {
  label: "About Us",
  heading: "A Guesthouse with a Heart and Soul",
  image: "/images/about-villa.jpg",
  text: "Golden Sands is more than just a guesthouse. It is a place created with much love and care, where every detail tells a story. We are located in the village of Koriya, at the foothills of the Eastern Rhodopes — a place where time stops and nature is your faithful companion. We believe that true relaxation comes from the simple things — good food, pure air, warm hospitality, and the company of loved ones.",
  signoff: "Come and feel the magic of the Rhodopes.",
  pillars: [
    {
      icon: "heart",
      title: "Hospitality with Care",
      description: "Every guest is special to us. We care about the details so you feel at home.",
    },
    {
      icon: "utensils",
      title: "Homemade Food",
      description: "We cook with love, using fresh local products and traditional Rhodope recipes.",
    },
    {
      icon: "mountain",
      title: "Untouched Nature",
      description: "We are surrounded by the beauty of the Rhodopes — pure air, green meadows, and magical views.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Restaurant Config
// -----------------------------------------------------------------------------
export interface MenuDish {
  image: string;
  name: string;
  description: string;
}

export interface RestaurantConfig {
  label: string;
  heading: string;
  text: string;
  signoff: string;
  image: string;
  dishes: MenuDish[];
}

export const restaurantConfig: RestaurantConfig = {
  label: "Family Restaurant",
  heading: "The Taste of the Rhodopes",
  text: "Our family restaurant is the heart of Golden Sands. Here we prepare every dish with attention and love, using fresh products from local producers. Our menu changes according to the season — in summer the salads are even juicier, and in winter our soups warm the soul. The fireplace burns, the aroma of freshly baked bread floats in the air, and the view of the courtyard makes every dinner unforgettable.",
  signoff: "Welcome to our table!",
  image: "/images/food-platter.jpg",
  dishes: [
    {
      image: "/images/gallery-4.jpg",
      name: "Patatnik",
      description: "Traditional Rhodope potato bake with grated potatoes, cheese, and herbs",
    },
    {
      image: "/images/food-platter.jpg",
      name: "Cheverme",
      description: "Roasted lamb cooked using authentic Rhodope techniques over an open fire",
    },
    {
      image: "/images/gallery-6.jpg",
      name: "Mekitsi and Homemade Jam",
      description: "Fluffy fried dough with seasonal homemade jam from our garden",
    },
  ],
};

// -----------------------------------------------------------------------------
// Gallery Config
// -----------------------------------------------------------------------------
export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: string;
}

export interface GalleryConfig {
  label: string;
  heading: string;
  images: GalleryImage[];
  buttonText: string;
}

export const galleryConfig: GalleryConfig = {
  label: "Gallery",
  heading: "Moments from Our World",
  images: [
    { src: "/images/gallery-1.jpg", alt: "Villa in the golden hour", aspectRatio: "4/5" },
    { src: "/images/cozy-interior.jpg", alt: "Cozy interior", aspectRatio: "3/4" },
    { src: "/images/gallery-3.jpg", alt: "Rhodope landscape", aspectRatio: "2/3" },
    { src: "/images/gallery-4.jpg", alt: "Traditional cuisine", aspectRatio: "3/2" },
    { src: "/images/restaurant-dining.jpg", alt: "The restaurant", aspectRatio: "1/1" },
    { src: "/images/gallery-6.jpg", alt: "The garden", aspectRatio: "4/5" },
  ],
  buttonText: "See More Photos",
};

// -----------------------------------------------------------------------------
// Testimonials Config
// -----------------------------------------------------------------------------
export interface TestimonialItem {
  quote: string;
  guest: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  items: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "What Our Guests Say",
  heading: "Shared Moments",
  items: [
    {
      quote: "Incredible place! Peace, pure air, and breathtaking views. Our family felt right at home. The fireplace, homemade food, and hospitality made our vacation unforgettable.",
      guest: "Maria and Family",
      rating: 5,
    },
    {
      quote: "The restaurant is a real surprise — the patatnik and cheverme are the best we've ever eaten! And the atmosphere with the fireplace and view of the garden is simply magical.",
      guest: "Georgi and Pavlina",
      rating: 5,
    },
    {
      quote: "We celebrated a birthday with friends and it was perfect. The place is cozy, the food is delicious, and the nature around it is incredible. We will definitely come back again!",
      guest: "Ivanov Family",
      rating: 5,
    },
  ],
};

// -----------------------------------------------------------------------------
// Contact Config
// -----------------------------------------------------------------------------
export interface ContactInfoCard {
  icon: string;
  title: string;
  content: string;
  href?: string;
}

export interface ContactConfig {
  label: string;
  heading: string;
  subtext: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
  infoCards: ContactInfoCard[];
}

export const contactConfig: ContactConfig = {
  label: "Visit Us",
  heading: "Treat Yourself to a Vacation in the Rhodopes",
  subtext: "Contact us for reservations or more information. We look forward to seeing you!",
  primaryButton: "Book Now",
  secondaryButton: "Contact Us",
  backgroundImage: "/images/contact-landscape.jpg",
  infoCards: [
    {
      icon: "mapPin",
      title: "Address",
      content: "Koriya Village, Momchilgrad Municipality, Kardzhali Province, Bulgaria",
    },
    {
      icon: "phone",
      title: "Phone",
      content: "+359 888 123 456",
      href: "tel:+359888123456",
    },
    {
      icon: "mail",
      title: "Email",
      content: "info@goldensands.bg",
      href: "mailto:info@goldensands.bg",
    },
  ],
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  address: string;
  socialLinks: FooterSocialLink[];
  linkGroups: FooterLinkGroup[];
  copyrightText: string;
  backToTopText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Golden Sands",
  tagline: "Guesthouse and family restaurant",
  description: "Koriya Village, Momchilgrad Municipality, Kardzhali Province",
  address: "Koriya Village, Momchilgrad Municipality, Kardzhali Province",
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "#" },
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Music", label: "TikTok", href: "#" },
  ],
  linkGroups: [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#uslugi" },
        { name: "Restaurant", href: "#restorant" },
        { name: "Gallery", href: "#galeria" },
        { name: "About Us", href: "#za-nas" },
        { name: "Contact", href: "#kontakti" },
      ],
    },
  ],
  copyrightText: "© 2025 Golden Sands. All rights reserved.",
  backToTopText: "Back to Top",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to Top",
};
