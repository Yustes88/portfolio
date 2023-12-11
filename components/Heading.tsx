import {TbBulb} from 'react-icons/tb';

type SectionHeadingProps = {
    children: React.ReactNode;
  };

const Heading = ({children}: SectionHeadingProps) => {
  return (
    <h2 className=" sm:text-4xl text-2xl heading font-medium capitalize mb-8 text-center">
    {children}
    </h2>
  )
}

export default Heading