import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center items-center">
        <Link
          className={clsx(
            "flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition text-gray-500 hover:text-gray-300",
            {
              "bg-gray-100 rounded-full inset-0 -z-10 bg-gray-800":
                pathname === "/en",
            }
          )}
          href="/en"
          locale="en"
        >
          En
        </Link>{" "}
        |{" "}
        <Link
          className={clsx(
            "flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition text-gray-500 hover:text-gray-300",
            {
              "bg-gray-100 rounded-full inset-0 -z-10 bg-gray-800":
                pathname === "/ru",
            }
          )}
          href="/ru"
          locale="ru"
        >
          Ru
        </Link>
        <br />
        <br />
      </div>
    </>
  );
}
