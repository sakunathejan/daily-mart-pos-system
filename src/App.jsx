import NavBar from "./components/NavBar";
import ProductMenu from "./components/ProductMenu";
import Receipt from "./components/Receipt";

function App() {
  return (
    <main className="min-h-screen bg-stone-100 p-4 sm:p-6">

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="min-w-0 xl:col-span-2">
          <NavBar />
          <ProductMenu />
        </div>

        <div className="xl:col-span-1">
          <Receipt />
        </div>

      </div>
    </main>
  );
}

export default App;