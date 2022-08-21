import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Card_order() {
  const [product, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const resp = await fetch("http://localhost:1337/api/products?populate=p_img");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>No profile data</p>;

  return (
    <>
      {product.data.map((product) => (
        <>
          <>
            <a className="sm:grid grid-cols-3 my-5 border shadow-sm">
              <div className="col-span-1">
                <img
                  src={
                    "http://localhost:1337" +
                    product.attributes.p_img.data.attributes.url
                  }
                  alt={product.attributes.p_title}
                  className=" w-full object-cover md:h-full "
                  width="100%"
                />
              </div>
              <div className="m-1 sm:p-3 col-span-2 flex flex-col justify-between">
                <p className="sm:text-3xl text-xl font-bold text-start py-4">
                  {product.attributes.title}
                </p>
                <p>
                  {product.attributes.detail}
                  <Link href={"content/" + [product.id]}>
                    <a>อ่านต่อ</a>
                  </Link>
                </p>
                <div className="border-l-8 border border-l-blue-600 pl-3 my-2">
                  <p>
                    Type: <span className="font-bold">System Management</span>
                  </p>
                  <p>
                    Stack:
                    <span className="w-fit	 rounded-full bg-blue-500 text-white uppercase  px-2 py-1 text-xs font-bold mr-3">
                      #{product.attributes.type}
                    </span>
                  </p>
                  Link:
                  <a
                    href={`${product.attributes.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Foo
                  </a>
                  <p>Date: {product.attributes.date}</p>
                  <p>By: Nack_thanaphon</p>
                </div>
              </div>
            </a>
          </>
        </>
      ))}
    </>
  );
}

export default Card_order;
