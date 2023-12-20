import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="" className="text-primary font-semibold text-3xl">
        Foodie
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contant</Link>
        <Link
          href={''}
          className="bg-primary text-white px-6 rounded-full py-2 b"
        >
          Login
        </Link>
      </nav>
    </header>
  )
}
