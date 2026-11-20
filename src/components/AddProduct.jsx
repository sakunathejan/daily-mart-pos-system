import { useState } from "react";
import ProductMenu from "./ProductMenu";

function AddProduct() {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [product, setProduct] = useState([]);

    function handleProductName(event){
        setProductName(event.target.value);
    }

    function handleCategory(event){
        setCategory(event.target.value);
    }

    function handleDescription(event){
        setDescription(event.target.value);
    }

    function handlePrice(event){
        setPrice(event.target.value);
    }

    function addProduct(){
        const updateProduct = {productName: productName , category: category, description:description,price:price}
        setProduct(p => ([...p, updateProduct]));
    }

    return (
        <>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/30 p-4" id="addProductForm">
                    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                        <div className="mb-5 flex items-center justify-between">
                            <h1 className="text-xl font-bold text-stone-900">Add Product</h1>
                            <button
                                type="button"
                                aria-label="Close add product form"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600"
                                onClick={() => setShowForm(false)}
                            >
                                x
                            </button>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-stone-700">
                                Product Name
                                <input type="text" name="input" value={productName} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3" onChange={handleProductName} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Category
                                <input type="text" name="input" value={category} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3" onChange={handleCategory} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Description
                                <input type="text" name="input" value={description} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3" onChange={handleDescription}/>
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Price
                                <input type="text" name="input" value={price} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3" onChange={handlePrice}/>
                            </label>

                            <button type="button" className="mt-2 h-11 w-full rounded-xl bg-orange-500 font-semibold text-white cursor-pointer" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>
                </div>
            )}
            <ProductMenu product={product}/>
            <button
                type="button"
                aria-label="Add product"
                className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg sm:bottom-8 sm:right-8"
                onClick={() => setShowForm(true)}
            >
                +
            </button>
        </>
    )
}
export default AddProduct;