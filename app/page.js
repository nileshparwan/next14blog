'use client'

import { useState } from "react"
import Card from "@/components/card";

export default function Home({ searchParams }) {
  const [isVisible, setIsVisible] = useState(true)
  const [names, setNames] = useState(['Koshal', 'Preehansh', 'Keshav'])
  const name = 'Koshal'
  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  const handleAdd = () => {
    setNames([...names, 'New element!'])
  }
  const cards = isVisible
    && names.map((name, index) => <Card key={`${index}-${name}`}>{name}</Card>)

  console.log(searchParams)
  if (searchParams.error) throw new Error('Hello!')

  return (
    <>
      <div className="space-y-4">
        <div>Hello, sdsd{name}</div>
        {cards}
        <div className="flex space-x-4">
          <button type="button" onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button type="button" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  )
}