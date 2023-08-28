export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    ),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener("resize", fn);
}

export const projects = [
  {
    title: "Linux Virtual Machine",
    img_sd: "/assets/projects/l-1.png",
    img_hd: "/assets/projects/l-1.png",
    img_2k: "/assets/projects/l-1.png",
    descr:
      "Personal portfolio website simulating Ubuntu 20.04, made using NEXT.js & tailwind CSS",
    uri: "https://linux-virtual-machine.vercel.app/",
    source: "https://github.com/TsotneDarjania/linux-virtual-machine",
  },
  {
    img_sd: "/assets/projects/pr-6.png",
    img_hd: "/assets/projects/pr-6.png",
    img_2k: "/assets/projects/pr-6.png",
    descr:
      "🕹️ Introducing a unique soccer simulator that blends the strategic thrill of table football with cutting-edge JavaScript technology! With a backdrop of React and Phaser",
    title: "Digital Dribblers",
    uri: "https://digital-dribblers-ngci.vercel.app/game",
    source:
      "https://github.com/TsotneDarjania/digital-dribblers/tree/develop/digital-dribblers",
  },
  {
    img_sd: "/assets/projects/pr-3.png",
    img_hd: "/assets/projects/pr-3.png",
    img_2k: "/assets/projects/pr-3.png",
    title: "La Petite Alice",
    descr:
      "Captivated by the vibrant realm of creativity, I collaborated with Ine Agresta, an accomplished artist, designer, and visionary hailing from Uruguay, now thriving in Denmark",
    uri: "https://lapetitealice.com/",
    source: "https://github.com/TsotneDarjania?tab=repositories",
  },
  {
    img_sd: "/assets/projects/pr-4.png",
    img_hd: "/assets/projects/pr-4.png",
    img_2k: "/assets/projects/pr-4.png",
    descr:
      "A task management application built with Next.js, TypeScript, Tailwind CSS, and Mobx State Tree (MST). This app allows users to create, manage, and organize tasks efficiently. It leverages the power of Next.js for fast rendering and routing",
    title: "Task Management Application",
    uri: "https://task-managament-application.vercel.app/",
    source: "https://github.com/TsotneDarjania/task-managament-application",
  },
  {
    img_sd: "/assets/projects/pr-5.png",
    img_hd: "/assets/projects/pr-5.png",
    img_2k: "/assets/projects/pr-5.png",
    descr:
      "Silk Road Gaming is a dynamic web platform that brings together the world of gaming and community interaction. Built with React, TypeScript, Phaser library, and a Node.js backend, this platform provides users with an immersive gaming experience right in their browser",
    title: "Silk Road Gaming",
    uri: "https://silk-road-gaming-3g2l.vercel.app/",
    source:
      "https://github.com/TsotneDarjania/silk-road-gaming-vite/tree/develop",
  },
  {
    img_sd: "/assets/projects/pr-2.png",
    img_hd: "/assets/projects/pr-2.png",
    img_2k: "/assets/projects/pr-2.png",
    title: "E Commerce Website",
    descr:
      "a modern e-commerce website with great UI UX built using react with google pay, visa, mastercard and paypal integration",
    uri: "https://e-commerce-website-4l0a28hso-tsotnedarjania.vercel.app/",
    source: "https://github.com/TsotneDarjania/e-commerce-react",
  },
  {
    img_sd: "/assets/projects/pr-7.png",
    img_hd: "/assets/projects/pr-7.png",
    img_2k: "/assets/projects/pr-7.png",
    descr:
      "Experience the classic Pacman game in a 3D twist! This project is a simple yet engaging recreation of the iconic Pacman game using the Three.js library. Navigate through the maze",
    title: "Pacman 3D",
    uri: "https://3d-pacman.vercel.app/",
    source: "https://github.com/TsotneDarjania/3d-pacman",
  },
  {
    img_sd: "/assets/projects/pr-8.png",
    img_hd: "/assets/projects/pr-8.png",
    img_2k: "/assets/projects/pr-8.png",
    descr:
      "Experience culinary excellence with our Restaurant Landing Page, a React and Tailwind CSS project that brings the flavors of our restaurant to life",
    title: "Restaurant Landing Page",
    uri: "https://tsotnedarjania.github.io/restaurant-landing-page/",
    source: "https://github.com/TsotneDarjania/restaurant-landing-page",
  },
];

export const focus = [
  {
    src: "/assets/ts.svg",
    title: "Typescript",
    tooltip: "JavaScript with syntax for types",
  },
  {
    src: "/assets/nodejs.svg",
    title: "Node.js",
    tooltip: "JavaScript runtime environment",
  },
  {
    src: "/assets/express.svg",
    title: "Express.js",
    tooltip: "Minimalist nodejs web framework",
  },
  {
    src: "/assets/nextjs.svg",
    title: "Next.js",
    tooltip: "Full stack React framework",
  },
  {
    src: "/assets/react.svg",
    title: "React.js",
    tooltip: "JS ibrary for building user interfaces",
  },
  {
    src: "/assets/tailwind.svg",
    title: "Tailwindcss",
    tooltip: "Utility-first CSS framework",
  },
  {
    src: "/assets/prisma.svg",
    title: "Prisma",
    tooltip: "Next-generation Node.js ORM",
  },
  {
    src: "/assets/mysql.svg",
    title: "MySQL",
    tooltip: "Relational database management system",
  },
];
export const familiar = [
  {
    src: "/assets/docker.svg",
    title: "Docker",
    tooltip: "open platform for developing, shipping, and running applications",
  },
  {
    src: "/assets/python.svg",
    title: "Python",
    tooltip: "General-purpose programming language",
  },
  {
    src: "/assets/astro.svg",
    title: "Astro",
    tooltip: "Static framework with Island Architecture",
  },
  {
    src: "/assets/redux.svg",
    title: "Redux.js",
    tooltip: "predictable state management container",
  },
  {
    src: "/assets/firebase.svg",
    title: "Firebase",
    tooltip: "Backend-as-a-service platform",
  },
  {
    src: "/assets/chakraui.svg",
    title: "Chakra UI",
    tooltip: "UI library for React.js",
  },
  { src: "/assets/mui.svg", title: "MUI", tooltip: "UI library for React.js" },
  {
    src: "/assets/figma.svg",
    title: "Figma",
    tooltip: "Web-based designing tool",
  },
];
