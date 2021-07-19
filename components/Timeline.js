import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2019</Year>
      <ul>
        <Step title="Graduated High School">
          Graduated at Saraswathi Vidyanikethan Public School.
        </Step>
        <Step title="Started at Amrita University, Amrita School of Engineering, Amritapuri">
          Enrolled for Bachelor's in Computer Science and Engineering.
        </Step>
        <Step title="Joined amFOSS">
          Very much excited to join amFOSS. One of India's leading open source communities.
        </Step>
      </ul>
      <Divider />
      <Year>2001</Year>
      <ul>
        <Step title="Born 👶🏼🍼" />
      </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="KDE SoK’20, Developer Intern, KDE.">
        Developed a completely new website for the KDE application called Umbrello as a part of the summer
        program of KDE for students. Successfully ported the previous PHP website to a modern Jekyll
        static website builder with Markdown supported blogs.
        </Step>
        <Step title="conf.KDE.in ’20">
          I was invited to give a lightning talk on my KDE contributions. Met so many contributors across India.
        </Step>
        <Step title="Akademy ’20 KDE">
          Main KDE conference which was held virtually because of the pandemic.
        </Step>
        <Step title="Runners up in Gov-TechThon 2020">
          It was a virtual hackathon organized by IEEE in collaboration with
          National Informatics Centre(NIC-India), MeitY, Government of India and Oracle from 30th October
          2020 to 1st November 2020.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
