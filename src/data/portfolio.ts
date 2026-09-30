import photo from "@/assets/farhaan.jpg";

/**
 * ============================================================
 * FARHAAN SAYED — PORTFOLIO DATA
 * ============================================================
 */

export const personalInfo = {
  name: "Farhaan Sayed",
  title: "Video Editor",
  email: "farhaanedits@duck.com",
  tagline: "Short-form video • Reels • Visual storytelling",

  intro:
    "I’m a video editor who transforms raw footage into engaging, visually compelling content. I focus on creating edits that capture attention, communicate a clear story, and keep viewers engaged.",

  about:
    "I’m a passionate video editor focused on short-form content, reels, and visual storytelling. My approach combines creative storytelling with clean editing, strong pacing, smooth transitions, color enhancement, and sound design. I enjoy turning ideas and raw footage into polished videos that are engaging, modern, and suited to their intended audience.",

  editingStyle:
    "My editing style combines storytelling, rhythm, clean visuals, and purposeful effects to create engaging videos that feel natural and keep the viewer interested.",

  contactMessage:
    "Have a project in mind? Let’s create something engaging together.",

  profilePhoto: photo,
};


/**
 * ============================================================
 * EDITING SOFTWARE
 * ============================================================
 */

export const tools = [
  "CapCut",
  "Adobe Premiere Pro",
];


/**
 * ============================================================
 * EDITING STYLE
 * ============================================================
 */

export const editingStyleCards = [
  {
    label: "Storytelling",
    body:
      "Creating a clear visual flow that communicates the idea and keeps the audience engaged.",
  },

  {
    label: "Pacing",
    body:
      "Using cuts, timing, and rhythm to match the energy of the content and maintain attention.",
  },

  {
    label: "Transitions",
    body:
      "Using clean and purposeful transitions to connect scenes smoothly without distracting from the story.",
  },

  {
    label: "Color",
    body:
      "Enhancing the look and mood of each video through balanced and consistent color adjustments.",
  },

  {
    label: "Sound Design",
    body:
      "Combining music, sound effects, and audio timing to make the edit more immersive and impactful.",
  },

  {
    label: "Motion",
    body:
      "Adding motion, text animation, and visual effects when they support the story and improve the viewing experience.",
  },
];


/**
 * ============================================================
 * PROJECT TYPE
 * ============================================================
 */

export type Project = {
  id: string;
  title: string;
  description: string;
  previewVideo: string;
  poster: string;
  fullVideoUrl: string;
};


/**
 * ============================================================
 * PORTFOLIO REELS
 *
 * Put your videos inside:
 *
 * public/
 *   videos/
 *     reel1.mp4
 *     reel2.mp4
 *     reel3.mp4
 *     reel4.mp4
 *     reel5.mp4
 *
 * ============================================================
 */

export const projects: Project[] = [
  {
    id: "reel1",
    title: "Reel 01",
    description:
      "",
    previewVideo: "/videos/reel1.mp4",
    poster: "",
    fullVideoUrl: "https://drive.google.com/file/d/1MiHOv786clbGzLffbRRQNGRQ5IprTyR3/view?usp=sharing",
  },

  {
    id: "reel2",
    title: "Reel 02",
    description:
      "",
    previewVideo: "/videos/reel2.mp4",
    poster: "",
    fullVideoUrl: "https://drive.google.com/file/d/1s4u2Aave5qIhT69OsZX5mx_Q1LMgzmgR/view?usp=sharing",
  },

  {
    id: "reel3",
    title: "Reel 03",
    description:
      "",
    previewVideo: "/videos/reel3.mp4",
    poster: "",
    fullVideoUrl: "https://drive.google.com/file/d/1pIa1rdPw57clWH4MGz9oUJLzJBGeroFs/view?usp=sharing",
  },

  {
    id: "reel4",
    title: "Reel 04",
    description:
      "",
    previewVideo: "/videos/reel4.mp4",
    poster: "",
    fullVideoUrl: "https://drive.google.com/file/d/1VCrCVql4StGD9km9Irj6PQctTgLj0CEf/view?usp=sharing",
  },

  {
    id: "reel5",
    title: "Reel 05",
    description:
      "",
    previewVideo: "/videos/reel5.mp4",
    poster: "",
    fullVideoUrl: "https://drive.google.com/file/d/1wKi0gw7LyB84Cjd5moe53PqE52qiUWB_/view?usp=sharing",
  },
];


/**
 * ============================================================
 * SOCIAL MEDIA
 *
 * Replace the empty URLs with the real profile links.
 * ============================================================
 */

export const socialLinks = [
  {
    label: "Instagram",
    url: "",
  },

  {
    label: "YouTube",
    url: "",
  },

  {
    label: "LinkedIn",
    url: "",
  },
];