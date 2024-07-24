import { IconStarFilled } from "@tabler/icons-react"
import { HTMLAttributes } from "react"
import React from "react"

interface Props extends HTMLAttributes<HTMLElement>{
  numStars: 0 | 1 | 2 | 3 | 4 | 5
  size?: "small" | "medium" | "large"
}

export const Stars: React.FC<Props> = ({numStars = 0, size = "medium", ...props})=>{
  return (
    <div {...props} className={`flex flex-row justify-center items-center ${props.className}`}>
      {
        Array.from(Array(5), (_, i)=> <IconStarFilled key={i} className={`${i < numStars ? "text-yellow-300" : "text-gray-800"}`} height={size == "small" ? 16 : size == "large" ? 48 : 32} /> )
      }
    </div>
  )
}