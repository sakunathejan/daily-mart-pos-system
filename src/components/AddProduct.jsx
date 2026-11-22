import { useState } from "react";
import ProductMenu from "./ProductMenu";
import { toast } from "sonner";

function AddProduct({ onChooseProduct, subTotalProductsPrice, searched }) {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [product, setProduct] = useState([
        {
            productName: "Milk",
            category: "Diary",
            description: "This is milk",
            price: 1500,
            image: ""
        },
        {
            productName: "Yogurt",
            category: "Dairy",
            description: "Fresh creamy yogurt",
            price: 450,
            image: ""
        },
        {
            productName: "Cheese",
            category: "Dairy",
            description: "Rich cheddar cheese",
            price: 1200,
            image: ""
        },
    ]);

    function handleProductName(event) {
        setProductName(event.target.value);
    }

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    function handleDescription(event) {
        setDescription(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);
    }

    function handleImage(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];

            setImage(URL.createObjectURL(file));
        }
    }

    function addProduct() {
        const updateProduct = { productName: productName, category: category, description: description, price: price, image: image }
        setProduct(p => ([...p, updateProduct]));
        setProductName("")
        setCategory("")
        setDescription("")
        setPrice("")
        setImage(URL.createObjectURL(""))

    }

    function handleFormValidation() {
        const convertedNo = Number(price);        
        
        if (productName === "" || category === "" || price === "") {
            toast.warning("Field cannot be blank");
            return;

        }else if(Number.isNaN(convertedNo)){
            toast.warning("Price can only be numbers");
            return;
        }

        addProduct()
    }


    return (
        <>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-900/30 p-4" id="addProductForm">
                    <div className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <h1 className="text-xl font-bold text-stone-900">Add Product</h1>
                            <button
                                type="button"
                                aria-label="Close add product form"
                                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-200 hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 active:scale-[0.97]"
                                onClick={() => setShowForm(false)}
                            >
                                x
                            </button>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-stone-700">
                                Product Name
                                <input type="text" name="input" value={productName} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" onChange={handleProductName} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Category
                                <input type="text" name="input" value={category} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" onChange={handleCategory} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Description
                                <input type="text" name="input" value={description} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" onChange={handleDescription} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Price
                                <input type="text" name="input" value={price} className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 transition-colors duration-200 hover:border-stone-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100" onChange={handlePrice} />
                            </label>

                            <label className="block text-sm font-medium text-stone-700">
                                Product image
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mt-1 block w-full cursor-pointer rounded-lg border border-dashed border-stone-300 bg-stone-50 text-sm text-stone-500 transition hover:bg-stone-100 file:mr-4 file:cursor-pointer file:border-0 file:bg-orange-100 file:px-4 file:py-3 file:font-semibold file:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    onChange={handleImage}
                                />
                            </label>

                            <button type="button" className="mt-2 h-11 w-full cursor-pointer rounded-xl border-0 bg-orange-500 font-semibold text-white transition-colors duration-200 hover:bg-orange-600 hover:shadow-md active:scale-[0.97]" onClick={handleFormValidation}>Add Product</button>
                        </div>
                    </div>
                </div>
            )}
            <ProductMenu product={product} onChooseProduct={onChooseProduct} subTotalProductsPrice={subTotalProductsPrice} searched={searched} />
            <button
                type="button"
                aria-label="Add product"
                className="fixed bottom-4 right-4 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-0 bg-orange-500 text-2xl text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-orange-600 hover:shadow-xl active:scale-[0.97] sm:bottom-6 sm:right-6"
                onClick={() => setShowForm(true)}
            >
                +
            </button>
        </>
    )
}
export default AddProduct;