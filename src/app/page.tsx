import Image from 'next/image'
import Mypic from '../../public/erfan01.jpg'
import { BsLinkedin } from "react-icons/bs";
import { SiProtonmail } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa';
import Projects from '@/components/projects';
export default function Home() {

  return (
    <section className={'h-screen'}>
      <div className={'min-w-max flex flex-col items-center select-none h-full'}>
        <Image src={Mypic} alt='my pick' className={'rounded-full w-96'}/>
        <h2 className="text-6xl py-2 text-orange-500 font-medium dark:text-amber-500 md:text-6xl">
            Erfan Ezizi
        </h2>
        <p className={'text-center text-md py-5 leading-8 max-w-xs mx-auto md:text-xl'}>
          Full-stack developer based in Stockholm Sweden.
        </p>
        <div className={'flex gap-6 pb-4'}>
          <a href={'https://www.linkedin.com/in/erfan-ezizi-4551a71a8/'} target='_blank' rel='noreferrer noopener'>
            <BsLinkedin size={20}/>
          </a>
          <a href={'https://github.com/ErfanEzizi'} target='_blank' rel='noreferrer noopener'>
            <FaGithub size={20}/>
          </a>
          <a href={'mailto: erfanezizi@protonmail.com'}>
            <SiProtonmail size={20}/>
          </a>
        </div>
      </div>
        <div className={"h-2 w-full bg-amber-500 rounded-lg"}/>
      <Projects/>
    </section>
  )
}
