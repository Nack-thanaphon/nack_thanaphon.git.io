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
      const resp = await fetch("https://www.info-aun-hpn.com/api/get_news_limit3.php");
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No profile data</p>;

  return (
    <>
      {posts.result.map((posts) => (
        <>
          <>
            <a className="sm:grid grid-cols-3 my-5 border shadow-sm">
              <div className="col-span-1">
                <img
                  src={"https://info-aun-hpn.com/bos/" +posts.image}
                  alt={posts.title}
                  className=" w-full object-cover md:h-full "
                  width="100%"
                />
              </div>
              <div className="m-1 sm:p-3 col-span-2 flex flex-col justify-between">
                <p className="sm:text-3xl text-xl font-bold text-start py-4">
                  {posts.name}
                </p>
                <p>
                  
                  <Link href={"content/" + [posts.id]}>
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
                      #{posts.type}
                    </span>
                  </p>
                  Link:
                  <a
                    href={`${posts.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Foo
                  </a>
                  <p>Date: {posts.date}</p>
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
