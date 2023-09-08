"use client"
import Link from "next/link"
import AuthButton from "./AuthButton"
import { usePathname } from "next/navigation"

const COMMON_STYLE = "p-2 my-1 transition ease-in-out duration-100 rounded"

const ACTIVE_ROUTE = `${COMMON_STYLE} bg-sky-100 border-solid border-sky-200 border`
const INACTIVE_ROUTE = `${COMMON_STYLE} hover:bg-sky-100`

export default function Navbar() {
  const pathname = usePathname()
  return (
    <aside className="p-4 w-[300px] flex flex-col gap-2 bg-slate-50 drop-shadow-lg">
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href="/protected">
          <li
            className={
              pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Protected
          </li>
        </Link>
        <Link href="/serverAction">
          <li
            className={
              pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Server Action
          </li>
        </Link>
        <Link href="/apiFromClient">
          <li
            className={
              pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API from client
          </li>
        </Link>
        <Link href="/apiFromServer">
          <li
            className={
              pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API from server
          </li>
        </Link>
      </ul>
      <hr className="my-2" />
      <AuthButton />
    </aside>
  )
}
