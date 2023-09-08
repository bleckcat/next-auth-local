import { headers } from "next/headers"

export default async function ApiFromServer() {
  const response = await fetch("http://localhost:3000/api/whoAmI", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json())

  return (
    <div>
      <p>
        API route from <b className="underline">Server</b>
      </p>
      <p>Name: {response?.name}</p>
    </div>
  )
}
