import React, { HTMLAttributes } from "react"
import { Button } from "../iconButton/Button"

interface Props extends HTMLAttributes<HTMLElement> {

}
export const Aside: React.FC<Props> = ({ ...props }) => {
  const handleClickOverlay = ()=>{
    console.log("se supone que me cerré")
  }
  return (
    <section className='w-screen h-screen fixed top-0 left-0 bg- flex justify-center items-center md:justify-start bg-black/[0.5]' onClick={handleClickOverlay} >
      <aside {...props} className={`flex flex-col justify-between py-2 px-3 h-4/5 w-4/5 md:h-full md:w-3/12 bg-white ${props.className}`}>
        <h2 className="w-full px-3">Jonh Doe</h2>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Carrito de compras</Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Iniciar sesión</Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Registrarse </Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Ver productos </Button>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Ver Categorias </Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Busqueda avanzada </Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Mejores productos </Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Promociones </Button>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Configuración </Button>
          <Button size="extraLarge" className="text-12 border-none hover:bg-slate-200 w-full text-left"> Sobre nosotros </Button>
        </div>
      </aside>
    </section>
  )
}