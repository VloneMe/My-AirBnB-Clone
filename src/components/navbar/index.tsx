'use client';

import { Container } from '../Container'
import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu';

export const Navbar = () => {
  return (
    <nav className='w-full h-[70px] flex shadow-sm bg-white border-b-[1px]'>
      <Container className='flex'>
        <div className='items-center w-full flex justify-between gap-3 md:gap-0'>
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </nav>
  )
}