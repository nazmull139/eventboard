export const events = [
  {
    id: "1",
    title: "Frontend Future Summit",
    organizer: "TechNova",
    category: "Tech",
    date: "2026-09-05",
    start: "10:00",
    end: "13:00",
    location: "Dhaka Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    description:
      "A practical conference covering modern frontend engineering, design systems, performance and the future of web development.",
  },

  {
    id: "2",
    title: "React Workshop: Build Better UIs",
    organizer: "CodeLab BD",
    category: "Workshop",
    date: "2026-09-08",
    start: "11:00",
    end: "14:00",
    location: "Banani, Dhaka",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hands-on React workshop focused on reusable components, state management and production-ready UI patterns.",
  },

  {
    id: "3",
    title: "Dhaka Night Football",
    organizer: "City Sports",
    category: "Sports",
    date: "2026-09-12",
    start: "19:00",
    end: "21:00",
    location: "Army Stadium",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    description:
      "An energetic evening football event bringing local teams and fans together for a friendly tournament.",
  },

  {
    id: "4",
    title: "Bangla Cultural Evening",
    organizer: "Shobdo Foundation",
    category: "Cultural",
    date: "2026-09-15",
    start: "18:00",
    end: "21:00",
    location: "Bangladesh Shilpakala Academy",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
    description:
      "Celebrate Bangladeshi culture through music, dance, poetry and traditional performances.",
  },

  {
    id: "5",
    title: "AI & Career Meetup",
    organizer: "FutureWorks",
    category: "Tech",
    date: "2026-09-20",
    start: "11:00",
    end: "14:00",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description:
      "Meet developers, analysts and AI practitioners to discuss skills, portfolios and careers in the AI era.",
  },

  {
    id: "6",
    title: "Product Design Sprint",
    organizer: "Design Circle",
    category: "Workshop",
    date: "2026-08-24",
    start: "09:00",
    end: "12:00",
    location: "Gulshan, Dhaka",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    description:
      "A collaborative sprint where participants turn product ideas into clear user journeys and interface concepts.",
  },

  {
    id: "7",
    title: "Advanced React UI Workshop",
    organizer: "Frontend Guild BD",
    category: "Workshop",
    date: "2026-08-24",
    start: "11:00",
    end: "13:00",
    location: "Mohakhali, Dhaka",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "An advanced hands-on session on React architecture, component composition, performance and scalable UI patterns.",
  },

  {
    id: "8",
    title: "Startup Networking Night",
    organizer: "Dhaka Founders",
    category: "Business",
    date: "2026-08-18",
    start: "18:30",
    end: "21:30",
    location: "Gulshan Club, Dhaka",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description:
      "Connect with startup founders, entrepreneurs and professionals and explore new business opportunities.",
  },

  {
    id: "9",
    title: "Digital Marketing Masterclass",
    organizer: "GrowthLab",
    category: "Marketing",
    date: "2026-08-10",
    start: "10:00",
    end: "13:00",
    location: "Uttara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    description:
      "Learn practical digital marketing strategies including social media marketing, SEO, content and paid advertising.",
  },

  {
    id: "10",
    title: "Photography & Creative Arts Expo",
    organizer: "Creative Bangladesh",
    category: "Cultural",
    date: "2026-08-03",
    start: "11:00",
    end: "17:00",
    location: "Bashundhara Convention Center",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore photography, digital art and creative works from talented artists and photographers across Bangladesh.",
  },
];

export function fetchEvents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false;

      if (shouldFail) {
        reject(new Error("Something went wrong."));
      } else {
        resolve(events);
      }
    }, 1200);
  });
}