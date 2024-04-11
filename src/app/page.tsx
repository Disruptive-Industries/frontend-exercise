import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:p-4">
          <Image
            className="relative"
            src="/logo-long-white.svg"
            alt="Disruptive Industries Logo"
            width={150}
            height={32}
            priority
          />
        </p>
      </div>

      <div>
        <form></form>
      </div>
    </main>
  );
}
