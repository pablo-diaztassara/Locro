"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#problemas", label: "Problemas" },
  { href: "#servicios", label: "Qué armamos" },
  { href: "#proceso", label: "Cómo trabajamos" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-locro-border bg-locro-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          aria-label="{ locro. } — Inicio"
          className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent rounded-lg"
        >
          <Image
            src="/brand/logo.svg"
            alt="{ locro. }"
            width={132}
            height={34}
            priority
            className="h-8 w-auto"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-locro-ink-muted transition-colors hover:text-locro-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#diagnostico"
            className="inline-flex items-center justify-center rounded-[12px] bg-locro-accent px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-locro-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-bg"
          >
            Agendar diagnóstico
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-locro-border bg-locro-surface text-locro-ink md:hidden"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3.5 6H16.5M3.5 10H16.5M3.5 14H16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-locro-border bg-locro-surface px-5 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-locro-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center rounded-[12px] bg-locro-accent px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-locro-accent-hover"
            >
              Agendar diagnóstico de 20 min
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
