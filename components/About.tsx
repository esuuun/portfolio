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
import { Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

function About() {
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
    <motion.div
      initial="initial"
      variants={upAnimation(0.4)}
      whileInView="animate"
      viewport={{ amount: 0.5 }}
      className="w-screen md:p-10 p-4 flex justify-center"
    >
      <Card className="bg-secondary/5 w-full lg:max-w-[83%] md:p-7 rounded-3xl">
        <CardHeader className="">
          <p className="text-3xl font-semibold ">About Me</p>
        </CardHeader>
        <CardFooter>
          <p className="text-lg font-medium text-foreground/60">
            As a computer engineering student at Universitas Indonesia, I’ve
            grown significantly since embarking on my journey into the world of
            technology. Starting with a focus on building a strong foundation in
            hardware and software, I’ve now expanded my expertise into web
            development, freelancing, and competitive projects.
            <br /><br />
            I’ve completed several freelance web development projects, which
            allowed me to deliver tailored solutions for clients while honing my
            technical and project management skills. Additionally, I’ve
            participated in competitions that challenged me to solve real-world
            problems and collaborate effectively in teams.
            <br /><br />
            These experiences have not only broadened my skill set but also
            deepened my passion for creating impactful and innovative solutions.
            I’m always eager to learn, connect, and work on exciting projects
            that push boundaries.
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default About;
