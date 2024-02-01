"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/coding1.svg",
    title: "E-handel backend",
    desc: "Desginet for å håndtere produkt data, innloging, og nettbestillinger. Lagrer og leser fra SQL database.",
    url: "https://github.com/Tomaz2077/e-commerce-backend",
  },
  {
    img: "/image/kafka.svg",
    title: "Apache Kafka produsent",
    desc: "Laget for å imot data fra for eksempel håndterminaler via REST-API. Produserer events til et kafka kluster.",
    url: "https://github.com/Tomaz2077/library-kafka-producer",
  },
  {
    img: "/image/blog2.svg",
    title: "E-handel frontend",
    desc: "Enkel e-handel nettsted med produktoversikt og persistent varukorg.",
    url: "https://github.com/Tomaz2077/e-commerce-frontend",
  },
  {
    img: "/image/kafka.svg",
    title: "Apache Kafka konsument",
    desc: "Enkel konsument laget for å lytte på et kafka kluster topic.",
    url: "https://github.com/Tomaz2077/library-kafka-consumer",
  },
  {
    img: "/image/blog-1.svg",
    title: "Porteføljenettsted",
    desc: "Denne siden du er på nå. Laget for å illustrere mine ferdigheter og prosjekter.",
    url: "",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Mine prosjekter
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Når jeg ikke koder på jobb så koder jeg på fritiden. Jeg her for å 
          gjøre digitale drømmer til virkelighet.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
