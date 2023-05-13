import Layout from '@/components/Layout';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";

const Products = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      // console.log(response.data);
      setProductList(response.data);
    });
  }, []);
  

  return (
    <Layout>
      <Link href={`/products/new`} 
        className={`bg-blue-900 text-white py-1 px-2 rounded-md shadow-md`}
      >
        Add new product
      </Link>

      <table
        className={`basic mt-2`}
      >
        <thead>
          <tr>
            <td>Product Name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            productList.map((product) => (
              <tr key={product?._id}>
                <td>{product.title}</td>
                <td
                  className={`space-x-2`}
                >
                  <Link
                    href={`/products/edit/` + product._id}
                    className={`flex items-center justify-center`}
                  >
                    <FaRegEdit 
                      className={`w-4 h-4`}
                    />
                    <span>
                      Edit
                    </span>
                  </Link>

                  <Link
                    href={`/products/delete/` + product._id}
                    className={`flex items-center justify-center delete`}
                  >
                    <HiOutlineTrash 
                      className={`w-4 h-4`}
                    />
                    <span>
                      Delete
                    </span>
                  </Link>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </Layout>
  )
}

export default Products;