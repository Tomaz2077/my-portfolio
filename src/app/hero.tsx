"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Velkommen til min utviklings- <br /> portefølje!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Jeg er Tomaz Perez, en lidenskapelig systemutvikler basert i Norge.
            Nedenfor vil du få et glimt av hvem jeg er og mine ferdigheter.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Eller ta kontakt nå!
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <a href="mailto:tomaz.perez@outlook.com">
                <Button color="gray" className="w-full px-4 md:w-[18rem]">
                  Send e-post
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/tomaz2.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
