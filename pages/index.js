import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function Home() {
  
  return (
    <div className="h-screen flex flex-row items-center justify-center gap-4">
      <Link href="/Login">
        <Button className=" p-3">Login</Button>
      </Link>
      <Link href="/Signup">
        <Button className=" p-3">Signup</Button>
      </Link>
      <Link href="/SignUpWithZod">
        <Button className=" p-3">Signup with Zod</Button>
      </Link>
    </div>
  )
}

export default Home
