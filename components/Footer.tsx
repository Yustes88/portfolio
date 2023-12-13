export default function Footer() {
    return (
      <footer className="mb-10 mt-10 px-4 text-center text-gray-500">
        <small className="block text-xs">
          &copy; 2023 Julia. All rights reserved.
        </small>
        <div
        className="flex flex-col sm:flex-row py-4 items-center justify-center gap-6 text-sm"
      >
        <a
            className=" hover:underline"
          href="https://linkedin.com"
          target="_blank"
        >
          Linkedin
        </a>

        <a
          className=" hover:underline"
          href="https://github.com/Yustes88"
          target="_blank"
        >
          GitHub
        </a>
      </div>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </footer>
    );
  }