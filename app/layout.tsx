"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        
        {/* CONTENEDOR DE FONDO CON POSTER */}
        <div className="fixed inset-0 z-0 h-full w-full overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/poster-techno.jpg" // Imagen de carga
            onCanPlay={(e) => (e.currentTarget.muted = true)}
            className="h-full w-full object-cover opacity-50 grayscale"
          >
            <source src="/bg-techno.webm" type="video/webm" />
            <source src="/bg-techno.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY TIPO CLUB */}
          <div className="absolute inset-0 z-10 bg-black/60 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
        </div>

        {/* CONTENIDO PRINCIPAL: z-20 para estar por encima del overlay */}
        <div className="relative z-20 flex flex-col flex-1">
          {children}
        </div>

      </body>
    </html>
  );
}