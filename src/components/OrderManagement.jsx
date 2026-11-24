import { useState } from "react";
import BinButton from "./BinButton";
import EditButton from "./EditButton";

// localStorage.clear();
function OrderManagement({ order, onDeleteOrder }) {

    

    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const currentTime = new Date().toLocaleTimeString();

    const [currentPage, setCurrentPage] = useState(1);

    const ordersPerPage = 5;

    const totalPages = Math.ceil(
        order.length / ordersPerPage
    );

    const startIndex = (currentPage - 1) * ordersPerPage;

    const currentOrders = order.slice(
        startIndex,
        startIndex + ordersPerPage
    );

    


    return (
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-stone-600">
                    <thead className="border-b border-stone-200 bg-stone-50/80 text-xs font-semibold uppercase tracking-wider text-stone-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Date & Time
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Items
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Payment
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-4 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white">
                        {currentOrders.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="px-4 py-12 text-center">
                                    <div className="mx-auto max-w-sm rounded-xl border border-dashed border-stone-200 px-4 py-8 text-center">
                                        <p className="text-sm font-medium text-stone-600">No orders yet</p>
                                        <p className="mt-1 text-xs text-stone-400">Add products to start an order.</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            currentOrders.map((item, index) => (

                            <tr key={item.orderNo || index} className="transition-colors duration-150 hover:bg-stone-50/70">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {Number(item.orderNo < 10) ? (
                                        <span className="font-semibold text-stone-900">#ORD - 00{item.orderNo}</span>
                                    ) : (
                                        <span className="font-semibold text-stone-900">#ORD - {item.orderNo}</span>
                                    )}

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="font-medium text-stone-800">{currentDate}</p>
                                    <p className="text-xs text-stone-400">{currentTime}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
                                        {item.dineMode}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-medium text-stone-800">{item.productNames}</p>
                                    <p className="text-xs text-stone-400"></p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                        {item.paymentMethod}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="font-semibold text-stone-900">Rs {item.total}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-3">
                                        <EditButton />
                                        <BinButton currentOrders={currentOrders} onClick={()=>onDeleteOrder(item.orderNo)}/>
                                    </div>
                                </td>
                            </tr>

                        ))
                        )}

                    </tbody>
                </table>
            </div>

            {/* Pagination UI */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-200 bg-stone-50/70 px-6 py-4 sm:flex-row text-xs text-stone-500">
                <p>
                    Showing <span className="font-semibold text-stone-800">{order.length === 0 ? 0 : startIndex + 1}</span> to{" "}
                    <span className="font-semibold text-stone-800">
                        {Math.min(startIndex + ordersPerPage, order.length)}
                    </span>{" "}
                    of <span className="font-semibold text-stone-800">{order.length}</span> orders
                </p>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="cursor-pointer rounded-lg border border-stone-200 bg-white px-3 py-1.5 font-medium text-stone-600 transition-colors duration-150 hover:bg-stone-50 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.97]"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage <= 1}
                    >
                        Previous
                    </button>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150
                            ${currentPage === 1
                                    ? "bg-orange-500 text-white shadow-xs"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </button>
                        <button
                            type="button"
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150
                            ${currentPage === 2
                                    ? "bg-orange-500 text-white shadow-xs"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setCurrentPage(2)}
                        >
                            2
                        </button>
                        <button
                            type="button"
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150
                            ${currentPage === 3
                                    ? "bg-orange-500 text-white shadow-xs"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setCurrentPage(3)}
                        >
                            3
                        </button>
                    </div>

                    <button
                        type="button"
                        className="cursor-pointer rounded-lg border border-stone-200 bg-white px-3 py-1.5 font-medium text-stone-600 transition-colors duration-150 hover:bg-stone-50 hover:text-stone-900 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.97]"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage >= totalPages || totalPages === 0}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderManagement;
