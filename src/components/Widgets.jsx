import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { contacts } from "../utilities/enums";
import Contact from "./Contact";

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}
