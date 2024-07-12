import { HTMLAttributes } from "react";
import { Button } from "../button/Button";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  img: string
  text: string
}
export const Card:React.FC<Props> = ({img, text, title, subtitle, ...props}) => {
  return (
    <article {...props} className="flex flex-col justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <header className="py-4 text-left">
        <h5 className="text-xl font-bold"> { title } </h5>
        {
          subtitle && <span className="text-slate-600 font-normal"> {subtitle} </span>
        }
      </header>
      <main className="w-full">
        <img className="w-full max-h-96" src={img} />
      </main>
      <footer className="p-4 flex flex-col gap-2">
        <p className="text-balance max-w-[40ch]">
          {
            text
          }
        </p>
        <div className="flex flex-row gap-2 justify-start items-center w-full">
          <Button primary={true} size="large">Add</Button>
          <Button size="large">Look</Button>
        </div>
      </footer>
    </article>
  )
}