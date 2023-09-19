import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

// step-12 receive option
const PriceOption = ({option}) => {

// step-13 
const {name, price, features} = option;

    return (
        <div className='bg-blue-500 rounded-lg p-6 flex flex-col text-white'>
            {/* step-14*/}
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-3'>{name}</h4>

            {/* step-15  */}
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature
                        key={index}
                        // step-16 
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='mt-12 bg-red-400 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;