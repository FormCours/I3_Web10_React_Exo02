import DisplayPrice from '../display-price/display-price';
import style from './product-table.module.css';

// Composant (↓ Simple / Sans code) sous forme de lambda qui envoie le JSX
const ProductTableHead = (props) => (
    <thead>
        <tr>
            <th>Nom du produit</th>
            <th colSpan={2}>Prix</th>
        </tr>
    </thead>
);

// Composant dédié à l'affichage d'une row de a liste des produits
const ProductTableRow = ({ name, price, promo }) => (
    <tr>
        <td>{name}</td>
        {!promo ? (
            <td colSpan={2}><DisplayPrice value={price} /></td>
        ) : (<>
            <td><DisplayPrice value={price} /></td>
            <td className={style.promo}>Promo</td>
        </>)}
    </tr>
);

// Composant d'affichage de la liste des produits
const ProductTable = (props) => {

    const productsJSX = props.products.map(
        product => <ProductTableRow {...product} key={product.id} />
    );

    return (
        <table className={style.tableProduct}>
            <ProductTableHead />
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    );
};

export default ProductTable;