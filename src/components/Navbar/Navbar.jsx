import './navbar.css'


const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        Eve-olution
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}


export default Navbar;
