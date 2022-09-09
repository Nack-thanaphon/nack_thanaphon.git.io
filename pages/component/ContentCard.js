import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Card_order() {
  const [posts, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const resp = await fetch("https://www.xn--y3ch4b7c.com/api/get_news.php");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No-Data..</p>;

  return (
    <>
      {posts.result.map((posts) => (
        <>
          <a
            className={
              "col-span-3 sm:col-span-1 my-5 rounded-lg m-1 border-2 border-dark hover:border-blue-400"
            }
            key={posts.id}
          >
            <div className=" m-2 overflow-hidden sm:h-64">
                <img
                  src={"https://www.xn--y3ch4b7c.com/bos/" + posts.image}
                  alt={posts.title}
                  className="w-full object-cover hover:scale-105 ease-in duration-200 md:h-full"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
            </div>
            <div className="m-2 col-span-2 flex flex-col justify-between">
              <p className="sm:text-md mt-3 sm:pt-0 text-xl font-bold text-start truncate">
                {posts.name}
              </p>
              <p className="text-gray-600">By: {posts.user_id}</p>
              <p className="my-3">
                <Link href={"content/" + [posts.id]}>
                  <a className="text-white rounded-full px-3 py-1   bg-gradient-to-r from-blue-400 to-blue-900">
                    <i class="fa-solid fa-thumbs-up"></i> อ่านต่อ..
                  </a>
                </Link>
              </p>
              <div className="border-l-8 bg-gray-50   border-l-blue-600 border ">
                <div className="ml-3">
                  <p>
                    Type: <span className="font-bold">{posts.type}</span>
                  </p>
                  <p className="text-gray-600">Date: {posts.date}</p>
                  Link:
                  <Link href={`${posts.url}`}>
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click me
                    </a>
                  </Link>
                  
                 
                </div>
              </div>
            </div>
          </a>
        </>
      ))}
    </>
  );
}

export default Card_order;
