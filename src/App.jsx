import NavBar from "./components/NavBar";
import Receipt from "./components/Receipt";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import ChargePopUp from "./components/ChargePopUp";
import PaymentSuccessPopUp from "./components/PaymentSuccessPopUp";

function App() {

  const [choosedProduct, setChoosedProduct] = useState([]);
  const [subTotal, setSubTotal] = useState(0.00);

  function handleChoosedProduct(product) {
    setChoosedProduct(c => [...c, product]);
  }

  function handleSubTotal(price) {
    
    setSubTotal(s => s + Number(price));
  }

  function handleClearOrder() {
    setChoosedProduct([]);
    setSubTotal(0);
  }

  return (
    <main className="min-h-screen bg-stone-100 p-4 sm:p-6">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <NavBar />
          <AddProduct onChooseProduct={handleChoosedProduct} subTotalProductsPrice={handleSubTotal} />
        </div>


        <Receipt
          choosedProduct={choosedProduct}
          subTotal={subTotal}
          onClearOrder={handleClearOrder}
        />
      </div>

      {/* <PaymentSuccessPopUp /> */}
    </main>
  );
}

export default App;