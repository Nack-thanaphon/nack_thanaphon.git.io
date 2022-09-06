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
              "sm:grid grid-cols-3 my-5 rounded-lg m-4   shadow-lg " +
              `news_card  ${posts.type}`
            }
            key={posts.id}
          >
            <div className="col-span-1 m-2 overflow-hidden sm:h-64">
                <img
                  src={"https://www.xn--y3ch4b7c.com/bos/" + posts.image}
                  alt={posts.title}
                  className="w-full object-cover hover:scale-105 ease-in duration-200 md:h-full"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
            </div>
            <div className="m-2   col-span-2 flex flex-col justify-between">
              <p className="sm:text-3xl pt-3 sm:pt-0 text-2xl font-bold text-start ">
                {posts.name}
              </p>
              <p className="my-4">
                <Link href={"content/" + [posts.id]}>
                  <a className="text-white rounded-full px-5 p-1   bg-gradient-to-r from-blue-400 to-blue-900">
                    <i class="fa-solid fa-thumbs-up"></i> อ่านต่อ..
                  </a>
                </Link>
              </p>
              <div className="border-l-8 bg-gray-50 mt-3  border-l-blue-600 ">
                <div className="ml-3">
                  <p>
                    Type: <span className="font-bold">{posts.type}</span>
                  </p>
                  Link:
                  <Link href={`${posts.url}`}>
                    <a
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ลิงค์
                    </a>
                  </Link>
                  <p>Date: {posts.date}</p>
                  <p>By: {posts.user_id}</p>
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
