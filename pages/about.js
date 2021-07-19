import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Akshay Praveen Nair"
        canonical="https://leerob.io/about"
        openGraph={{
          url: 'https://leerob.io/about',
          title: 'About Me – Akshay Praveen Nair'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
          I’m a developer, writer, and creator. I usually contribute to open source communities like KDE, OpenWorm, amFOSS. Recently I have been working on data science.
          </p>
          <p>
            I’ve spoken across the country at conferences and meet-ups about
            my work on opensource. I write about development, tech and my personal life.
          </p>
          <p>
            I grew up in a city called Kochi in Kerala, India. Currently I am pursuing my undergradutate degree in Computer Science and Engineering.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Conference Talks
        </h2>
        <Talk
          title="conf.kde.in 2020 - Delhi"
          link="conf.kde.in"
        >
          I was selected as a student developer under the program KDE SoK' 20 and was invited to give a lightning talk explaining my work done. 
        </Talk>
      </div>
    </Container>
  );
}
