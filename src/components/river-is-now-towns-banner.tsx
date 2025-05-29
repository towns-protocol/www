'use client'

import { links } from '@/constants/links'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Towns } from './icons/Towns'
import { Typography } from './ui/typography'

export const RiverIsNowTownsBanner = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[linear-gradient(to_left,#82E4A3_14.13%,#E48290_50%,#8C84F7_86%)] py-2 text-white">
      <Link href={links.Towns} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2">
          <Towns height={16} width={16} />
          <Typography as="span" size="sm" className="font-medium">
            River is now Towns Protocol
          </Typography>
          <ChevronRight height={16} width={16} />
        </div>
      </Link>
    </div>
  )
}
