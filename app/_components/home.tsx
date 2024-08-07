'use client';

import Image from 'next/image';
import { useState } from 'react';
import * as Radix from '@radix-ui/react-icons';

import { cn } from '@/_lib/utils';
import { NavLink } from './nav-links';

export default function Home() {
  return (
    <div className="min-h-screen gap-4 space-y-4 bg-smoky-black p-4 xl:grid xl:grid-flow-col xl:grid-cols-12 xl:p-8">
      <Aside />
    </div>
  );
}

function Aside() {
  const [isAccordianOpen, setIsAccordianOpen] = useState(true);

  const person = {
    name: 'Arsalan Ansari',
    title: 'Full Stack Developer',
    profilePicture: '/icons/vs-code.png',
    skills: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],
    contactDetails: {
      dob: '23-Aug-1998',
      phone: '+91-9568-621-239',
      location: 'Moradabad, India',
      email: 'theansaricompany@gmail.com'
    }
  };

  return (
    <aside className="sidebar contact-list_item space-y-4 rounded-3xl border border-jet bg-eerie-black-2 p-4 shadow-shadow-1 sm:space-y-4 sm:p-6 md:space-y-6 md:p-6 xl:col-span-3 xl:self-start">
      <div className="sidebar_info relative z-10 grid grid-flow-col grid-cols-[5em_1fr] gap-4 sm:grid-cols-[5.5em_1fr] md:grid-cols-[7em_1fr] md:gap-8 xl:grid-cols-[5em_1fr] xl:gap-4">
        <figure className="info_profile-box rounded-3xl bg-bg-gradient-onyx p-2">
          <Image
            width={100}
            height={100}
            alt={person.name}
            src={person.profilePicture}
            className="profile-box_img"
          />
        </figure>

        <div className="info_content space-y-2 self-center">
          <h1 className="content_name font-semibold text-white-2 sm:text-base md:text-base">
            {person.name}
          </h1>

          <p className="content_title inline-block rounded-xl bg-onyx px-4 py-2 text-xs text-white-1 sm:text-sm md:text-sm">
            {person.title}
          </p>
        </div>

        <button
          className="info_chevron focus absolute -right-4 -top-4 rounded-bl-3xl rounded-tr-3xl bg-bg-gradient-onyx px-2 shadow-shadow-2 before:absolute before:inset-0 before:-z-10 before:block before:rounded-bl-3xl before:rounded-tr-3xl before:bg-bg-gradient-onyx before:content-[''] hover:bg-bg-gradient-yellow-1 focus:bg-bg-gradient-yellow-1 sm:-right-6 sm:-top-6 md:px-8 md:py-2 xl:hidden"
          onClick={() =>
            setIsAccordianOpen(isAccordianOpen => !isAccordianOpen)
          }
        >
          <span className="chevron_label hidden text-sm text-orange-yellow-crayola md:inline">
            Show Contacts
          </span>
          {!isAccordianOpen && (
            <Radix.ChevronDownIcon className="chevron_icon aspect-square h-7 w-10 text-orange-yellow-crayola md:hidden" />
          )}
          {isAccordianOpen && (
            <Radix.ChevronUpIcon className="chevron_icon aspect-square h-7 w-10 text-orange-yellow-crayola md:hidden" />
          )}
        </button>
      </div>

      <div
        className={cn(
          'sidebar_more-info space-y-4',
          !isAccordianOpen && 'hidden'
        )}
      >
        <ul className="info_contact-list grid items-start gap-4 gap-y-4 border-b border-t border-jet py-4 md:grid-cols-2 md:gap-8 md:gap-y-8 md:py-10 xl:grid-cols-1">
          {Object.keys(person.contactDetails).map(_key => {
            const key = _key as keyof typeof person.contactDetails;
            return (
              <li
                key={key}
                className="contact-list_item flex gap-4 text-white md:gap-8"
              >
                <div className="item_icon relative z-10 aspect-square content-center rounded-lg bg-border-gradient-onyx text-orange-yellow-crayola shadow-shadow-2 before:absolute before:inset-[1px] before:-z-10 before:block before:rounded-lg before:bg-eerie-black-1 before:content-['']">
                  {key === 'dob' && <Radix.CalendarIcon />}
                  {key === 'email' && <Radix.EnvelopeOpenIcon />}
                  {key === 'phone' && <Radix.IdCardIcon />}
                  {key === 'location' && <Radix.DrawingPinFilledIcon />}
                </div>
                <div className="item_info sm:space-y-1">
                  <h2 className="key text-xs font-bold capitalize sm:text-sm">
                    {key}
                  </h2>
                  <p className="value text-xs sm:text-sm">
                    {person.contactDetails[key]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="info_social flex gap-4 sm:gap-6 md:gap-6">
          <a href="" className="text-light-gray-70">
            <Radix.GitHubLogoIcon className="text-[5rem]" fontSize={20} />
          </a>
          <a href="" className="text-light-gray-70">
            <Radix.EnvelopeOpenIcon />
          </a>
          <a href="" className="text-light-gray-70">
            <Radix.DiscordLogoIcon />
          </a>
        </div>
      </div>
    </aside>
  );
}

function Main() {
  return (
    <main className="bg-app-blue-700 text-app-primary rounded-3xl bg-[#2b2b2cbf] p-4 text-orange-yellow-crayola shadow-shadow-2 backdrop-blur xl:col-span-4">
      Main
    </main>
  );
}

function Footer() {
  return (
    <nav className="navbar fixed bottom-0 left-0 right-0 z-10 w-full rounded-t-2xl border border-jet bg-[#2b2b2cbf] shadow-shadow-2 backdrop-blur">
      <ul className="navbar_list flex flex-wrap items-center justify-center px-4">
        <li className="list_item">
          <NavLink href="/">About</NavLink>
        </li>

        <li className="list_item">
          <NavLink href="/resume">Resume</NavLink>
        </li>

        <li className="list_item">
          <NavLink href="/portfolio">Portfolio</NavLink>
        </li>

        <li className="list_item">
          <NavLink href="/blog">Blog</NavLink>
        </li>

        <li className="list_item">
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
