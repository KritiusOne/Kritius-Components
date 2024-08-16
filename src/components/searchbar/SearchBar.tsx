import React, { KeyboardEvent, useEffect, useState } from 'react'
import { IconSearch } from '@tabler/icons-react';
import { Dialog } from "../dialog/Dialog"
import { Button } from '../button/Button';

export const SearchBar: React.FC = () => {
  const [viewModal, setViewModal] = useState(false) // La logica del cerrado clickeando la parte gris del modal depende de la implementación
  useEffect(()=>{
    const handleOpenSearchBar = (e:KeyboardEvent)=>{
      if(!viewModal && e.altKey){
        if(e.key.toLowerCase() == "k"){
          setViewModal(true)
        }
      }
    }
    window.addEventListener("keydown", handleOpenSearchBar)
  })
  const handleEscForLeave = (e: KeyboardEvent<HTMLInputElement>)=>{
    if(e.key.toLowerCase() == "escape" && viewModal){
      setViewModal(false)
    }
  }
  return (
    <div className='w-screen w-creen'>
      <div className='w-full h-96 flex justify-center items-center'>
        <div
          onClick={() => {
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
            Alt K
          </span>
        </div>
      </div>
      {
        viewModal && (
        <Dialog onClose={()=> setViewModal(!viewModal) }>
          <div className='w-full h-full text-gray-200 bg-[#1e293b] flex flex-row justify-center items-center rounded-md pr-3'>
            <div className='text-center p-2'>
              <IconSearch />
            </div>
            <label className='flex-1 h-full p-2 cursor-text'>
              <input onKeyDown={handleEscForLeave} type="text" className='h-full w-full bg-transparent border-none outline-none ' placeholder='Quick search...' />
            </label>
            <div className='py-2'>
              <Button onClick={()=> setViewModal(false)} primary={false} size='small' colorButton='Light' >
                esc
              </Button>
            </div>
          </div>
        </Dialog>)
      }
    </div>
  )
}
