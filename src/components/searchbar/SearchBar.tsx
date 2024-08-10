import React, { useState } from 'react'
import { IconSearch } from '@tabler/icons-react';
import { Dialog } from "../dialog/Dialog"

export const SearchBar: React.FC = () => {
  const [viewModal, setViewModal] = useState(false)
  return (
    <div className='w-screen w-creen'>
      <div className='w-full h-96 flex justify-center items-center'>
        <div
          onClick={() => {
            console.log(viewModal)
            setViewModal(!viewModal)
          }}
          className='h-8 w-72 flex flex-row justify-center items-center text-center gap-2 bg-[#1e293b] text-gray-200 rounded-lg cursor-pointer
          hover:opacity-80 select-none'>
          <div className='text-center p-2'>
            <IconSearch />
          </div>
          <span className='flex-1 p-2 text-start'>
            Quick search...
          </span>
          <span className='p-2 text-center text-pretty'>
            Ctrl K
          </span>
        </div>
      </div>
      {
        viewModal && (<Dialog>
          <div className='w-full h-full bg-white'>
            algo
          </div>
        </Dialog>)
      }
    </div>
  )
}
