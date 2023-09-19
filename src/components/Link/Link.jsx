import PropTypes from 'prop-types';

// step-4 receive route 
const Link = ({ route }) => {
    return (
        <li className="mr-10 px-8 rounded-lg py-2 hover:bg-blue-500 hover:text-white">
           <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.PropTypes = {
    route: PropTypes.object
}

export default Link;