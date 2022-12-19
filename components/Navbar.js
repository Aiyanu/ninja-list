import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image src="/logo.png" width={128} height={77} alt="logo" />
        </div>
        <Link href="/"> Home</Link>
        <Link href="/about">About </Link>
        <Link href="/ninjas"> Ninja Listing</Link>
    </nav>
  )
}

export default Navbar