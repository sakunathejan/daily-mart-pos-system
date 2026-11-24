function ViewDetailsModal({ showModal, setShowModal, order, currentDate, currentTime }) {
    if (!showModal || !order) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4">
            <div className="my-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                
                {/* Header */}
                <div className="mb-5 flex items-center justify-between border-b border-stone-200 pb-3">
                    <h1 className="text-xl font-bold text-stone-900">
                        Order Details
                    </h1>
                    <button
                        type="button"
                        aria-label="Close details"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-200 hover:bg-stone-100"
                        onClick={() => setShowModal(false)}
                    >
                        x
                    </button>
                </div>

                {/* Order Information */}
                <div className="space-y-3 text-sm text-stone-700">
                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Order ID:</span>
                        <span className="font-semibold text-stone-900">#ORD - {order.orderNo}</span>
                    </div>

                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Date & Time:</span>
                        <span>{order.date || currentDate} - {order.time || currentTime}</span>
                    </div>

                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Type:</span>
                        <span className="rounded bg-stone-100 px-2 py-0.5 font-medium text-stone-800">{order.dineMode}</span>
                    </div>

                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Items:</span>
                        <span className="max-w-[220px] text-right font-medium text-stone-800">{order.productNames}</span>
                    </div>

                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Payment:</span>
                        <span>{order.paymentMethod}</span>
                    </div>

                    <div className="flex justify-between border-b border-stone-100 py-2">
                        <span className="font-medium text-stone-500">Status:</span>
                        <span className="font-semibold text-emerald-600">{order.status || "Completed"}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 text-base">
                        <span className="font-bold text-stone-900">Total:</span>
                        <span className="text-xl font-bold text-stone-900">Rs {order.total}</span>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    type="button"
                    className="mt-6 h-11 w-full cursor-pointer rounded-xl bg-orange-500 font-semibold text-white transition-colors duration-200 hover:bg-orange-600 active:scale-[0.97]"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ViewDetailsModal;
