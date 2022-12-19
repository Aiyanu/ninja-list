import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      // router.go(0)
      router.push("/")
    },5000)
  },[])
  return (
    <div className="not-found">
        <h1>Oooops....</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/">Homepage</Link> </p>
    </div>
  )
}

export default NotFound