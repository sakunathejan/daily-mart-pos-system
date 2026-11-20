function NavBar() {
  return (
    <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 font-bold text-white">
          PN
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900">
            Pay Nest
          </h1>
        </div>
      </div>

      <label className="block w-full sm:max-w-md">
        <span className="sr-only">Search the menu</span>
        <input
          type="search"
          placeholder="Search the menu"
          className="w-full rounded-full border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400"
        />
      </label>
    </header>
  );
}

export default NavBar;
