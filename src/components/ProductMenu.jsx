function ProductMenu({ product, onChooseProduct, subTotalProductsPrice, searched }) {
  const searchTerm = searched.trim().toLowerCase();
  const filteredProducts = product.filter(item =>
    [item.productName, item.category, item.description]
      .some(value => value?.toLowerCase().includes(searchTerm))
  );

  return (
    <section className="mt-6">
      <nav className="flex gap-2 overflow-x-auto pb-1">
        <button type="button" className="shrink-0 cursor-pointer rounded-full border-0 bg-stone-900 px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-stone-700 active:scale-[0.97]">All</button>
        <button type="button" className="shrink-0 cursor-pointer rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 active:scale-[0.97]">Coffee</button>
        <button type="button" className="shrink-0 cursor-pointer rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 active:scale-[0.97]">Cold drinks</button>
        <button type="button" className="shrink-0 cursor-pointer rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 active:scale-[0.97]">Bakery</button>
        <button type="button" className="shrink-0 cursor-pointer rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 active:scale-[0.97]">Kitchen</button>
      </nav>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full rounded-xl border border-dashed border-stone-200 px-4 py-8 text-center text-sm text-stone-500">
            No products found.
          </p>
        ) : filteredProducts.map((item, index) => (
          
          <article key={index} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
            {item.image? item.image && (
              <div className="h-40 overflow-hidden rounded-t-2xl bg-orange-100">
                <img src={item.image} alt={item.productName} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
            ): 
              ( <div className="h-40 overflow-hidden rounded-t-2xl bg-orange-100">
                  <img src={`https://placehold.co/600x400/orange/white?text=${item.productName}`} alt={item.productName} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
              )
            }
            <div className="p-4">
              <h2 className="font-semibold text-stone-900">{item.productName}</h2>
              <p className="mt-1 min-h-10 text-sm text-stone-500">{item.description || "No description"}</p>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-bold text-stone-900">{item.price ? `Rs.${item.price}` : "Rs.0.00"}</span>
                <button type="button" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-orange-500 text-xl text-white transition-colors duration-200 hover:bg-orange-600 hover:shadow-md active:scale-[0.97]" onClick={() => {onChooseProduct(item); subTotalProductsPrice(item.price)}}>+</button>
              </div>
            </div>
          </article>
        ))}

      </div>


    </section>
  );
}

export default ProductMenu;
