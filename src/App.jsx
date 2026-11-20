import NavBar from "./components/NavBar";
import Receipt from "./components/Receipt";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <main className="min-h-screen bg-stone-100 p-4 sm:p-6">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <NavBar />
          <AddProduct />
        </div>

        <aside className="lg:pt-0">
          <Receipt />
        </aside>
      </div>
    </main>
  );
}

export default App;