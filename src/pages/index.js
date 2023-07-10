import AnimatedText from '@/components/AnimatedText';

import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import URL1 from '../../public/images/profile/URL1.png'


export default function Home() {
  return (
    <>
      <Head>
      <title>Snappy - An amazing URL shortener</title>
        <meta
          name="description"
          content=" With Snappy, you can instantly transform those never-ending URLs 
          into concise and snappy links. Simply paste your long URL into our platform,
          and within seconds, a shortened URL will be generated for you. It is that 
          quick and hassle-free!"
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={URL1} alt="Snappy1" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Snappy - The Fast and Easy URL Shortener!" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                With Snappy, you can instantly transform those never-ending URLs 
          into concise and snappy links. Simply paste your long URL into our platform,
          and within seconds, a shortened URL will be generated for you. It is that 
          quick and hassle-free!
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                  >Login <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>
                  <Link href="mailto:abcd@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >Sign Up</Link>
                </div>
               </div>
           </div>
        </Layout>
      </main>
    </>
  )
}
