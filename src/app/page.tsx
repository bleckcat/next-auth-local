import { getServerSession } from "next-auth"
import IsThatYou from "./components/IsThatYou"

export default async function Home() {
  const session = await getServerSession()
  return <>{session ? <IsThatYou /> : <h1>You need to sign in</h1>}</>
}
