import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

// step-17 
const Feature = ({ feature }) => {
    return (
        <div>
            {/* step-18  */}
            <p className='flex items-center'>
                <AiFillCheckCircle className='mr-1'>
                </AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;