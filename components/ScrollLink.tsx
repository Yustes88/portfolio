import Link, { LinkProps } from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";


type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;


const ScrollLink = ({ children, link, ...props }: ScrollLinkProps) => {
  const [isActive, setIsActive] = useState('')
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

  
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    console.log(targetId, 'here', link)
    const elem = document.getElementById(targetId);
    const  y = elem?.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    (targetId === link.replace(/.*\#/, "")) ? setIsActive('active') : '';
  };

  useEffect(() => {
    setIsActive('')
  }, [])


  return (
    <Link {...props} href={link} onClick={handleScroll} className={`text-sm font-semibold leading-6 link-underline ${isActive}`}>
      {children}
    </Link>
  );
};
export default ScrollLink;
