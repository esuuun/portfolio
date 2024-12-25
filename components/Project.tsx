"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { animate, motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";

function Project() {
  const projects = [
    {
      title: "WorkoutWiz",
      desc: "A SaaS to generate workout with an ai",
      url: "project/workoutwiz.png",
      bg: "bg-gradient-to-r from-gray-900 via-yellow-700 to-rose-300",
      link: "https://workoutwiz.tech",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
      ],
    },
    {
      title: "ReviewDosen",
      desc: "Browse our wide selection of high-quality products.",
      url: "/project/reviewdosen.png",
      bg: "bg-gradient-to-bl from-cyan-100 via-purple-50 to-indigo-300",
      link: "https://reviewdosen.up.railway.app/",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
      ],
    },
    {
      title: "TeamTrackr",
      desc: "Browse our wide selection of high-quality products.",
      url: "project/teamtrackr.png",
      bg: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-800 via-stone-900 to-purple-900",
      link: "",
      tech: [
        "https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png",
        "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
      ],
    },
  ];

  const arrow = {
    initial: { opacity: 0, rotate: 0 },
    animate: { opacity: 1, rotate: -50, transition: { duration: 0.7 } },
  };
  const tech = {
    initial: { opacity: 0, y: 3 },
    animate: { opacity: 1, y: 1, transition: { duration: 0.7 } },
  };
  const image = {
    initial: { scale: 1 },
    animate: { scale: 1.1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col gap-10 p-10 w-screen">
      <p className="scroll-m-20 text-foreground text-center text-3xl font-bold tracking-tight lg:text-4xl">
        My Latest Project
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <motion.div initial="initial" animate="initial" whileHover="animate">
            <a href={project.link}>
              <Card
                className="relative h-full w-full max-w-full md:max-w-xl overflow-hidden p-12 rounded-3xl"
                key={index}
              >
                <div
                  className={`absolute h-full w-full ${project.bg} -translate-y-12 -translate-x-12`}
                ></div>
                <motion.div variants={image}>
                  <img
                    src={project.url}
                    alt="Card background"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-10" />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-10 z-10 translate-y-6">
                  <h3 className="flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold">
                    {project.title}
                    <motion.div variants={arrow}>
                      <CircleArrowRight />
                    </motion.div>
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-foreground/80 mt-2">
                    {project.desc}
                  </p>
                  <div className="flex gap-3">
                    {project.tech.map((logo) => (
                      <motion.img
                        variants={tech}
                        src={logo}
                        alt="nextjs logo"
                        className="w-6 h-6"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
