"use client"
import Link from "next/link"

import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {
  return (
    <>
      <Link href="#">Teste</Link>
    </>
  )
}

export default AuthButton
