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
      const resp = await fetch("https://www.โลมา.com/api/get_news.php");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No data</p>;

  return (
    <>
      {posts.result.map((posts) => (
        <>
          <>
            <a
              className="sm:grid grid-cols-3 my-5  shadow-lg"
              key={posts.id}
            >
              <div className="col-span-1 m-2">
                <img
                  src={"https://www.โลมา.com/bos/" + posts.image}
                  alt={posts.title}
                  className=" w-full object-cover md:h-full "
                  width="100%"
                />
              </div>
              <div className="m-2   col-span-2 flex flex-col justify-between">
                <p className="sm:text-3xl pt-3 sm:pt-0 text-2xl font-bold text-start ">
                  {posts.name}
                </p>
                <p>
                  <Link href={"content/" + [posts.id]}>
                    <a className="text-blue-500">อ่านต่อ..</a>
                  </Link>
                </p>
                <div className="border-l-8  border-l-blue-600 ">
                  <div className="ml-3">
                    <p>
                      Type: <span className="font-bold">System Management</span>
                    </p>
                    Link:
                    <a
                      href={`${posts.link}`}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ลิงค์
                    </a>
                    <p>Date: {posts.date}</p>
                    <p>By: {posts.user_id}</p>
                  </div>
                </div>
              </div>
            </a>
            <hr />
          </>
        </>
      ))}
    </>
  );
}

export default Card_order;
