import Image from 'next/image'
import Mypic from '../../public/erfan01.jpg'
import { BsLinkedin } from "react-icons/bs";
import { SiProtonmail } from 'react-icons/si'
export default function Home() {

  return (
    <section className={'flex justify-center'}>
      <div className={'min-w-max flex flex-col items-center select-none'}>
        <Image src={Mypic} alt='my pick' className={'rounded-full w-80'}/>
        <h2 className="text-5xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
            Erfan Ezizi
        </h2>
        <p className={'text-center text-md py-5 leading-8 max-w-xs mx-auto md:text-xl'}>
          Full-stack developer based in Stockholm Sweden.
        </p>
        <div className={'flex gap-6'}>
          <a href={'https://www.linkedin.com/in/erfan-ezizi-4551a71a8/'} target='_blank' rel='noreferrer noopener'>
            <BsLinkedin size={20}/>
          </a>
          <a href={'mailto: erfanezizi@protonmail.com'}>
            <SiProtonmail size={20}/>
          </a>
        </div>
      </div>
    </section>
  )
}
