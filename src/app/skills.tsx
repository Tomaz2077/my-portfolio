"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  CodeBracketIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  CircleStackIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend utvikling",
    children:
      "Ved å bruke de seneste teknologiene og vertøy, designer og bygger jeg nettsider som fengsler og engasjerer brukere. Jeg liker å bruke TypeScript, React og Vue.",
  },
  {
    icon: CodeBracketIcon,
    title: "Backend utvikling",
    children:
      "Jeg liker å løse komplekse problestillinger på en enkel og leselig måte. Mine analytiske evner tillater meg å raskt sette meg inn i andres sine koder og identifisere bugs og flaskhalser. Har mest erfaring av Java backend-applikasjoner.",
  },
  {
    icon: EyeIcon,
    title: "User experience",
    children:
      "Sluttbrukeren er den viktigste aktøren for meg. Jeg setter derfor denne i fokus fra start og følger en vision for at denne skal få best mulig opplevelse.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing og kvalitet",
    children:
      "Jeg tester og feilsøker funksjonaliteter grundig for å garantere et feilfritt og sikkert miljø for brukerne. For dette lager jeg helst automatiske tester med TestNG, JUnit og Mockito.",
  },
  {
    icon: QueueListIcon,
    title: "Kø-systemer",
    children:
      "Jeg blir fascinert og tiltrukket av gigantiske kø-systemer med miljontals events per minutt. Har god erfaring av Apache Kafka og JMS.",
  },
  {
    icon: SwatchIcon,
    title: "Andre teknologier",
    children:
      "Jeg har evnen til å rask sette meg inn i nye teknologier, det er min pasjon. Min erfaring inkluderer Informix SQL, MySQL, Java Swing, JavaFX, Crontab, Kibana Dashboards, Elastic Search, Docker. ",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          mine ferdigheter
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Hva jeg gj&oslash;r
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Jeg er ikke bare en utvikler; Jeg er en visjon&aelig;r.
          Jeg liker &aring; lage oppslukende og engasjerende opplevelser for brukeren. Oppdag nedenfor hvordan jeg kan hjelpe teamet ditt.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
