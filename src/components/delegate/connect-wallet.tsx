import { DOCS_URL } from '@/constants/links'
import { cn } from '@/lib/utils'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export const ConnectWallet = () => {
  const { open } = useWeb3Modal()
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90',
        'flex w-full flex-col items-start justify-center gap-6',
        'px-4 py-24',
        'min-h-screen items-center',
      )}
    >
      <Image src="/images/towns-t-logo.png" alt="TOWNS T Logo" width={269} height={269} />
      <div className="flex flex-col items-center gap-2">
        <Typography
          as="h1"
          size="4xl"
          className="text-[32px] font-semibold leading-[44px] text-gray-10"
        >
          Delegation
        </Typography>
        <Typography size="sm" as="span" className="text-gray-20">
          Delegate and authorize your votes
        </Typography>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" onClick={() => open()}>
          Connect Wallet
        </Button>
        <Link href={`${DOCS_URL}/rvr-token/delegation`} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            <div className="flex items-center gap-1">
              <span>Read the Docs</span>
              <ChevronRight height={16} width={16} />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  )
}
