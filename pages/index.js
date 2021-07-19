import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Akshay
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer, writer, and creator. I usually contribute to open source communities like KDE, OpenWorm, amFOSS. Recently I have been working on data science.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="My first 3 weeks of SoK"
          summary="My first 3 weeks progress of working with the new templates for umbrello"
          slug="first-three-weeks-of-sok"
        />
        <BlogPost
          title="My Final 2 weeks of SoK!"
          summary="My final progress of Summer of KDE"
          slug="final-sok"
        />
        <BlogPost
          title="How to control backlight of ubuntu 18.04 for asus rog strix scar"
          summary="In this guide, you will learn how to control the RGB keyboards of Asus Rog in ubuntu."
          slug="rog-ubuntu-rgb-keyboard-control"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="NaWaB"
          description="NaWaB is a bot which shares all sorts of information regarding Computer Networks scraping twitter content. It
          sends the tweets to the telegram user with view and retweet option."
          href="https://github.com/Team-SYNACKd/NaWaB"
          icon="react2025"
        />
        <ProjectCard
          title="amFOSS.in"
          description="Worked on the backend code of CMS made using Django. Added events model and also integrated a Discord
          bot(Ch0wikidhar) using the REST API which would send messages to the desired group after fetching data
          from CMS."
          href="https://amfoss.in"
          icon="react2025"
        />
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
