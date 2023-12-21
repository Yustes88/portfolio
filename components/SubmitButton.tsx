'use client'

// @ts-expect-error
import {  experimental_useFormStatus as useFormStatus } from "react-dom";

type SubmitButtonProps = {
  title: string;
}

export default function SubmitButton({title}: SubmitButtonProps) {
const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-white btn-shadow px-3.5 py-2.5 text-center text-sm transition font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:scale-100 disabled:bg-opacity-65"
      aria-disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {title}{" "}
        </>
      )}
    </button>
  );
}