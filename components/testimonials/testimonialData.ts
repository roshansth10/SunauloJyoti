export interface Testimonial {
  name: string;
  location: string;
  /** Optional customer photo. Drop a file into public/images/testimonials and
   *  point this at it - otherwise a brand-styled initials avatar is shown. */
  avatar?: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anisha Karki",
    location: "Chitwan",
    rating: 5,
    quote:
      "Fresh, flavorful, and perfect for everyday cooking. I especially love the Mix Masala. Can't wait to try new products from Jyoti store.",
  },
  {
    name: "Rajkumar Shrestha",
    location: "Narayanghat",
    rating: 5,
    quote:
      "The Chiya Masala gives my tea such a lovely aroma. It has become my favorite. Thank you Jyoti store.",
  },
  {
    name: "Anu Poudel",
    location: "Kathmandu",
    rating: 5,
    quote:
      "Good quality spices with a rich and authentic taste. Definitely recommended. Forever my fav store.",
  },
  {
    name: "Sabina Rai",
    location: "Lalitpur",
    rating: 5,
    quote:
      "The turmeric powder is bright and fragrant with none of the chalky aftertaste. You can taste the difference in every dish.",
  },
];

export interface FeaturedTestimonial extends Testimonial {
  date: string;
}

export const FEATURED_TESTIMONIAL: FeaturedTestimonial = {
  name: "Anisha Karki",
  location: "Chitwan",
  rating: 5,
  date: "May 5, 2025",
  quote:
    "We recently ordered Jyoti's Mix Masala, and our whole family absolutely loved it! The aroma is amazing, and it adds just the right amount of flavor to our everyday curries and dishes. It has definitely become a regular in our kitchen.",
};
