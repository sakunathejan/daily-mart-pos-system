import { useState } from "react";
import BinButton from "./BinButton";
import EditButton from "./EditButton";

function CustomerManagement() {
    const [customers, setCustomers] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 5;
    const totalPages = Math.ceil(customers.length / customersPerPage);
    const startIndex = (currentPage - 1) * customersPerPage;
    const currentCustomers = customers.slice(startIndex, startIndex + customersPerPage);

    // Modals
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    // Form inputs
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("Active");

    // Delete customer
    function handleDeleteCustomer(id) {
        const updated = customers.filter(c => c.id !== id);
        setCustomers(updated);
    }

    // View customer details
    function handleViewDetails(customer) {
        setSelectedCustomer(customer);
        setShowDetailsModal(true);
    }

    // Open edit modal
    function handleOpenEdit(customer) {
        setSelectedCustomer(customer);
        setName(customer.name);
        setPhone(customer.phone);
        setEmail(customer.email);
        setStatus(customer.status);
        setShowEditModal(true);
    }

    // Save edited customer
    function handleSaveEdit() {
        if (!name.trim()) return;

        const updated = customers.map(c => {
            if (c.id === selectedCustomer.id) {
                return {
                    ...c,
                    name: name,
                    phone: phone,
                    email: email,
                    status: status
                };
            }
            return c;
        });

        setCustomers(updated);
        setShowEditModal(false);
    }

    // Open add modal
    function handleOpenAdd() {
        setName("");
        setPhone("");
        setEmail("");
        setStatus("Active");
        setShowAddModal(true);
    }

    // Add new customer
    function handleAddCustomer() {
        if (!name.trim()) return;

        const nextNumber = customers.length + 1;
        const newId = nextNumber < 10 ? `CUST-00${nextNumber}` : `CUST-0${nextNumber}`;

        const newCustomer = {
            id: newId,
            name: name,
            phone: phone || "N/A",
            email: email || "N/A",
            totalOrders: 0,
            totalSpent: "0",
            status: status
        };

        setCustomers([...customers, newCustomer]);
        setShowAddModal(false);
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            
            {/* Table Header Bar */}
            <div className="flex flex-col gap-3 border-b border-stone-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-stone-900">Customer List</h2>
                    <p className="text-xs text-stone-400">Manage your customers and track their order histories.</p>
                </div>
                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.97]"
                    onClick={handleOpenAdd}
                >
                    + Add Customer
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-stone-600">
                    <thead className="border-b border-stone-200 bg-stone-50/80 text-xs font-semibold uppercase tracking-wider text-stone-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">Customer ID</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Phone</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Orders</th>
                            <th scope="col" className="px-6 py-4">Total Spent</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white">
                        {currentCustomers.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="px-4 py-12 text-center">
                                    <div className="mx-auto max-w-sm rounded-xl border border-dashed border-stone-200 px-4 py-8 text-center">
                                        <p className="text-sm font-medium text-stone-600">No customers yet</p>
                                        <p className="mt-1 text-xs text-stone-400">Click Add Customer to register your first customer.</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            currentCustomers.map((customer) => (
                                <tr key={customer.id} className="transition-colors duration-150 hover:bg-stone-50/70">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-semibold text-stone-900">{customer.id}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium text-stone-900">{customer.name}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-stone-600">
                                        {customer.phone}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-stone-600">
                                        {customer.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="rounded-lg bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
                                            {customer.totalOrders} orders
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-stone-900">
                                        Rs {customer.totalSpent}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {customer.status === "VIP" ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                                                VIP
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                Active
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex items-center justify-end gap-2.5">
                                            <button
                                                type="button"
                                                className="cursor-pointer rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors duration-150 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-[0.97]"
                                                onClick={() => handleViewDetails(customer)}
                                            >
                                                Details
                                            </button>
                                            <EditButton onClick={() => handleOpenEdit(customer)} />
                                            <BinButton onClick={() => handleDeleteCustomer(customer.id)} />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-200 bg-stone-50/70 px-6 py-4 sm:flex-row text-xs text-stone-500">
                <p>
                    Showing <span className="font-semibold text-stone-800">{customers.length === 0 ? 0 : startIndex + 1}</span> to{" "}
                    <span className="font-semibold text-stone-800">
                        {Math.min(startIndex + customersPerPage, customers.length)}
                    </span>{" "}
                    of <span className="font-semibold text-stone-800">{customers.length}</span> customers
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
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150 ${
                                currentPage === 1
                                    ? "bg-orange-500 text-white shadow-xs"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </button>
                        <button
                            type="button"
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150 ${
                                currentPage === 2
                                    ? "bg-orange-500 text-white shadow-xs"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setCurrentPage(2)}
                        >
                            2
                        </button>
                        <button
                            type="button"
                            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold transition-colors duration-150 ${
                                currentPage === 3
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

            {/* View Details Modal */}
            {showDetailsModal && selectedCustomer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4">
                    <div className="my-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between border-b border-stone-200 pb-3">
                            <h1 className="text-xl font-bold text-stone-900">Customer Details</h1>
                            <button
                                type="button"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-stone-100"
                                onClick={() => setShowDetailsModal(false)}
                            >
                                x
                            </button>
                        </div>

                        <div className="space-y-3 text-sm text-stone-700">
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Customer ID:</span>
                                <span className="font-semibold text-stone-900">{selectedCustomer.id}</span>
                            </div>
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Name:</span>
                                <span className="font-semibold text-stone-900">{selectedCustomer.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Phone:</span>
                                <span>{selectedCustomer.phone}</span>
                            </div>
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Email:</span>
                                <span>{selectedCustomer.email}</span>
                            </div>
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Total Orders:</span>
                                <span className="font-medium text-stone-800">{selectedCustomer.totalOrders}</span>
                            </div>
                            <div className="flex justify-between border-b border-stone-100 py-2">
                                <span className="text-stone-500">Status:</span>
                                <span className={`font-semibold ${selectedCustomer.status === "VIP" ? "text-orange-600" : "text-emerald-600"}`}>
                                    {selectedCustomer.status}
                                </span>
                            </div>
                            <div className="flex justify-between pt-3 text-base">
                                <span className="font-bold text-stone-900">Total Spent:</span>
                                <span className="text-xl font-bold text-stone-900">Rs {selectedCustomer.totalSpent}</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="mt-6 h-11 w-full cursor-pointer rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 active:scale-[0.97]"
                            onClick={() => setShowDetailsModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Edit Customer Modal */}
            {showEditModal && selectedCustomer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4">
                    <div className="my-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between border-b border-stone-200 pb-3">
                            <h1 className="text-xl font-bold text-stone-900">Edit Customer</h1>
                            <button
                                type="button"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-stone-100"
                                onClick={() => setShowEditModal(false)}
                            >
                                x
                            </button>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-stone-700">
                                Customer ID
                                <input
                                    type="text"
                                    value={selectedCustomer.id}
                                    disabled
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-stone-50 px-3 text-stone-500"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Full Name
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Phone Number
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Email
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Status
                                <div className="mt-2 flex gap-2">
                                    <button
                                        type="button"
                                        className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition ${
                                            status === "Active"
                                                ? "bg-emerald-600 text-white"
                                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                        }`}
                                        onClick={() => setStatus("Active")}
                                    >
                                        Active
                                    </button>
                                    <button
                                        type="button"
                                        className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition ${
                                            status === "VIP"
                                                ? "bg-orange-500 text-white"
                                                : "bg-orange-50 text-orange-700 border border-orange-200"
                                        }`}
                                        onClick={() => setStatus("VIP")}
                                    >
                                        VIP
                                    </button>
                                </div>
                            </label>

                            <button
                                type="button"
                                className="mt-2 h-11 w-full cursor-pointer rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 active:scale-[0.97]"
                                onClick={handleSaveEdit}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Customer Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4">
                    <div className="my-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between border-b border-stone-200 pb-3">
                            <h1 className="text-xl font-bold text-stone-900">Add Customer</h1>
                            <button
                                type="button"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:bg-stone-100"
                                onClick={() => setShowAddModal(false)}
                            >
                                x
                            </button>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-stone-700">
                                Full Name
                                <input
                                    type="text"
                                    placeholder="e.g. Kasun Perera"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Phone Number
                                <input
                                    type="text"
                                    placeholder="e.g. +94 77 123 4567"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Email Address
                                <input
                                    type="email"
                                    placeholder="e.g. customer@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
                                />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Status
                                <div className="mt-2 flex gap-2">
                                    <button
                                        type="button"
                                        className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition ${
                                            status === "Active"
                                                ? "bg-emerald-600 text-white"
                                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                        }`}
                                        onClick={() => setStatus("Active")}
                                    >
                                        Active
                                    </button>
                                    <button
                                        type="button"
                                        className={`cursor-pointer rounded-lg px-4 py-2 text-xs font-semibold transition ${
                                            status === "VIP"
                                                ? "bg-orange-500 text-white"
                                                : "bg-orange-50 text-orange-700 border border-orange-200"
                                        }`}
                                        onClick={() => setStatus("VIP")}
                                    >
                                        VIP
                                    </button>
                                </div>
                            </label>

                            <button
                                type="button"
                                className="mt-2 h-11 w-full cursor-pointer rounded-xl bg-orange-500 font-semibold text-white hover:bg-orange-600 active:scale-[0.97]"
                                onClick={handleAddCustomer}
                            >
                                Add Customer
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default CustomerManagement;
