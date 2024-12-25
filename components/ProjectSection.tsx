import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { url } from "inspector";

function ProjectSection() {
  const testimonials = [
    {
      quote:
        "WorkoutWiz is my personal project, it's a SaaS to generate workout with an AI in the blink of eye! 🏋️‍♂️",
      name: "WorkoutWiz",
      designation: "A SaaS to generate workout with an ai",
      src: "/project/workoutwiz.png",
      url: "https://workoutwiz.tech/",
      tech: [
        {
          id: 1,
          name: "Next.js",
          designation: "Fullstack Framework",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
        {
          id: 3,
          name: "React",
          designation: "Java Script Library",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          id: 4,
          name: "Typescript",
          designation: "Programming Language",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          id: 5,
          name: "PostgreSQL",
          designation: "Database",
          image:
            "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
        },
      ],
    },
    {
      quote:
        "ReviewDosen, my personal project where you can share and discover reviews about professors at the University of Indonesia. It's a Django-powered platform designed to enhance the student experience.Features include CRUD operations for reviews, a search function, authentication system, and a user-friendly dashboard for managing interactions.",
      name: "ReviewDosen",
      designation:
        "Platform to share and discover reviews about professors at the University of Indonesia",
      src: "/project/reviewdosen.png",
      url: "https://github.com/esuuun/ReviewDosen",
      tech: [
        {
          id: 1,
          name: "Django",
          designation: "Fullstack Framework",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
        {
          id: 3,
          name: "Python",
          designation: "Programming Language",
          image:
            "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
        },
      ],
    },
    {
      quote:
        "TeamTrackr is an employee management web app designed to streamline employee data handling and improve organizational efficiency. My team and I won first place in the Technoskill 1.0 Fullstack Web Development Competition with our project, TeamTrackr! 🎉",
      name: "TeamTrackr",
      designation: "An employee management web app",
      src: "/project/teamtrackr.png",
      url: "https://github.com/esuuun/Technoskill-Frontend",
      tech: [
        {
          id: 1,
          name: "Vite",
          designation: "Frontend Framework",
          image:
            "https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
        {
          id: 3,
          name: "PostgreSQL",
          designation: "Database",
          image:
            "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
        },
      ],
    },

    {
      quote:
        "This project is my first freelance project for PPKM diet program. I built a landing page for the program using vanilla html and css.",
      name: "Diet PPKM",
      designation: "Landing page for diet program during PPKM",
      src: "/project/dietonline.png",
      url: "https://dietppkm.online/",
      tech: [
        {
          id: 1,
          name: "HTML",
          designation: "Programming Language",
          image:
            "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
        },
        {
          id: 2,
          name: "CSS",
          designation: "Programming Language",
          image:
            "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
        },
      ],
    },
    {
      quote:
        "This project is quite a big freelance project that my team and i built for a client. It's a fullstack web app for training management. I was responsible for the fullstack development of the app. The app is for managing training schedules, participants, certificates and etc. The app has a dashboard for admin and user. Admin can manage the training schedule, participants, certificates, and etc. User can see the training schedule, register for the training, and download the certificate.",
      name: "Aplikasi Pencatatan Pelatihan",
      designation: "Fullstack Web App for Training Management",
      src: "/project/pencatatanpelatihan.png",
      url: "",
      tech: [
        {
          id: 1,
          name: "Next.js",
          designation: "Fullstack Framework",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
        {
          id: 3,
          name: "Supabase",
          designation: "Database",
          image:
            "https://github.com/user-attachments/assets/e40fc76b-c8d8-47c3-bb53-c7795abaf596",
        },
        {
          id: 4,
          name: "Material UI",
          designation: "UI Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png",
        },
      ],
    },
    {
      quote:
        "This project is my freelance project for Goomah Exhibition. I responsible to build a map for the exhibition. The map has a feature to show the location of every booth in the exhibition.",
      name: "Map for Goomah App",
      designation: "Web App for Goomah Exhibition",
      src: "/project/goomah.png",
      url: "https://app.goomah.id/directory",
      tech: [
        {
          id: 1,
          name: "Next.js",
          designation: "Fullstack Framework",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          id: 2,
          name: "Tailwind CSS",
          designation: "CSS Framework",
          image:
            "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
      ],
    },
  ];
  return (
    <div id="project">
      <p className="scroll-m-20 text-foreground text-center text-3xl font-bold tracking-tight lg:text-4xl">
        My Latest Project 💡
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default ProjectSection;
