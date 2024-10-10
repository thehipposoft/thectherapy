'use client'
import { useLenis } from '@studio-freight/react-lenis';
import Link from 'next/link';

const AnchorLink = ({href, children}:any) => {
  const lenis = useLenis();
 
  return (
        <Link
            className='hover:underline'
            href={href}
            onClick={() => {
                lenis?.scrollTo(`${href}`)
            }}
        >
            {children}
        </Link>
    )
}

export default AnchorLink