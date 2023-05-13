import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

const ProductForm = ({ 
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images,
}) => {
  
    const [title, setTitle] = useState(existingTitle || "");
    const [description, setDescription] = useState(existingDescription || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
  
  
    const saveProductHandler = async (e) => {
  
        e.preventDefault();
        const data = {
            title,
            description, 
            price
        };

        if(_id) {
            //update
            await axios.put("/api/products", {...data, _id})
        } else {
            //create a new product
            await axios.post('/api/products', data);
        }
        
        setGoToProducts(true);
    
    };
  
    if(goToProducts) {
      router.push("/products");
    }

    function uploadImages(ev) {
        const files = ev.target?.files;
        // files -> array
        if(files?.length > 0) {

        }
    }
  
    return (
        <form
          onSubmit={saveProductHandler}
        >
            <label className={`font-medium`}>Product Name</label>
            <input
                type={`text`}
                name={`product-name`} 
                placeholder={`Enter Product Name`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}  
                required
            />
            <label className={`font-medium`}>
                Photos
            </label>
            <div className={`mb-2`}>
                <label
                    className={`w-24 h-24 bg-gray-200 flex items-center justify-center gap-1 text-sm text-gray-500 rounded-lg cursor-pointer`}
                >   
                    <HiOutlineUpload />
                    Upload
                    <input 
                        type="file"
                        onChange={uploadImages}
                        className={`hidden `}
                    />
                </label>
                {
                    !images?.length && (
                        <div>No Photos in this product</div>
                    )
                }
            </div>
            <label className={`font-medium`}>Describe the Product</label>
            <textarea 
                placeholder={`Description`} 
                name={`product-descp`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}  
                required
            ></textarea>
          <label className={`font-medium`}>Price in (INR)</label>
          <input 
            type="text" 
            placeholder={`price`} 
            name={`product-price`} 
            value={price}
            onChange={(e) => setPrice(e.target.value)}  
            required
            />
          <button 
            className={`btn-primary`}
            type={`submit`}  
            >
            Save
          </button>
        </form>
    )
}

export default ProductForm;