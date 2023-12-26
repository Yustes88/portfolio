export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "TypeScript",
  "TailwindCSS",
  "Redux",
  "Framer Motion",
]

export const navigation = [
    { name: 'About', locale: "About",  href: '#about' },
    { name: 'Skills', locale: "Skills", href: '#skills'},
    { name: 'Projects', locale: 'Projects',  href: '#projects' },
    { name: 'Contacts', locale: 'Contacts', href: '#contacts' },
  ] 


export const projects = [
    {
    name: 'Spotify Clone',
    href: 'https://spotify-clone-znti.vercel.app/',
    description: 'A robust Spotify clone with Next.js, TypeScript, Tailwind CSS, Supabase for user authentication, and Stripe for in-app purchases. Users can seamlessly register, search and add songs, and build personalized playlists, all within a responsive interface.',
    imageSrc: '/images/spotify.png',
    imageAlt: 'Spotify Clone screenshot',
    tools: ['NextJS, React, TailwindCSS, Typescript, Stripe, Supabase'],
  },     
  {
    name: 'Blog',
    href: 'https://blog-steel-alpha-98.vercel.app/',
    description:
    'A dynamic blog website with Next.js, Tailwind CSS, and Markdown, enabling users to filter posts by topic. The interactive interface provides an engaging and user-friendly experience for content consumption.',
    imageSrc: '/images/blog.png',
    imageAlt: 'Blog project screenshot.',
    tools: ['NextJS, React, Typescript, Mantine, TailwindCSS'],
  }
]