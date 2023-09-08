"use client"
import Link from "next/link"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

function IsThatYou() {
  const { data: session } = useSession()

  return (
    <div className="flex justify-around p-4">
      <div className="flex flex-col items-center">
        <div className="relative h-[128px] w-[128px] m-2 ">
          <Image
            src={session?.user?.image ?? ""}
            alt="Avatar"
            fill
            className="bg-gradient-to-r from-amber-800 to-orange-900 rounded-full"
          />
        </div>
        <div>
          <p>Hello {session?.user?.name}, is that you?</p>
        </div>
      </div>
    </div>
  )
}

export default IsThatYou
