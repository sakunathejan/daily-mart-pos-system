import NavBar from "./components/NavBar";
import Receipt from "./components/Receipt";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import OrderManagement from "./components/OrderManagement";


function App() {

  const [choosedProduct, setChoosedProduct] = useState([]);
  const [subTotal, setSubTotal] = useState(0.00);
  const [search, setSearch] = useState("");
  const [manageMode, setmanageMode] = useState("home");

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

  function handleSearch(value) {
    setSearch(value);
  }

  return (
     <main className="min-h-screen bg-stone-100 p-4 sm:p-6">

    <div className="mx-auto max-w-screen-2xl">

      {/* Always visible navigation */}
      <NavBar
        search={search}
        onSearch={handleSearch}
        manageMode={manageMode}
        setManageMode={setmanageMode}
      />

      {/* Home / POS page */}
      {manageMode === "home" && (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">

          <div className="min-w-0">
            <AddProduct
              onChooseProduct={handleChoosedProduct}
              subTotalProductsPrice={handleSubTotal}
              searched={search}
            />
          </div>

          <Receipt
            choosedProduct={choosedProduct}
            subTotal={subTotal}
            onClearOrder={handleClearOrder}
          />

        </div>
      )}

      {/* Order Management page */}
      {manageMode === "order management" && (
        <div className="mt-6">
          <OrderManagement />
        </div>
      )}

    </div>

  </main>
  );
}

export default App;