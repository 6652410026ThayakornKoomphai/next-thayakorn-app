import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[#1a1a1a]">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
          Featured <span className="text-[#ff7f2a]">Projects</span>
        </h1>

        <h2 className="text-white text-2xl font-semibold mb-3 mt-8">
          Manage Task App - fullstack web development
        </h2>

        <p className="text-[#aaaaaa] text-lg leading-relaxed">
          Here{"'"}s my latest project built with Next.js and Laravel, using TailwindCSS on the
          front-end. Watch the video to see the responsive landing page in action!
        </p>
      </main>
        <div className="mt-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=LmZD-TU96q4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
}
