import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import URL1 from '../../public/images/profile/URL1.png'


export default function login() {
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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-96 p-8 bg-white rounded shadow">
    <h1 className="mb-4 text-2xl font-bold text-center">Sign Up</h1>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your name"
          autoComplete="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your password"
          autoComplete="new-password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-black rounded shadow hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

    </>
  )
}
