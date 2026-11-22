import { useState } from "react";
import PaymentSuccessPopUp from "./PaymentSuccessPopUp";
import { toast } from "sonner";

function ChargePopUp({showForm, setShowForm, total, dineMode, onClearOrder, choosedProduct, orderNo, handleOrderId}) {

    const [showSuccessForm, setShowSuccessForm] = useState(false);
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    
    const change = Number(amount) - Number(total);

    function handlePayment(event){
        setAmount(event.target.value);
    }

    function handleCompleteSale() {
        if (paymentMethod === "Cash" && amount.trim() === "") {
            toast.warning("Enter the amount received before completing the sale.");
            return;
        }else if(paymentMethod === "Cash" && change < 0){            
            toast.warning("Balance cant be less than the total");
            return;
        }
        
        setAmount("")
        setShowSuccessForm(true);
        
    }

    return (
        <>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-950/40 p-3 backdrop-blur-[2px] sm:p-5">
                    <section role="dialog" aria-modal="true" aria-labelledby="payment-title" className="group my-auto w-full max-w-[560px] rounded-[28px] bg-white p-5 shadow-[0_24px_80px_-20px_rgba(36,28,21,0.5)] sm:p-7" >
                        <h2 id="payment-title" className="text-2xl font-bold tracking-tight text-[#241c15]" >
                            Take payment
                        </h2>
                        <p className="mt-4 text-[52px] font-extrabold leading-none tracking-tight text-[#241c15]">{`Rs. ${total}`}</p>

                        {/* Cash / Card toggle */}
                        <div className="mt-8 grid grid-cols-2 rounded-[18px] border border-[#ece7dc] bg-[#f6f3ec] p-[5px]">
                            <input type="radio" name="payment-method" id="t-cash" className="sr-only" defaultChecked onChange={() => setPaymentMethod("Cash")} />
                            <input type="radio" name="payment-method" id="t-card" className="sr-only" onChange={() => setPaymentMethod("Card")} />
                            <label htmlFor="t-cash" className="cursor-pointer rounded-[14px] py-3.5 text-center text-[17px] font-medium text-[#8a8478] transition hover:bg-white/60 active:scale-[0.98] group-has-[#t-cash:checked]:bg-white group-has-[#t-cash:checked]:text-[#241c15] group-has-[#t-cash:checked]:shadow-[0_1px_3px_rgba(36,28,21,0.15)]" >
                                Cash
                            </label>
                            <label htmlFor="t-card" className="cursor-pointer rounded-[14px] py-3.5 text-center text-[17px] font-medium text-[#8a8478] transition hover:bg-white/60 active:scale-[0.98] group-has-[#t-card:checked]:bg-white group-has-[#t-card:checked]:text-[#241c15] group-has-[#t-card:checked]:shadow-[0_1px_3px_rgba(36,28,21,0.15)]" >
                                Card
                            </label>
                        </div>

                        {/* Cash panel */}
                        <div className="group-has-[#t-card:checked]:hidden">
                            <div className="mt-4 flex gap-2.5">
                                <button type="button" className="cursor-pointer rounded-xl border border-[#ece7dc] bg-[#f6f3ec] px-4 py-2.5 text-[17px] font-semibold text-[#241c15] transition hover:bg-[#efeadf] active:scale-[0.97]" onClick={() => setAmount(String(total))}>
                                    Exact
                                </button>
                                <button type="button" className="cursor-pointer rounded-xl border border-[#ece7dc] bg-[#f6f3ec] px-4 py-2.5 text-[17px] font-semibold text-[#241c15] transition hover:bg-[#efeadf] active:scale-[0.97]" onClick={() => setAmount("50")}>
                                    $50
                                </button>
                            </div>

                            <input id="cash-received" type="text" inputMode="decimal" autoComplete="off" value={amount} placeholder="Cash received" className="mt-4 h-[70px] w-full rounded-2xl border border-[#ece7dc] bg-[#f6f3ec] px-5 text-[28px] text-[#241c15] outline-none placeholder:text-[#77726a] focus:border-orange-400 focus:ring-4 focus:ring-orange-100" onChange={handlePayment} />
                            { amount !== "" && Number(amount) >= Number(total)? (
                                <p>Change due: {change.toFixed(2)}</p>
                            ):<p>Change owed: {change.toFixed(2)}</p>}
                            <p className="mt-4 text-[17px] text-[#3b332b]">
                                Enter the amount received.
                            </p>
                        </div>

                        {/* Card panel */}
                        <div className="hidden group-has-[#t-card:checked]:block">
                            <p className="mb-6 mt-8 text-[17px] text-[#3b332b]">
                                Charge the card on the terminal, then complete the sale.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 grid grid-cols-[auto_1fr] gap-3">
                            <button type="button" className="cursor-pointer rounded-2xl border border-[#ece7dc] bg-white px-6 py-4 text-[17px] font-semibold text-[#241c15] transition hover:bg-[#faf8f3] active:scale-[0.97]" onClick={()=>setShowForm(false)} >
                                Cancel
                            </button>
                            <button type="button" className="cursor-pointer rounded-2xl border-0 bg-[#f9bdad] px-5 py-4 text-[17px] font-bold text-white transition hover:bg-[#f6ad99] active:scale-[0.97] group-has-[#t-card:checked]:bg-orange-600 group-has-[#t-card:checked]:hover:bg-orange-700" onClick={handleCompleteSale}> Complete sale </button>
                            <PaymentSuccessPopUp showSuccessForm={showSuccessForm} setShowSuccessForm={setShowSuccessForm} setShowForm={setShowForm} total={total} dineMode={dineMode} onClearOrder={onClearOrder} choosedProduct={choosedProduct} orderNo={orderNo} handleOrderId={handleOrderId} paymentMethod={paymentMethod}/>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default ChargePopUp;