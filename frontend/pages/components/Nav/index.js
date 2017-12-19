/* TODO */
import ActiveLink from '../ActiveLink'

const Nav = () => {
    return (
    <nav>
        <style jsx>{`
        .active:after {
            content: ' (current page)';
        }
        .nav-link {
            text-decoration: none;
            padding: 10px;
            display: block;
        }
        `}</style>

        <ul>
        <li>
            <ActiveLink activeClassName='active' href='/'>
            <a className='nav-link home-link'>Home</a>
            </ActiveLink>
        </li>
        <li>
            <ActiveLink activeClassName='active' href='/about'>
            <a className='nav-link'>About</a>
            </ActiveLink>
        </li>
        </ul>
    </nav>
    )
}
  
export default Nav;
