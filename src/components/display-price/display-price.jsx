import PropTypes from 'prop-types';

const DisplayPrice = (props) => {

    // Utilisation de "Intl" pour formatté la valeur numerique
    //   en une valeur "devise" pour la belgique.
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
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