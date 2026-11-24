function ViewDetailsModal({ showModal, setShowModal, order, currentDate, currentTime }) {
    if (!showModal || !order) return null;

    const formattedOrderNo = order.orderNo
        ? (Number(order.orderNo) < 10 ? `#ORD - 00${order.orderNo}` : `#ORD - ${order.orderNo}`)
        : "#ORD - ---";

    const displayDate = order.date || currentDate || "Today";
    const displayTime = order.time || currentTime || "";
    const itemsList = order.productNames || order.productName || order.items || "No items recorded";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-950/40 p-4 backdrop-blur-[2px]">
            <div className="my-auto w-full max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl transition-all sm:p-7">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-stone-100 pb-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                            Order Summary
                        </span>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-stone-900">
                            {formattedOrderNo}
                        </h2>
                        <p className="mt-0.5 text-xs text-stone-400">
                            {displayDate} {displayTime ? `• ${displayTime}` : ""}
                        </p>
                    </div>
                    <button
                        type="button"
                        aria-label="Close details"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-colors duration-150 hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 active:scale-[0.97]"
                        onClick={() => setShowModal(false)}
                    >
                        ✕
                    </button>
                </div>

                {/* Badges / Quick info */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {/* Status Badge */}
                    {order.status === "Preparing" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-600/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                            Preparing
                        </span>
                    ) : order.status === "Cancelled" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-600/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                            Cancelled
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            {order.status || "Completed"}
                        </span>
                    )}

                    {/* Dine Mode Badge */}
                    <span className="inline-flex items-center rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
                        {order.dineMode || "Dine In"}
                    </span>

                    {/* Payment Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 ring-1 ring-stone-200/70">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        {order.paymentMethod || "Cash"}
                    </span>
                </div>

                {/* Ordered Items */}
                <div className="mt-5 rounded-2xl bg-stone-50 p-4 border border-stone-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                        Ordered Items
                    </p>
                    <p className="mt-2 text-sm font-medium text-stone-800 leading-relaxed">
                        {itemsList}
                    </p>
                </div>

                {/* Amount / Total breakdown */}
                <div className="mt-5 space-y-2.5 border-t border-stone-100 pt-4 text-sm">
                    <div className="flex justify-between text-stone-500 text-xs">
                        <span>Payment Method</span>
                        <span className="font-medium text-stone-800">{order.paymentMethod || "Cash"}</span>
                    </div>
                    <div className="flex justify-between text-stone-500 text-xs">
                        <span>Service Type</span>
                        <span className="font-medium text-stone-800">{order.dineMode || "Dine In"}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-stone-200/80 pt-3">
                        <span className="text-base font-bold text-stone-900">Total Amount</span>
                        <span className="text-xl font-extrabold text-stone-900">
                            Rs {order.total || "0.00"}
                        </span>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    type="button"
                    className="mt-6 w-full cursor-pointer rounded-xl border-0 bg-stone-900 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-800 active:scale-[0.97]"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ViewDetailsModal;
