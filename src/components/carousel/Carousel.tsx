import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { Button } from "../button/Button"
import { Card } from "../card/Card"
import { useEffect, useState } from "react"

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [numCards, setNumCards] = useState(window.innerWidth <= 600 ? 1 : window.innerWidth <= 830 ? 2 : 3)
  const arr = [
    { src: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: 0 },
    { src: "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: 1 },
    { src: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: 2 },
    { src: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: 3 },
    { src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: 4 }
  ];
  const [imgCarrousel] = useState(arr)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };
  if (currentIndex > arr.length - 3) {
    console.log(currentIndex)
    setCurrentIndex(0)
    console.log("hi")
  }
  useEffect(()=>{
    window.addEventListener("resize", ()=> setNumCards(window.innerWidth <= 600 ? 1 : window.innerWidth <= 830 ? 2 : 3))
  })
  return (
    <div className="flex flex-row justify-center items-center gap-2 max-w-full overflow-hidden">
      <Button size="small" onClick={handlePrev}>
        <IconArrowLeft />
      </Button>
      <div className={`flex flex-row justify-center items-center space-x-4`}>
        {
          imgCarrousel.slice(currentIndex, currentIndex + numCards).map((obj) => <Card key={obj.id} img={obj.src}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, excepturi voluptas? Quos, provident deserunt maiores cum explicabo in eum, fugit fuga inventore, esse cumque corrupti. Exercitationem aspernatur error ad nostrum?"
            subtitle="Subtitle card"
            title={`Card #${obj.id}`} />)
        }
      </div>
      <Button size="small" onClick={handleNext}>
        <IconArrowRight />
      </Button>
    </div>
  )
}