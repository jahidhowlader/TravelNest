import PropTypes from 'prop-types';

const RestaurantItems = ({ img, name, category }) => {
    return (
        <div className="flex items-center gap-5">
            <div>
                <img src={img} alt="restaurant item" className="w-[90px] h-[90px]" />
            </div>

            <div>
                <h6 className="primary-font text-xl font-bold">{name}</h6>
                <span className="opacity-80">{category}</span>
            </div>
        </div>
    );
};

RestaurantItems.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default RestaurantItems;