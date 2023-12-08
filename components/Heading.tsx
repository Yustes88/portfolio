import {TbBulb} from 'react-icons/tb';

type SectionHeadingProps = {
    children: React.ReactNode;
  };

const Heading = ({children}: SectionHeadingProps) => {
  return (
    <h2 className=" sm:text-4xl text-2xl heading font-medium capitalize mb-8 text-center">
    <span className='relative'>
    {children}
    <TbBulb className='absolute -top-[25%] -right-[20%]'/>
    </span>
        
    </h2>
  )
}

export default Heading