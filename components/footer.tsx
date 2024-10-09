import React from 'react'
import Link from 'next/link'
import { SiInstagram } from 'react-icons/si'
import { AiOutlineGlobal } from 'react-icons/ai' // Mengimpor ikon global dari react-icons
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://irzan.us" target="_blank">
            <AiOutlineGlobal size={18} /> {/* Ikon untuk website */}
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://instagram.com/zannonly_" target="_blank">
            <SiInstagram size={18} /> {/* Ikon untuk Instagram */}
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
