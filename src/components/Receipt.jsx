function Receipt() {
  return (
    <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5 lg:sticky lg:top-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-stone-900">Order #208</h1>
        <button
          type="button"
          className="rounded-full border border-stone-300 px-4 py-2 text-sm"
        >
          Clear
        </button>
      </header>

      <div className="mt-4 grid grid-cols-2 rounded-lg bg-stone-100 p-1">
        <button
          type="button"
          className="rounded-md bg-white py-2 text-sm font-medium text-stone-900"
        >
          Dine in
        </button>
        <button
          type="button"
          className="rounded-md py-2 text-sm text-stone-500"
        >
          Takeaway
        </button>
      </div>

      <div className="flex h-48 flex-col items-center justify-center text-center">
        <p className="text-stone-700">Your order is empty.</p>
        <p className="mt-1 text-sm text-stone-500">Tap + on any item to add it.</p>
      </div>

      <div className="space-y-2 text-stone-500">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>$0.00</span>
        </div>
        <div className="flex items-center justify-between border-t border-stone-200 pt-3 text-stone-900">
          <span className="text-2xl font-bold">Total</span>
          <span className="text-2xl font-bold">$0.00</span>
        </div>
      </div>

      <button
        type="button"
        disabled
        className="mt-5 w-full rounded-xl bg-stone-200 px-4 py-3 font-semibold text-stone-500"
      >
        Charge
      </button>
    </aside>
  );
}

export default Receipt;