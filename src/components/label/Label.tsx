import { HTMLProps } from "react"
import { ColorsSupported } from "../../types/styleTypes"

interface Props extends HTMLProps<HTMLLabelElement> {
  children: JSX.Element | JSX.Element[] | string
  stateData?: "success" | "error" | "normal"
  labelColor: keyof ColorsSupported
}
const getLabelColor = (labelColor: keyof ColorsSupported) => {
  const options:ColorsSupported = {
    blue: "text-blue-700",
    Dark: "text-black",
    Light: "text-white",
    red: "text-red-700",
    yellow: "text-yellow-300"
  }
  return options[labelColor]
}
export const Label: React.FC<Props> = ({stateData = "normal", labelColor = "Dark",children, ...props})=>{
  return (
    <label {...props} className={`text-sm font-medium ${stateData == "success"? "text-green-500" : stateData == "error" ? "text-red-500" : getLabelColor(labelColor)}`}> {children} </label>
  )
}