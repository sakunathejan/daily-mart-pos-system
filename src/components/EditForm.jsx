import { useState, useEffect } from "react";

function EditForm({ showEditForm, setShowEditForm, editItem, currentDate, currentTime, onUpdateOrder }) {
    const [dineMode, setdineMode] = useState("Dine In");
    const [items, setItems] = useState("");
    const [status, setStatus] = useState("Completed");

    useEffect(() => {
        if (editItem && editItem.length > 0) {
            const current = editItem[0];
            setdineMode(current.dineMode || "Dine In");
            setItems(current.productNames || current.productName || current.items || "");
            setStatus(current.status || "Completed");
        }
    }, [editItem]);

    function handleSave() {
        if (!editItem || editItem.length === 0) return;
        const current = editItem[0];

        const updatedOrder = {
            ...current,
            dineMode: dineMode,
            productNames: items,
            status: status
        };

        if (onUpdateOrder) {
            onUpdateOrder(updatedOrder);
        }

        setShowEditForm(false);
    }

    return (
        <>
            {showEditForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4" id="editForm">
                    <div className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <h1 className="text-xl font-bold text-stone-900">Edit Order</h1>
                            <button
                                type="button"
                                aria-label="Close edit form"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-200 hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 active:scale-[0.97]"
                                onClick={() => setShowEditForm(false)}
                            >
                                x
                            </button>
                        </div>

                        {editItem && editItem.map((item, index) => (
                            <div key={item.orderNo || index} className="space-y-4">
                                <label className="block text-sm font-medium text-stone-700">
                                    Order No
                                    <input
                                        type="text"
                                        name="input"
                                        value={item.orderNo ? (Number(item.orderNo) < 10 ? `#ORD - 00${item.orderNo}` : `#ORD - ${item.orderNo}`) : ""}
                                        className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-stone-50 px-3 text-stone-500"
                                        disabled
                                    />
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Date & Time
                                    <input
                                        type="text"
                                        name="input"
                                        value={currentDate ? `${currentDate} ${currentTime || ''}` : ""}
                                        className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-stone-50 px-3 text-stone-500"
                                        disabled
                                    />
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Type
                                    <div className="mt-2 grid grid-cols-2 gap-1 rounded-xl border border-stone-200/70 bg-stone-100 p-1">
                                        <button
                                            type="button"
                                            className={`cursor-pointer rounded-lg border border-stone-200/70 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 active:scale-[0.97] ${dineMode === "Dine In"
                                                ? "bg-white text-stone-900 shadow-sm ring-1 ring-stone-200/70 hover:bg-stone-50"
                                                : "text-stone-500 hover:bg-white/70 hover:text-stone-800"
                                                }`}
                                            onClick={() => setdineMode("Dine In")}
                                        >
                                            Dine in
                                        </button>

                                        <button
                                            type="button"
                                            className={`cursor-pointer rounded-lg border border-stone-200/70 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 active:scale-[0.97] ${dineMode === "Takeaway"
                                                ? "bg-white text-stone-900 shadow-sm ring-1 ring-stone-200/70 hover:bg-stone-50"
                                                : "text-stone-500 hover:bg-white/70 hover:text-stone-800"
                                                }`}
                                            onClick={() => setdineMode("Takeaway")}
                                        >
                                            Takeaway
                                        </button>
                                    </div>
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Items
                                    <input
                                        type="text"
                                        name="input"
                                        value={items}
                                        onChange={(e) => setItems(e.target.value)}
                                        className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                    />
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Payment Type
                                    <input
                                        type="text"
                                        name="input"
                                        value={item.paymentMethod || item.payment || ""}
                                        className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-stone-50 px-3 text-stone-500"
                                        disabled
                                    />
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Total
                                    <input
                                        type="text"
                                        name="input"
                                        value={item.total ? `Rs ${item.total}` : ""}
                                        className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-stone-50 px-3 text-stone-500"
                                        disabled
                                    />
                                </label>

                                <label className="block text-sm font-medium text-stone-700">
                                    Status
                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setStatus("Completed")}
                                            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${status === "Completed"
                                                ? "bg-emerald-600 text-white shadow-xs"
                                                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 ring-1 ring-inset ring-emerald-600/20"
                                                }`}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${status === "Completed" ? "bg-white" : "bg-emerald-500"}`}></span>
                                            Completed
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setStatus("Preparing")}
                                            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${status === "Preparing"
                                                ? "bg-amber-600 text-white shadow-xs"
                                                : "bg-amber-50 text-amber-700 hover:bg-amber-100 ring-1 ring-inset ring-amber-600/20"
                                                }`}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${status === "Preparing" ? "bg-white" : "bg-amber-500"}`}></span>
                                            Preparing
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setStatus("Cancelled")}
                                            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${status === "Cancelled"
                                                ? "bg-rose-600 text-white shadow-xs"
                                                : "bg-rose-50 text-rose-700 hover:bg-rose-100 ring-1 ring-inset ring-rose-600/20"
                                                }`}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${status === "Cancelled" ? "bg-white" : "bg-rose-500"}`}></span>
                                            Cancelled
                                        </button>
                                    </div>
                                </label>

                                <button
                                    type="button"
                                    className="mt-2 h-11 w-full cursor-pointer rounded-xl border-0 bg-orange-500 font-semibold text-white transition-colors duration-200 hover:bg-orange-600 hover:shadow-md active:scale-[0.97]"
                                    onClick={handleSave}
                                >
                                    Save Changes
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default EditForm;
