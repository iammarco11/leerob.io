import { NextSeo } from 'next-seo';

import Analytics from '@/components/metrics/Analytics';

import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import YouTube from '@/components/metrics/Youtube';
import TopTracks from '@/components/TopTracks';

const url = 'https://leerob.io/dashboard';
const title = 'Dashboard – Akshay Praveen Nair';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

export default function Dashboard() {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here you can find my common handles and popularity :P Show some love &lt;3.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <YouTube />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I don't wish to share my spotify, I usually listen to old grunge rock and rock classics before the 90s.
          Some bands like Nirvana, Beatles, AC/DC, Guns N Roses, Led Zeppelin, Metallica etc. I also listen to modern British
          rock sometimes, mainly by Arctic Monkeys, Glass Animals and Alt-J. I don't mind house music or EDMs, share your playlists xD.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
