// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'
import Link from '../Link/Link';
import ListItem from '../ListItem/ListItem';

const Navbar = () => {
    const listItem = [
        {
            path: '/',
            text: "Home"
        },

        {
            path: '/login',
            text: "Login"
        },
    ]
    return (
        <nav className='flex w-9/12 mx-auto justify-between items-center py-5'>
            <Link to='/'>
                <img className='w-1/6' src={logo} alt="Logo_Shakcommerce" />
            </Link>

            <ul className='flex items-center'>
                {listItem.map((item, key) => <ListItem {...item} key={key} />)}
            </ul>
        </nav>
    );
};

export default Navbar;