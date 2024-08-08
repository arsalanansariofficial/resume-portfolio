'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import * as Radix from '@radix-ui/react-icons';

import { cn } from '@/_lib/utils';
import { NavLink } from './nav-links';
import * as ShadSelect from '@/_components/ui/select';

const person = {
  name: 'Arsalan Ansari',
  title: 'Full Stack Developer',
  profilePicture: '/img/my-avatar.png',
  projectCategories: ['All', 'Next JS', 'React JS', 'Node JS'],
  skills: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],
  contactDetails: {
    dob: '23-Aug-1998',
    phone: '+91-9568-621-239',
    location: 'Moradabad, India',
    email: 'theansaricompany@gmail.com'
  },
  projects: [
    {
      category: 'Next JS',
      title: 'E-Commerce Application',
      image: '/img/project-1.png'
    },
    {
      category: 'React JS',
      title: 'Consultation Application',
      image: '/img/project-2.png'
    },
    {
      category: 'Node JS',
      title: 'Weather Application',
      image: '/img/project-3.png'
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen gap-4 space-y-4 bg-smoky-black p-4 lg:grid lg:grid-flow-col lg:grid-cols-[19em_1fr] lg:p-4
    md:p-16
    md:space-y-8
    lg:space-y-0
    lg:gap-4
    

    
    ">
      <Aside/>
      <Main />
      <NavBar />
    </div>
  );
}

function Aside() {
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);

  return (
    <aside className="sidebar contact-list_item space-y-4 rounded-3xl border border-jet bg-eerie-black-2 p-4 shadow-shadow-1 sm:space-y-4 sm:p-6 md:space-y-6 lg:space-y-4 lg:self-start lg:p-4
    container
    md:w-11/12
    md:p-8
    lg:w-auto

    lg:fixed
    
    
    
    ">
      <div className="sidebar_info relative z-10 grid grid-flow-col grid-cols-[5em_1fr] gap-4 sm:grid-cols-[5.5em_1fr] md:grid-cols-[7em_1fr] md:gap-8 lg:grid-cols-[5em_1fr] lg:gap-4">
        <figure className="info_profile-box rounded-3xl bg-bg-gradient-onyx p-2">
          <Image
            priority
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
          className="info_chevron focus absolute -right-4 -top-4 rounded-bl-3xl rounded-tr-3xl bg-bg-gradient-onyx px-2 shadow-shadow-2 before:absolute before:inset-0 before:-z-10 before:block before:rounded-bl-3xl before:rounded-tr-3xl before:bg-bg-gradient-onyx before:content-[''] hover:bg-bg-gradient-yellow-1 focus:bg-bg-gradient-yellow-1 sm:-right-6 sm:-top-6 md:px-8 md:py-2 lg:hidden
          md:-top-8
          md:-right-8

          
          "
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
          !isAccordianOpen && 'hidden lg:block'
        )}
      >
        <ul className="info_contact-list grid items-start gap-4 gap-y-4 border-b border-t border-jet py-4 md:grid-cols-2 md:gap-8 md:gap-y-8 md:py-10 lg:grid-cols-1 lg:gap-y-4 lg:py-4">
          {Object.keys(person.contactDetails).map(_key => {
            const key = _key as keyof typeof person.contactDetails;
            return (
              <li
                key={key}
                className="contact-list_item flex gap-4 text-white md:gap-8 lg:gap-4"
              >
                <div className="item_icon relative z-10 aspect-square content-center rounded-lg bg-border-gradient-onyx p-2 text-orange-yellow-crayola shadow-shadow-2 before:absolute before:inset-[1px] before:-z-10 before:block before:rounded-lg before:bg-eerie-black-1 before:content-[''] sm:p-3 md:p-4">
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
  const [projectFilter, setProjectFilter] = useState('All');

  const filteredProjects = person.projects.filter(project =>
    projectFilter === 'All' ? true : project.category === projectFilter
  );

  return (
    <main className="main-content text-app-primary 
    rounded-3xl
    bg-[#1e1e1f] 
    bg-[#2b2b2cbf] 
    shadow-shadow-2 
    backdrop-blur 
    
    
    p-4 
    border
    border-jet

    container
    md:w-11/12
    md:p-8

    lg:m-0
    lg:w-auto

    lg:col-start-2
    lg:-col-end-1


    
    ">
      <article className="main-content_portfolio space-y-10">
        <header className="portfolio_header">
          <h2 className="header_title relative text-2xl font-semibold capitalize text-white-2 after:absolute 
          after:bottom-0 
          after:left-0 
          after:right-0 
          after:h-1 
          after:w-1/6 
          after:max-w-8
          after:translate-y-4 
          after:rounded-full 
          after:bg-text-gradient-yellow 
          after:content-['']
          md:text-3xl

          ">
            Portfolio
          </h2>
        </header>

        <section className="portfolio_section space-y-8">
          <div className="section_project-filter 
          md:hidden--

          ">
            <ShadSelect.Select
              onValueChange={filter => setProjectFilter(filter)}
            >
              <ShadSelect.SelectTrigger className="w-full rounded-xl border border-jet py-6 text-base text-light-gray focus:ring-0 focus-visible:ring-0">
                <ShadSelect.SelectValue placeholder="Select Category" />
              </ShadSelect.SelectTrigger>
              <ShadSelect.SelectContent className="mt-2 rounded-xl border border-jet bg-[#1e1e1f] text-white-2 shadow-none">
                {person.projectCategories.map((category, index) => {
                  return (
                    <ShadSelect.SelectItem
                      key={index}
                      value={category}
                      className="px-3 py-2 text-light-gray focus:rounded-lg focus:bg-[#323234] focus:text-light-gray"
                    >
                      {category}
                    </ShadSelect.SelectItem>
                  );
                })}
              </ShadSelect.SelectContent>
            </ShadSelect.Select>
          </div>

          <div className="section_project-filter">

          </div>

          <ul className="section_project-list space-y-8
          md:grid
          md:grid-cols-2
          md:space-y-0
          md:gap-8
          
          
          ">
            {filteredProjects.map((project, index) => {
              return (
                <li key={index} className="project-list_item
                
                
                ">
                  <Link href={`#${project.title}`} className="
                  
                  
                  ">
                    <figure className="item_image-box relative mb-4 before:absolute before:inset-0 before:z-10 before:hidden before:rounded-xl before:bg-[#00000080] before:content-[''] hover:before:block
                    bg-white-1--
                    
                    rounded-xl
                    overflow-hidden

                    aspect-square
                    sm:max-h-52--
                    
                    ">
                      <div className="image-box_icon-box absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-xl bg-jet p-4
                      aspect-square
                      
                      
                      ">
                        <Radix.EyeOpenIcon className="text-orange-yellow-crayola" />
                      </div>
                      <Image
                        fill
                        alt={project.title}
                        src={project.image}
                        className="image-box_img 
                        aspect-video 
                        object-cover--
                        
                        
                        
                        "
                      />
                    </figure>
                    <h3 className="item_title text-base font-semibold text-white-2">
                      {project.category}
                    </h3>
                    <p className="item_category text-sm text-light-gray-70">
                      {project.title}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </main>
  );
}

function NavBar() {
  return (
    <nav className="navbar fixed bottom-0 left-0 right-0 z-10 w-full rounded-t-2xl border border-jet bg-[#2b2b2cbf] shadow-shadow-2 backdrop-blur lg:hidden">
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
