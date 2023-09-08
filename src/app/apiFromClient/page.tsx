"use client"
import { useEffect, useState } from "react"

export default function ApiFromClient() {
  const [name, setName] = useState<string>()

  useEffect(() => {
    fetch("/api/whoAmI")
      .then((res) => {
        return res.json()
      })
      .then((data) => setName(data.name))
  }, [])

  return (
    <div>
      <p>
        API route from <b className="underline">Client</b>
      </p>
      <p>Name: {name}</p>
    </div>
  )
}
