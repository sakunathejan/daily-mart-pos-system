function NavBar({ search, onSearch, manageMode, setManageMode }) {

  

  return (
    <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex shrink-0 items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 font-bold text-white" onClick={()=>setManageMode("home")}>
          DM
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900">
            DailyMart POS
          </h1>
        </div>
      </div>

      <div>
        <div className=" grid grid-cols-2 gap-1 rounded-xl border border-stone-200/70 bg-stone-100 p-1">
          <button
            type="button"
            className={`cursor-pointer rounded-lg border border-stone-200/70 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 active:scale-[0.97] ${manageMode === "order management" 
              ? "bg-white text-stone-900 shadow-sm ring-1 ring-stone-200/70 hover:bg-stone-50"
              : "text-stone-500 hover:bg-white/70 hover:text-stone-800"
              }`}
              onClick={()=>setManageMode("order management")}
          >
            Order Management
            
          </button>

          <button
            type="button"
            className={`cursor-pointer rounded-lg border border-stone-200/70 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 active:scale-[0.97] ${manageMode === "customer management"
              ? "bg-white text-stone-900 shadow-sm ring-1 ring-stone-200/70 hover:bg-stone-50"
              : "text-stone-500 hover:bg-white/70 hover:text-stone-800"
              }`}
              onClick={()=>setManageMode("customer management")}
          >
            Customer Management
          </button>
        </div>
      </div>
      
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
