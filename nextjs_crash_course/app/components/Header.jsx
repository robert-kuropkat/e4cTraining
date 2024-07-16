import Link from "next/link";
 
const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href='/'>Doers of Stuff</Link>
                <div className="links">
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Our Team</Link>
                <Link href='/code/repos'>Code</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header