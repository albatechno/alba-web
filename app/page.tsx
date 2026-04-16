import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans overflow-hidden">
      {/* Elemento de diseño: un gradiente sutil de fondo para dar profundidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10"></div>

      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-24 px-8 text-center sm:items-start sm:text-left z-10">
        <div className="flex flex-col items-center gap-10 sm:items-start w-full">
          
          <div className="space-y-4">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-zinc-50 uppercase">
              ALBA
            </h1>
            <h2 className="text-xl sm:text-2xl font-mono text-zinc-500 tracking-[0.2em] uppercase">
              Mental Techno // Underground
            </h2>
          </div>

          <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-400 font-light">
            Especialista en transiciones armónicas y la creación de atmósferas inmersivas. 
            Explorando la profundidad y la oscuridad del sonido de club.
          </p>

          <div className="flex flex-col gap-5 w-full sm:flex-row mt-6 font-mono text-sm uppercase tracking-widest">
            <a
              className="flex h-14 items-center justify-center border border-zinc-100 bg-zinc-100 px-8 text-black transition-all hover:bg-transparent hover:text-zinc-100 sm:w-auto"
              href="#listen"
            >
              Escuchar Sets
            </a>
            <a
              className="flex h-14 items-center justify-center border border-zinc-800 px-8 text-zinc-400 transition-all hover:border-zinc-400 hover:text-zinc-100 sm:w-auto"
              href="#booking"
            >
              Booking & Info
            </a>
          </div>
          
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="w-full border-t border-zinc-900 py-6 text-center text-xs font-mono text-zinc-600 uppercase tracking-widest">
        © {new Date().getFullYear()} ALBA. All rights reserved.
      </footer>
    </div>
  );
}