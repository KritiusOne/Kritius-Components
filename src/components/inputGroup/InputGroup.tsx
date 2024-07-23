import React, { InputHTMLAttributes } from "react"
import { Label } from "../label/Label"
import { Input } from "../../input/Input"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  textLabel: string
  stateData: "success" | "error" | "normal"
}
export const InputGroup: React.FC<Props> = ({stateData, textLabel, ...props})=> {
  return (
    <div className="flex flex-col gap-0.5 justify-center items-start">
      <Label stateData={stateData}>
        {textLabel}
      </Label>
      <Input stateData={stateData} {...props} />
    </div>
  )
}