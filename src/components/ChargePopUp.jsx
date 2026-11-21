function ChargePopUp(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/50 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-title"
        className="w-full max-w-[550px] rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
      >
        <h2 id="payment-title" className="text-2xl font-bold text-stone-900">
          Take payment
        </h2>
        <p className="mt-4 text-5xl font-bold tracking-tight text-stone-900">
          Rs. 20.52
        </p>

        <div className="mt-8 grid grid-cols-2 rounded-2xl bg-stone-100 p-1">
          <button
            type="button"
            className="rounded-xl bg-white py-3 text-base font-semibold text-stone-900 shadow-sm"
          >
            Cash
          </button>
          <button
            type="button"
            className="rounded-xl py-3 text-base font-medium text-stone-500"
          >
            Card
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 font-medium text-stone-800"
          >
            Exact
          </button>
          <button
            type="button"
            className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 font-medium text-stone-800"
          >
            Rs. 50
          </button>
        </div>

        <label htmlFor="cash-received" className="sr-only">
          Cash received
        </label>
        <input
          id="cash-received"
          type="number"
          inputMode="decimal"
          placeholder="Cash received"
          className="mt-4 h-[70px] w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 text-2xl text-stone-900 outline-none placeholder:text-stone-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <p className="mt-4 text-base text-stone-700">
          Enter the amount received.
        </p>

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-3">
          <button
            type="button"
            className="rounded-2xl border border-stone-200 px-5 py-4 font-semibold text-stone-800"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-2xl bg-orange-500 px-5 py-4 font-semibold text-white"
          >
            Complete sale
          </button>
        </div>
      </section>
    </div>
  );
}
export default ChargePopUp