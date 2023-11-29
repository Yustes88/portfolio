import useDebounce from "@/hooks/useDebounce";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";


type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;


const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  
  const sections = document.querySelectorAll('[id]');
  const debouncedNavHighlighter = useDebounce(navHighlighter, 25);
  window.addEventListener("scroll", debouncedNavHighlighter);
  
  function navHighlighter() {
    let scrollY = window.scrollY;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.id;
  
      if ((sectionId !== "headlessui-portal-root") &&
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight) {
        // Handle highlighting logic for the matching section
        const links = document.querySelectorAll('a.link-underline');
        for (const link of links) {
          const linkId = link.href.replace(/.*\#/, "");
          const isLinkActive = linkId === sectionId;
          link.classList.toggle('active', isLinkActive);
        }
      }
    });
  }


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const  y = elem?.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    const links = document.querySelectorAll('a.link-underline');
    for (const link of links) {
      const linkId = link.href.replace(/.*\#/, "");
      const isLinkActive = linkId === targetId;
      link.classList.toggle('active', isLinkActive);
    }

  };





  return (
    <Link {...props} onClick={handleScroll} className={`text-sm font-semibold leading-6 link-underline`}>
      {children}
    </Link>
  );
};
export default ScrollLink;
