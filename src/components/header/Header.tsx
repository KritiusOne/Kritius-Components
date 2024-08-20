import React, { HTMLAttributes } from 'react'
import { SearchBar } from '../searchbar/SearchBar'
import { IconBrandGithub } from '@tabler/icons-react'

interface Props extends HTMLAttributes<HTMLElement> {

}
export const Header: React.FC<Props> = ({...props}) => {
  return (
    <header {...props} className={`w-screen h-20 flex flex-row justify-around items-center px-3 py-1 gap-2 ${props.className}`}>
      <span>
        
      </span>
      <nav className='px-2'>
        <SearchBar controledH={true} />
      </nav>
      <ul className='flex flex-row items-center justify-around gap-2 flex-1'>
        <li>
          Home
        </li>
        <li>
          Docs
        </li>
        <li>
          Blog
        </li>
        <li className='text-lg hover:scale-110 transition-transform ease-linear'>
          <a target='_blank' href="https://github.com/KritiusOne/Kritius-Components" >
            <IconBrandGithub width={24} height={24} />
          </a>
        </li>
      </ul>
    </header>
  )
}
