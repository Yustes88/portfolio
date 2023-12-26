import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// {clsx(
//   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
//   {
//     "text-gray-950 dark:text-gray-200":
//       pathname === '/ru',
//   }
// )}
export default function LanguageSwitcher() {
  const pathname = usePathname()

 return(
  <>
  <div className="flex justify-center items-center">

  <Link className={clsx(
    "flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
    {
      "bg-gray-100 rounded-full inset-0 -z-10 dark:bg-gray-800":
      pathname === '/en',
    }
    )}
    href="/en" locale="en">
    En
  </Link>{" "}
  |{" "}
  <Link className={clsx(
                  "flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "bg-gray-100 rounded-full inset-0 -z-10 dark:bg-gray-800":
                      pathname === '/ru',
                  }
                )}
  href="/ru" locale="ru">
    Ru
  </Link>
  <br />
  <br />
    </div>
</>
 )
}