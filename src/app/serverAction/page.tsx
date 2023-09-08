import { getServerSession } from "next-auth"
import WhoAmIButton from "./WhoAmIButton"

export default async function ServerActionPage() {
  const WhoAmI = async () => {
    "use server"
    const session = await getServerSession()
    return session?.user?.name || "Not Logged in"
  }

  return (
    <div>
      <WhoAmIButton whoAmIAction={WhoAmI} />
    </div>
  )
}
