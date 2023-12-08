import {TbBulb} from 'react-icons/tb';

type SectionHeadingProps = {
    children: React.ReactNode;
  };

const Heading = ({children}: SectionHeadingProps) => {
  return (
    <h2 className="text-4xl heading font-medium capitalize mb-8 text-center">
    {children}
    </h2>
  )
}

export default Heading