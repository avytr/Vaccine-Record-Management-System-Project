import logo from './Logo.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <a href="/">
          <img 
            href="/"
            src={logo} className="logo" alt="logo"/>
        </a>

        <div className='Header-nagivation'>
            <div className='tag'>
              <a href="/"></a>     
            </div>

            <div className='tag'>
              <a href="/records">Records</a>     
            </div>

            <div className='tag'>
              <a href="/vaccines">Vaccines</a>     
            </div>

            <div className='tag'>
              <a href="/locations">Locations</a>     
            </div>

            <div className='tag'>
              <a href="/us">About us</a>     
            </div>

        </div>

        <div className='Header-search'>
            <input 
                placeholder='Search'
                className='search-input'
            ></input>
        </div>
    </div>
  )
}

export default Header;