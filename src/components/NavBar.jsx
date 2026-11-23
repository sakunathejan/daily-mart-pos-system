import OrderManagement from "./OrderManagement";

function NavBar({ search, onSearch }) {
  return (
    <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex shrink-0 items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 font-bold text-white">
          PN
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900">
            Pay Nest
          </h1>
        </div>
      </div>

      <OrderManagement/>
      <label className="block w-full sm:max-w-sm">
        <span className="sr-only">Search the menu</span>
        <input
          type="search"
          placeholder="Search the menu"
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
        />
      </label>
    </header>
  );
}

export default NavBar;
