import Image from "next/image";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pt-6 pb-10 sm:px-8">
      <div className="flex flex-col gap-6 rounded-[20px] bg-locro-surface-dark px-7 py-8 text-locro-ink-on-dark sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex flex-col gap-2">
          <Image
            src="/brand/logo-dark.svg"
            alt="{ locro. }"
            width={124}
            height={32}
            className="h-7 w-auto self-start"
          />
          <p className="font-mono text-[12.5px] text-locro-border">
            ia &amp; software a medida_
          </p>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-locro-border sm:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:somoslocro@gmail.com"
              className="transition-colors hover:text-white"
            >
              somoslocro@gmail.com
            </a>
            <a
              href="https://instagram.com/somoslocro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              @somoslocro
            </a>
          </div>
          <p className="font-mono text-[12px] text-locro-border/75">
            © 2026 {`{ locro. }`} · locro.com.ar
          </p>
        </div>
      </div>
    </footer>
  );
}
