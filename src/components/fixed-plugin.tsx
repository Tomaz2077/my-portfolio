"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Icon } from "@mui/material";

export function FixedPlugin() {
  return (
    <a href="mailto:tomaz.perez@outlook.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <EnvelopeIcon
          width={128}
          height={128}
          className="w-5 h-5"
        ></EnvelopeIcon>{" "}
        Ta kontakt nå
      </Button>
    </a>
  );
}
