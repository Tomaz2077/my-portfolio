"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Ta kontakt
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ble du interessert i hva annet jeg kan tilby teamet ditt? Ta kontakt i dag!
        </Typography>
      </div>
      <div className="container mx-auto mb-20 text-center">
        <a href="mailto:tomaz.perez@outlook.com">
          <Button color="gray" className="w-full px-4 md:w-[18rem]">
            Send e-post
          </Button>
        </a>
      </div>
      
    </section>
  );
}

export default ContactForm;
