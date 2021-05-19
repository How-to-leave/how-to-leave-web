import { useState } from 'react'

export function Button() {
  const [countClick, setCountClick] = useState(0)
  const handleClick = () => setCountClick((prev) => ++prev)
  return <button onClick={handleClick}>{countClick}</button>
}
