import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {

    const router = useRouter();
    const [productInfo, setProductInfo] = useState();
    const { id } = router.query;

    useEffect(() => {
        if(!id) return;
        axios.get("/api/products?id=" + id).then(response => {
            setProductInfo(response.data);
        });    

    }, [id]); 

    function goBack() {
        router.push("/products");
    }

    async function deleteProduct() {
        await axios.delete("/api/products?id=" + id);
        goBack();
    }

    return (
        <Layout>
            <div className={`flex flex-col items-center`}>
                <h1>
                    Do You Really Want To Delete Product 
                    &nbsp;`<span
                        className={`font-serif`}
                        >
                        {productInfo?.title}
                    </span>`&nbsp;
                    ?
                </h1>
                <div className={`flex gap-1`}>
                    <button 
                        className={`btn-primary !bg-red-600 `}
                        onClick={deleteProduct}
                    >
                        YES
                    </button>
                    <button
                        onClick={goBack}
                        className={`btn-primary`}
                        >   
                        NO
                    </button>
                </div>
            </div>
        </Layout>
    );
}