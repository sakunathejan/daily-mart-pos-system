import NavBar from "./components/NavBar";
import Receipt from "./components/Receipt";

function App() {
  return (
    <>
      <div className="min-h-screen w-full ">
        <div className="grid grid-cols-2 gap-2">
          <NavBar />
          <Receipt />
        </div>
      </div>
    </>
  );
}

export default App;