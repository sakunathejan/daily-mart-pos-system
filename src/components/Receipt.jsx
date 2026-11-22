import { useState } from "react";
import ChargePopUp from "./ChargePopUp";

function Receipt({ choosedProduct, subTotal, onClearOrder }) {
  const tax = Number(subTotal) * 0.08;
  const total = Number(subTotal + tax);

  const [showForm, setShowForm] = useState(false);
  

  return (
    <div className="h-fit w-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Order summary</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">Order #208</h1>
        </div>
        <button
          type="button"
          className="rounded-lg border border-stone-200 px-3 py-2 text-sm font-medium text-stone-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          onClick={onClearOrder}
        >
          Clear
        </button>
      </header>

      <div className="mt-5 grid grid-cols-2 rounded-xl bg-stone-100 p-1">
        <button
          type="button"
          className="rounded-lg bg-white py-2.5 text-sm font-semibold text-stone-900 shadow-sm"
        >
          Dine in
        </button>
        <button
          type="button"
          className="rounded-lg py-2.5 text-sm font-medium text-stone-500"
        >
          Takeaway
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-stone-800">Items</h2>
        <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
          {choosedProduct.length === 0 ? (
            <div className="rounded-xl border border-dashed border-stone-200 px-4 py-8 text-center">
              <p className="text-sm font-medium text-stone-600">No items yet</p>
              <p className="mt-1 text-xs text-stone-400">Add products to start an order.</p>
            </div>
          ) : (
            choosedProduct.map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-3 rounded-xl bg-stone-50 px-4 py-3">
                {item.image?<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                  <img src={item.image} alt={item.productName} className="h-full w-full object-cover"/>
                </div> : 

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                  <img src={`https://placehold.co/600x400/orange/white?text=${item.productName}`} alt={item.productName} className="h-full w-full object-cover"/>
                </div>
                }
                
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-stone-800">{item.productName}</p>
                  <p className="mt-0.5 text-xs text-stone-400">Product</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-stone-900">Rs. {item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-6 space-y-3 border-t border-stone-100 pt-4 text-sm">
        <div className="flex justify-between text-stone-500">
          <span>Subtotal</span>
          <span>{`Rs. ${subTotal}.00`}</span> 
        </div>
        <div className="flex justify-between text-stone-500">
          <span>Tax (8%)</span>
          <span>{`Rs. ${tax.toFixed(2)}`}</span>
        </div>
        <div className="flex items-center justify-between border-t border-stone-200 pt-4 text-stone-900">
          <span className="text-lg font-bold">Total</span>
          <span className="text-xl font-bold">{`Rs. ${total}`}</span>
        </div>
      </div>

      <button type="button" className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white opacity-50" onClick={()=> setShowForm(true)} > Charge </button>
      <ChargePopUp showForm = {showForm} setShowForm = {setShowForm} total={total}/>
    </div>

    
  );
}

export default Receipt;