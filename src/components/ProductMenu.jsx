function ProductMenu({ product, onChooseProduct, subTotalProductsPrice }) {

  const imageUrl = ``;

  return (
    <section className="mt-6">
      <nav className="flex gap-2 overflow-x-auto pb-1">
        <button type="button" className="shrink-0 rounded-full bg-stone-900 px-5 py-2.5 text-sm text-white">All</button>
        <button type="button" className="shrink-0 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm">Coffee</button>
        <button type="button" className="shrink-0 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm">Cold drinks</button>
        <button type="button" className="shrink-0 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm">Bakery</button>
        <button type="button" className="shrink-0 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm">Kitchen</button>
      </nav>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {product.map((item, index) => (
          
          <article key={index} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            {item.image? item.image && (
              <div className="h-40 rounded-t-2xl bg-orange-100">
                <img src={item.image} alt={item.productName} className="h-full w-full object-cover"/>
              </div>
            ): 
              ( <div className="h-40 rounded-t-2xl bg-orange-100">
                  <img src={`https://placehold.co/600x400/orange/white?text=${item.productName}`} alt={item.productName} className="h-full w-full object-cover"/>
                </div>
              )
            }
            <div className="p-4">
              <h2 className="font-semibold text-stone-900">{item.productName}</h2>
              <p className="mt-1 min-h-10 text-sm text-stone-500">{item.description || "No description"}</p>

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="font-bold text-stone-900">{item.price ? `Rs.${item.price}` : "Rs.0.00"}</span>
                <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl text-white" onClick={() => {onChooseProduct(item); subTotalProductsPrice(item.price)}}>+</button>
              </div>
            </div>
          </article>
        ))}

      </div>


    </section>
  );
}

export default ProductMenu;
