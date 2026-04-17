import Image from "next/image";

function SoundCloudPlayer({ url }: { url: string }) {
  return (
    <div className="w-full max-w-2xl mt-4 opacity-80 hover:opacity-100 transition-opacity">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
      ></iframe>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-12 sm:px-12 md:px-20 lg:items-start">
      <div className="flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-12 lg:items-start">
        
        {/* HEADER: Responsive Text */}
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-6xl font-bold uppercase leading-none tracking-tighter sm:text-8xl md:text-9xl">
            ALBA
          </h1>
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500 sm:text-lg md:text-2xl">
            Mental Techno // Underground
          </h2>
        </div>

        {/* BIO: Responsive Width */}
        <p className="max-w-xl text-center text-base font-light leading-relaxed text-zinc-300 sm:text-lg md:text-xl lg:text-left">
          Specialized in harmonic transitions and immersive atmosphere creation. 
          Exploring the depth and raw energy of club sound.
        </p>

        {/* MAIN BUTTONS: Stack on mobile, Row on desktop */}
        <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#listen"
            className="flex h-14 items-center justify-center border border-white bg-white px-10 font-mono text-xs uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
          >
            Listen Sets
          </a>
          <a
            href="mailto:contact@alba-music.com"
            className="flex h-14 items-center justify-center border border-zinc-800 px-10 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-all hover:border-zinc-100 hover:text-white"
          >
            Booking & Info
          </a>
        </div>

        {/* PLAYER & PRESSKIT SECTION */}
        <div id="listen" className="mt-8 flex w-full flex-col items-center gap-8 lg:items-start">
          <SoundCloudPlayer url="https://soundcloud.com/santiago-beltran-alba" />
          
          <a
            href="/presskit-alba.pdf" 
            download="ALBA_Presskit_2026.pdf"
            className="group flex h-12 w-full items-center justify-center border border-zinc-800 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-all hover:border-zinc-400 hover:text-zinc-100 sm:w-auto"
          >
            <svg 
              className="mr-3 h-4 w-4 transition-transform group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Presskit (PDF)
          </a>
        </div>
      </div>
      
      {/* FOOTER: Fixed but subtle */}
      <footer className="mt-12 w-full py-6 text-center font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-800 sm:mt-20">
        © {new Date().getFullYear()} ALBA. All rights reserved.
      </footer>
    </main>
  );
}