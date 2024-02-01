"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24" id="testimonial">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Hva tidligere oppdragsgivere sier
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Oppdag hva tidligere oppdragsgiver har å si om sine erfaringer med meg.
            Deres tilfredshet er mitt største ønske!
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Får til det han bestemmer seg for
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
              ..det aller viktigste å fremheve er Tomaz sin personlighet. Han er åpen og godt lik av alle. 
              Tomaz bryr seg om sine kollegaer, og er en god medspiller der teamet er viktigst. 
              Han er tydelig og tar eierskap og ansvar, en person som får til det han bestemmer seg for. 
              Med sin væremåte inspirerer han andre og er svært lojal mot selskapet og funksjonen han skal dekke.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Dag Unhjem - IT Direktør
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                IT @ Postnord AS.
              </Typography>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/dag.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Høy arbeidskapasitet
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                Tomaz har høy arbeidskapasitet og har møtt de deadlines som har vært satt for arbeidsoppgavene. 
                Han kommuniserer effektivt og bidrar mye i gruppen ved å delta aktivt i diskusjoner. 
                Dette har skapt en veldig god dynamik på teamet og utviklingsavdelingen som vi kommer til å savne.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Torgeir Lien - IT Utviklingssjef
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                IT @ Postnord AS.
              </Typography>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/torgeir.svg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
