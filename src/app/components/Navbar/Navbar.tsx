'use client'

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from 'framer-motion'
import Icon from "../Icon/Icon";

import { siBehance, siGithub } from "simple-icons";

export default function Navbar() {
  const router = useRouter();
  const [fade, setFade] = useState(false);
  const pathname = usePathname() || '/';



   function handleMenuClick(href: string) {
    setFade(true);
    setTimeout(() => router.push(href), 1400);
  }

  return (
    <motion.div>
      <span className='flex justify-between px-5 pt-5 md:px-10'>
        <div>
          <nav className="flex gap-4 place-items-start">
          { !pathname.startsWith('/me') && (
            <button onClick={() => handleMenuClick('/me')} className="  cursor-pointer">
              <h2>me</h2>
            </button>
          )}

          { pathname !== '/' && (
            <button onClick={() => handleMenuClick('/')} className="  cursor-pointer">
              <h2>home</h2>
            </button>
          )}

          { !pathname.startsWith('/projects') && (
            <button onClick={() => handleMenuClick('/projects')} className=" cursor-pointer">
              <h2>projects</h2>
            </button>
          )}
          </nav>
        </div>

        <h2 className="flex gap-3">
          <a href="https://www.behance.net/maxwellmartin2" target="_blank" rel="noopener noreferrer">
            <Icon path={siBehance.path} />
          </a>

          <a href="https://github.com/maxwelltyreece" target="_blank" rel="noopener noreferrer">
            <Icon path={siGithub.path} />
          </a>
        </h2>
      </span>
    </motion.div>
    
  )
}
