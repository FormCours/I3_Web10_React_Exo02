import { nanoid } from 'nanoid';   //npm install nanoid
import ProductTable from './components/product-table/product-table';

import TitlePage from './components/title-page/title-page';


function App() {

  // Les données à utiliser pour la collection
  // Cas réel : Acces à une API, Réponse de formulaire, ...
  const productData = [
    { id: nanoid(), name: 'Pull', price: 29.99, promo: false },
    { id: nanoid(), name: 'Manteau', price: 159.49, promo: true },
    { id: nanoid(), name: 'Pantalon', price: 49.01, promo: false },
    { id: nanoid(), name: 'Chemise', price: 32.62, promo: true },
    { id: nanoid(), name: 'Robe', price: 58.74, promo: false },
    { id: nanoid(), name: 'Gillet', price: 25, promo: true },
    { id: nanoid(), name: 'Chemise rose bonbon', price: 12.62, promo: true }
  ];
  console.log(productData);

  return (
    <div className="App">
      <TitlePage title='Exo 02 - Les collections' />
      <ProductTable products={productData} />
    </div>
  );
}

export default App;
