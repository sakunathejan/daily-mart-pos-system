function ProductMenu() {
  return (
    <section className="mt-6">
      <nav className="flex flex-wrap gap-3">
        <button className="rounded-full bg-stone-900 px-6 py-3 text-white">All</button>
        <button className="rounded-full border bg-white px-6 py-3">Coffee</button>
        <button className="rounded-full border bg-white px-6 py-3">Cold drinks</button>
        <button className="rounded-full border bg-white px-6 py-3">Bakery</button>
        <button className="rounded-full border bg-white px-6 py-3">Kitchen</button>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        <article className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="h-48 rounded-xl bg-orange-100"></div>
          <div className="p-2">
            <h2 className="font-semibold">Flat white</h2>
            <p className="text-sm text-stone-500">Double shot, silky milk</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">$4.20</span>
              <button className="h-10 w-10 rounded-full bg-orange-500 text-xl text-white">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="h-48 rounded-xl bg-orange-100"></div>
          <div className="p-2">
            <h2 className="font-semibold">Iced latte</h2>
            <p className="text-sm text-stone-500">Over ice, lightly sweet</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">$4.80</span>
              <button className="h-10 w-10 rounded-full bg-orange-500 text-xl text-white">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="h-48 rounded-xl bg-green-100"></div>
          <div className="p-2">
            <h2 className="font-semibold">Matcha latte</h2>
            <p className="text-sm text-stone-500">Ceremonial grade matcha</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">$5.20</span>
              <button className="h-10 w-10 rounded-full bg-orange-500 text-xl text-white">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-white p-3 shadow-sm">
          <div className="h-48 rounded-xl bg-orange-100"></div>
          <div className="p-2">
            <h2 className="font-semibold">Orange juice</h2>
            <p className="text-sm text-stone-500">Squeezed to order</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold">$4.50</span>
              <button className="h-10 w-10 rounded-full bg-orange-500 text-xl text-white">
                +
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProductMenu;
