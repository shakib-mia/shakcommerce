import Link from '../Link/Link';
import PropTypes from 'prop-types';


const ListItem = ({ path, text }) => {
    // console.log(path, text);
    return (
        <li className='px-3'>
            {path ? <Link className='' to={path}>{text}</Link> : <>{text}</>}
        </li>
    );
};

ListItem.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ListItem;
