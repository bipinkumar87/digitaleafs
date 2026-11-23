export interface FestivalConfig {
  id: string;
  name: string;
  greeting: string;
  leftIcon: string;
  rightIcon: string;
  startMonth: number; // 1 - 12
  startDay: number;   // 1 - 31
  endMonth: number;   // 1 - 12
  endDay: number;     // 1 - 31
  badgeText?: string;
  accentColor?: string;
}

export const FESTIVAL_CALENDAR: FestivalConfig[] = [
  {
    id: "new-year",
    name: "New Year Celebration",
    greeting: "Happy New Year! ✨",
    leftIcon: "🎆",
    rightIcon: "🎉",
    startMonth: 12,
    startDay: 28,
    endMonth: 1,
    endDay: 10,
    badgeText: "Happy 2027",
    accentColor: "#F59E0B",
  },
  {
    id: "makar-sankranti",
    name: "Makar Sankranti, Pongal & Lohri",
    greeting: "Happy Makar Sankranti & Pongal! 🪁",
    leftIcon: "🪁",
    rightIcon: "🌾",
    startMonth: 1,
    startDay: 11,
    endMonth: 1,
    endDay: 18,
    badgeText: "Festival of Kites",
    accentColor: "#F97316",
  },
  {
    id: "republic-day",
    name: "Republic Day",
    greeting: "Happy Republic Day! 🇮🇳",
    leftIcon: "🇮🇳",
    rightIcon: "✨",
    startMonth: 1,
    startDay: 19,
    endMonth: 1,
    endDay: 28,
    badgeText: "26 January",
    accentColor: "#FF9933",
  },
  {
    id: "vasant-panchami",
    name: "Vasant Panchami & Saraswati Puja",
    greeting: "Shubh Vasant Panchami! 🪕",
    leftIcon: "🪕",
    rightIcon: "🌸",
    startMonth: 1,
    startDay: 29,
    endMonth: 2,
    endDay: 14,
    badgeText: "Basant Utsav",
    accentColor: "#FBBF24",
  },
  {
    id: "maha-shivratri",
    name: "Maha Shivratri",
    greeting: "Har Har Mahadev! 🔱",
    leftIcon: "🔱",
    rightIcon: "🌙",
    startMonth: 2,
    startDay: 15,
    endMonth: 3,
    endDay: 2,
    badgeText: "Maha Shivratri",
    accentColor: "#60A5FA",
  },
  {
    id: "holi",
    name: "Holi - Festival of Colors",
    greeting: "Happy Holi! 🎨",
    leftIcon: "🎨",
    rightIcon: "💦",
    startMonth: 3,
    startDay: 3,
    endMonth: 3,
    endDay: 20,
    badgeText: "Rangotsav",
    accentColor: "#EC4899",
  },
  {
    id: "ram-navami",
    name: "Ram Navami & Chaitra Navratri",
    greeting: "Shubh Ram Navami! 🏹",
    leftIcon: "🏹",
    rightIcon: "🪔",
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 10,
    badgeText: "Ram Navami",
    accentColor: "#F59E0B",
  },
  {
    id: "eid",
    name: "Eid-ul-Fitr Celebration",
    greeting: "Eid Mubarak! 🌙",
    leftIcon: "🌙",
    rightIcon: "⭐",
    startMonth: 4,
    startDay: 11,
    endMonth: 5,
    endDay: 10,
    badgeText: "Eid Mubarak",
    accentColor: "#10B981",
  },
  {
    id: "spring-growth",
    name: "Digital Innovation Season",
    greeting: "Innovate & Grow! 🚀",
    leftIcon: "🌿",
    rightIcon: "🚀",
    startMonth: 5,
    startDay: 11,
    endMonth: 6,
    endDay: 20,
    badgeText: "Innovation",
    accentColor: "#10B981",
  },
  {
    id: "yoga-day",
    name: "International Yoga Day",
    greeting: "International Yoga Day 🧘",
    leftIcon: "🧘",
    rightIcon: "🌧️",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 15,
    badgeText: "Yoga & Wellness",
    accentColor: "#3B82F6",
  },
  {
    id: "sawan-shravan",
    name: "Shravan Maas & Guru Purnima",
    greeting: "Shubh Shravan Maas! 🔱",
    leftIcon: "🔱",
    rightIcon: "🌧️",
    startMonth: 7,
    startDay: 16,
    endMonth: 8,
    endDay: 5,
    badgeText: "Shravan Special",
    accentColor: "#3B82F6",
  },
  {
    id: "independence-day",
    name: "Independence Day",
    greeting: "Happy Independence Day! 🇮🇳",
    leftIcon: "🇮🇳",
    rightIcon: "🕊️",
    startMonth: 8,
    startDay: 6,
    endMonth: 8,
    endDay: 18,
    badgeText: "15 August",
    accentColor: "#FF9933",
  },
  {
    id: "raksha-bandhan",
    name: "Raksha Bandhan",
    greeting: "Happy Raksha Bandhan! 🪢",
    leftIcon: "🪢",
    rightIcon: "🎁",
    startMonth: 8,
    startDay: 19,
    endMonth: 8,
    endDay: 27,
    badgeText: "Rakhi Utsav",
    accentColor: "#EC4899",
  },
  {
    id: "ganesh-janmashtami",
    name: "Janmashtami & Ganesh Utsav",
    greeting: "Ganpati Bappa Morya! 🌺",
    leftIcon: "🦚",
    rightIcon: "🌺",
    startMonth: 8,
    startDay: 28,
    endMonth: 9,
    endDay: 20,
    badgeText: "Ganeshotsav",
    accentColor: "#F59E0B",
  },
  {
    id: "navratri-dussehra",
    name: "Navratri & Dussehra",
    greeting: "Shubh Navratri & Dussehra! 🪔",
    leftIcon: "🔱",
    rightIcon: "🏹",
    startMonth: 9,
    startDay: 21,
    endMonth: 10,
    endDay: 22,
    badgeText: "Durga Puja & Vijayadashami",
    accentColor: "#EF4444",
  },
  {
    id: "diwali-chhath",
    name: "Diwali, Dhanteras & Chhath Puja",
    greeting: "Happy Diwali & Shubh Chhath! 🪔",
    leftIcon: "🪔",
    rightIcon: "✨",
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 20,
    badgeText: "Deepawali Mahotsav",
    accentColor: "#F59E0B",
  },
  {
    id: "dev-deepawali",
    name: "Dev Deepawali & Gurpurab",
    greeting: "Happy Dev Deepawali & Gurpurab! 🪔",
    leftIcon: "🪔",
    rightIcon: "🕊️",
    startMonth: 11,
    startDay: 21,
    endMonth: 12,
    endDay: 10,
    badgeText: "Kashi Deepawali",
    accentColor: "#F59E0B",
  },
  {
    id: "christmas",
    name: "Christmas Season",
    greeting: "Merry Christmas! 🎄",
    leftIcon: "🎄",
    rightIcon: "❄️",
    startMonth: 12,
    startDay: 11,
    endMonth: 12,
    endDay: 27,
    badgeText: "Holiday Season",
    accentColor: "#10B981",
  },
];

/**
 * Returns currently active or closest upcoming festival dynamically
 */
export function getCurrentOrUpcomingFestival(currentDate: Date = new Date()): FestivalConfig {
  const month = currentDate.getMonth() + 1; // 1 - 12
  const day = currentDate.getDate();         // 1 - 31
  const currentVal = month * 100 + day;      // e.g. 1123 for Nov 23

  // 1. Check if today matches any active festival range
  for (const fest of FESTIVAL_CALENDAR) {
    const startVal = fest.startMonth * 100 + fest.startDay;
    const endVal = fest.endMonth * 100 + fest.endDay;

    if (startVal <= endVal) {
      if (currentVal >= startVal && currentVal <= endVal) {
        return fest;
      }
    } else {
      // Overflows into next year (e.g. Dec 28 to Jan 10)
      if (currentVal >= startVal || currentVal <= endVal) {
        return fest;
      }
    }
  }

  // 2. If not strictly in an active window, find the next upcoming festival
  let upcoming: FestivalConfig | null = null;
  let minDiff = Infinity;

  for (const fest of FESTIVAL_CALENDAR) {
    const startVal = fest.startMonth * 100 + fest.startDay;
    let diff = startVal - currentVal;
    if (diff < 0) {
      diff += 1200; // Next year
    }
    if (diff < minDiff) {
      minDiff = diff;
      upcoming = fest;
    }
  }

  return upcoming || FESTIVAL_CALENDAR[0];
}
