import { InputHTMLAttributes } from "react"
import React from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  stateData: "success" | "error" | "normal"
}
export const Input: React.FC<Props> = ({stateData = "normal", ...props})=>{
  return (
    <input {...props} className={`outline-none border-b-2 border border-solid w-full rounded-sm p-1.5 border-x-0 border-t-0 ${stateData == "error" ? "border-red-800 placeholder:text-red-800" : stateData == "success" ? "border-green-700 placeholder:text-green-500" : "border-slate-900"}`}  />
  )
}