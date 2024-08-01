import React, { useMemo } from "react"
import { ColorsSupported, Sizes } from "../../types/styleTypes"
import classNames from "classnames"

interface Props {
  size: keyof Sizes
  colorSpinner: keyof ColorsSupported
}
const getColorSpinner = (color: keyof ColorsSupported):string => {
  const optionsColor: ColorsSupported = {
    blue: "border-t-blue-600",
    Dark: "border-t-slate-600",
    Light: "border-t-gray-50",
    red: "border-t-red-700",
    yellow: "border-t-yellow-500"
  }
  return optionsColor[color]
}
const getSizeSpinner = (size: keyof Sizes):string =>{
  const optionsSize: Sizes = {
    large: "h-16 w-16 border-8",
    medium: "h-12 w-12 border-4",
    small: "h-8 w-8 border-4"
  }
  return optionsSize[size]
}
export const Spinner: React.FC<Props> = ({ colorSpinner = "blue", size = "medium" }) => {
  const spinnerClass = useMemo(() => classNames(`border-gray-300 animate-spin rounded-full ${getColorSpinner(colorSpinner)} ${getSizeSpinner(size)}`) , [colorSpinner, size])
  return (
    <div className={spinnerClass} />
  )
}
