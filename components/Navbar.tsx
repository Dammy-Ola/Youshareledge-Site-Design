import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import YoushareledgeLogo from '../public/svgs/Youshareledge Logo white-text blue-share yellow-bulb.svg'

export default function Navbar() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="bg-primary shadow-2xl fixed top-0 z-50 w-full p-3">
        <div className="container flex items-center flex-wrap">
          <Link href={`${origin}`} className="flex items-center">
            <Image
              src={YoushareledgeLogo}
              alt="Youshareledge logo"
              height={50}
              width={200}
            />
          </Link>
          <button
            className="inline-flex p-3 hover:bg-secondary rounded lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link
                href={`${origin}`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Home
              </Link>
              <Link
                href={`${origin}/learn`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Youshareledge Learn
              </Link>
              <Link
                href={`${origin}/wait-list`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Wait List
              </Link>
              <Link
                href={`${origin}/materials`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Materials
              </Link>
              <Link
                href={`${origin}/blog`}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Blog
              </Link>

              <Link
                href="#"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-secondary hover:text-primary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
