import PropTypes from 'prop-types';

const DisplayPrice = (props) => {

    const price = new Intl.NumberFormat('fr-BE', { style: 'currency', currency: 'EUR' })
                          .format(props.value)

    return (
        <span>{price}</span>
    );
};

DisplayPrice.propTypes = {
    value: PropTypes.number.isRequired
};

export default DisplayPrice;