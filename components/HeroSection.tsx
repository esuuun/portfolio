"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Meteors } from "./ui/meteors";
import { useScroll, useTransform, motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

function HeroSection() {
  const { scrollYProgress } = useScroll({ offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const upAnimation = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
      },
    },
  });

  return (
    <div className="">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {/* With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "} */}
          Hi There! Welcome to My Portfolio – Showcasing My{" "}
          <Highlight className="text-black dark:text-white">
            Work and Passion!
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <div className="p-4 md:p-0 flex flex-wrap gap-5 justify-center w-screen">
        <Card
          id="about"
          className="bg-secondary/5 w-screen lg:max-w-[50%] md:p-7 md:rounded-3xl"
        >
          <CardHeader>
            <motion.div
              variants={upAnimation(0)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.5 }}
              className="flex justify-between flex-wrap"
            >
              <div className="flex gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="avatar\avatar-blink.png"
                    className="-translate-y-2"
                  />
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-bold">Hey i'm Ikhsan.</span>
                  <span className="text-foreground/50">
                    Computer Engineering student at University of Indonesia
                  </span>
                </div>
              </div>
              <div className="flex gap-3 ">
                <a href="https://github.com/esuuun">
                  <Button
                    variant="outline"
                    size="icon"
                    className="transition ease-in-out duration-700  hover:bg-transparent hover:ring-4 ring-muted "
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-ikhsan-kurniawan-0b763028a/">
                  <Button
                    variant="outline"
                    size="icon"
                    className="transition ease-in-out duration-700  hover:bg-transparent hover:ring-4 ring-muted "
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>

                <a href="https://www.instagram.com/ikhsankwn/">
                  <Button
                    variant="outline"
                    size="icon"
                    className="transition ease-in-out duration-700 hover:bg-transparent hover:ring-4 ring-muted"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-ikhsan-kurniawan-0b763028a/">
                  <Button
                    variant="outline"
                    className="font-semibold text-base transition ease-in-out duration-700 hover:bg-transparent hover:ring-4 ring-muted"
                  >
                    Get In Touch
                  </Button>
                </a>
              </div>
            </motion.div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <motion.p
              variants={upAnimation(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0 }}
              className="text-4xl font-semibold"
            >
              Passionate about crafting{" "}
              <span className="italic font-serif font-normal">
                exceptional{" "}
              </span>{" "}
              digital experiences.
            </motion.p>
          </CardContent>
          <CardFooter>
            <motion.p
              variants={upAnimation(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 1 }}
              className="text-xl font-medium text-foreground/60"
            >
              Hey!, I’m Ikhsan! Welcome to my world. I specialize in designing
              and developing beautiful, user-friendly websites and digital
              experiences. With a focus on clean design and seamless
              functionality, I aim to create solutions that leave a lasting
              impression.
            </motion.p>
          </CardFooter>
        </Card>

        {/* img */}
        <Card className="relative bg-gradient-to-br from-muted to-card w-screen lg:max-w-sm rounded-3xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars
                radius={100}
                depth={50}
                count={800}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
              />
            </Canvas>
          </div>

          <div className="relative z-10 flex justify-center items-end h-full">
            <motion.img
              variants={upAnimation(0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.5 }}
              src="avatar/avatar-hi.png"
              alt=""
              className="h-80 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card via-card/70 to-transparent z-20" />
          </div>
          <Meteors number={5} />
        </Card>
      </div>
    </div>
  );
}

export default HeroSection;
