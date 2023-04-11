import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-con">
    <Link to="/home">
      <p>Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </nav>
)
export default Header
