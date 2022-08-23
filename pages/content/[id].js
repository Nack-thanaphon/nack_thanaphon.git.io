import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContentCard from "../component/ContentCard";
import Profile from "../component/Profile";


function posts({ posts }) {

  return (
    <>

      <div className=" mx-auto  h-full bg-blue-600 m-0 p-0">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
            integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
        <div className="grid sm:grid-cols-3 ">
          <div className="sm:col-span-2 sm:m-5 ">
            <div className="p-1">
              <div className="shadow-lg rounded-sm bg-white  h-screen">
                <div className="my-3 p-3">
                  <div className="flex justify-between py-3 my-auto">
                    <div className="my-auto">
                      <p className="sm:text-5xl text-3xl font-bold">
                        DEV<span className="text-blue-500">LOG.</span>
                      </p>
                    </div>
                    <div className="flex">
                      <Link href={"/"}>
                        <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                          <i className="fas fa-clipboard-list"></i> Back
                        </a>
                      </Link>
                      <Link href={"/สมัครงาน.pdf"}>
                        <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                          <i className="fas fa-cloud-download"></i>{" "}
                          Download(.pdf)
                        </a>
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <ul className="py-5">
                    {posts.result.map((data) => {
                      return <>
                        <h1>{data.name}</h1>
                        {data.detail}
                      </>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
}
export default posts;

export async function getStaticPaths() {
  const resp = await fetch(`https://dev-log.xn--y3ch4b7c.com/api/get_news.php`);
  const data = await resp.json();

  const paths = data.result.map((posts) => {
    return {
      params: {
        id: `${posts.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(`https://dev-log.xn--y3ch4b7c.com/api/get_news_id.php?id=${params.id}`);
  const data = await resp.json();

  return {
    props: {
      posts: data,
    },
  };
}
