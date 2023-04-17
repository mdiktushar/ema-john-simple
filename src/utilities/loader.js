import { getShoppingCart } from "./fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("/Data/products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart()
  const savedCart = [];
  // step 1: get id
  for (const id in storedCart) {
    // step 2: get the product by using id
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      // Check if addedProduct is not undefined
      // step 3: get quantity of the product
      let quantity = storedCart[id];
      addedProduct.quantity = quantity;
      // step 4: add the added products to savedCart
      savedCart.push(addedProduct);
    }
  }
  
  return savedCart;
};

export default cartProductsLoader;
