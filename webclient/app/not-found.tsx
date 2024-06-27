/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <nav className="flex justify-center md:justify-start px-5 py-3 items-center bg-chess_blue">
        <Link href={"/"}>
          <img src="/svg/Textlogo03.svg" alt="logo" className="w-[210px]" />
        </Link>
      </nav>
      <section className="w-full min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 md:px-6">
          <div className="max-w-md text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Oops! Page not found.
            </h1>
            <p className="text-muted-foreground md:text-xl">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/home"
              className="inline-flex h-10 items-center justify-center rounded-md bg-chess_blue px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
