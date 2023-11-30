'use client'

import {  experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:scale-100 disabled:bg-opacity-65"
      aria-disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
        </>
      )}
    </button>
  );
}