interface Props  {
  marginSize: "sm" | "md" | "lg"
  typeColor: "solid" | "gradient-transparent" | "gradient-color"
}

export const Divider: React.FC<Props> = ({marginSize = "lg", typeColor = "solid"})=>{
  return (
    <hr
      className={`${marginSize == "sm" ? "my-4 mx-3" : marginSize == "md" ? "my-8 mx-6" : "my-12 mx-10"} h-1 w-full border-t-0 ${typeColor == "gradient-color" ? "bg-blue-700 bg-gradient-to-r from-transparent via-red-700 to-black" : typeColor == "gradient-transparent" ? "bg-transparent bg-gradient-to-r from-transparent via-red-700 to-transparent" : "bg-red-700"} `}
    />
  )
}