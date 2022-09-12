import Link from "next/link";
import ContentCard from "./component/ContentCard";
import Profile from "./component/Profile";
import Filter from "./component/Filter";
import Header from "./component/Header";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [isLoading, setLoading] = useState(false);
  const [postData, setData] = useState(null)
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const resp = await fetch("https://www.xn--y3ch4b7c.com/api/get_news.php");
      const data = await resp.json();
      setData(data.result);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const filterData = postData?.filter((postResp) => {
    return postResp.type.includes(searchData);
  })


  const postFecth = filterData?.map((postResp) => {
    return <ContentCard key={postResp.id} data={postResp} />

  });

  return (
    <div className=" mx-auto  h-full  m-0 p-0">
      <Header />
      <div className="grid sm:grid-cols-3 ">
        <div className="sm:col-span-2 sm:m-5 ">
          <div className="p-1">
            <div className="shadow-lg rounded-sm bg-white  h-full">
              <div className="my-3 p-3">
                <div className="flex justify-between py-3 my-auto">
                  <div className="my-auto">
                    <p className="sm:text-5xl text-2xl font-bold">
                      DEV<span className="text-blue-500">LOG.</span>
                    </p>
                  </div>
                  <div className="flex">
                    <Link href={"/about"}>
                      <a className="bg-gradient-to-r from-blue-500 text-sm to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                        <i className="fas fa-clipboard-list"></i> About Me
                      </a>
                    </Link>
                    <Link href={"/สมัครงาน.pdf"}>
                      <a className="bg-gradient-to-r from-blue-500 text-sm to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                        <i className="fas fa-cloud-download"></i> Download
                      </a>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="flex my-4 justify-between">
                  <div className="font-bold uppercase m-0 p-0 my-auto">
                    <i className="fab fa-gratipay text-blue-500"></i> FILTER
                    BY :
                  </div>
                  <Filter  OnvalueChange={setSearchData} />
                </div>
                <div className="py-5 z-50">
                  <p className="font-bold uppercase">
                    <i className="fab fa-gratipay text-blue-500"></i> Lastest
                    Project
                  </p>
                </div>
                <div className="grid grid-cols-3 mb-1 text-muted">
                  {postFecth}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Profile />
      </div>

    </div>
  );
}
export default Home;
