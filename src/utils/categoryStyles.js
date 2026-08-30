// Central palette for event categories.
// Each hue is chosen to stay distinguishable at a glance across the grid,
// while sitting inside the EventBoard ink / paper / cobalt / gold system.
export const CATEGORY_STYLES = {
  Tech: {
    badge: "bg-[#E8ECFE] text-[#2547F4]",
    dot: "bg-[#2547F4]",
  },
  Workshop: {
    badge: "bg-[#FCEFD8] text-[#B4740E]",
    dot: "bg-[#F2A93B]",
  },
  Sports: {
    badge: "bg-[#DCFCE7] text-[#15803D]",
    dot: "bg-[#15803D]",
  },
  Cultural: {
    badge: "bg-[#FCE7F0] text-[#BE185D]",
    dot: "bg-[#BE185D]",
  },
  Marketing: {
    badge: "bg-[#D8F3EE] text-[#0D9488]",
    dot: "bg-[#0D9488]",
  },
  Business: {
    badge: "bg-[#EDE4FE] text-[#6D28D9]",
    dot: "bg-[#6D28D9]",
  },
};

export const DEFAULT_CATEGORY_STYLE = {
  badge: "bg-[#EDECE7] text-[#4A4959]",
  dot: "bg-[#4A4959]",
};

export function categoryStyle(category) {
  return CATEGORY_STYLES[category] || DEFAULT_CATEGORY_STYLE;
}

export const CATEGORY_LIST = Object.keys(CATEGORY_STYLES);
