function PaymentSuccessPopUp({ showSuccessForm, setShowSuccessForm, total, setShowForm, dineMode, onClearOrder, choosedProduct, orderNo, handleOrderId, paymentMethod }) {
    return (
        <>
            {showSuccessForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-950/40 p-3 backdrop-blur-[2px] sm:p-5">
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-title"
                        className="my-auto w-full max-w-[560px] rounded-[28px] bg-white p-5 text-center shadow-[0_24px_80px_-20px_rgba(36,28,21,0.5)] sm:p-6"
                    >
                        {/* Check badge */}
                        <div className="mx-auto flex h-[85px] w-[85px] items-center justify-center rounded-full bg-[#2fa06b]">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-11 w-11"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M5 12.5l4.5 4.5L19 7" />
                            </svg>
                        </div>

                        <h2
                            id="success-title"
                            className="mt-5 text-[26px] font-bold tracking-tight text-[#241c15]"
                        >
                            {`Rs. ${total}`}
                        </h2>

                        <p className="mt-5 text-[17px] text-[#241c15]">
                            Order #{orderNo} · {dineMode} · {paymentMethod}
                        </p>

                        <p className="mt-4 text-[17px] text-[#8a8478]">
                            {choosedProduct.length} item sold. Receipt sent to the printer.
                        </p>

                        <button type="button" className="mt-6 w-full cursor-pointer rounded-2xl border-0 bg-[#f25c2e] px-5 py-[18px] text-[17px] font-bold text-white transition-colors duration-200 hover:bg-[#e04f22] hover:shadow-lg active:scale-[0.97] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200" onClick={()=>{setShowSuccessForm(false); setShowForm(false); onClearOrder(false); handleOrderId()}}>Start new order</button>
                    </section>
                </div>
            )}
        </>
    );
}

export default PaymentSuccessPopUp;