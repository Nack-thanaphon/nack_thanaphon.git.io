import Head from "next/head";
import Link from "next/link";
import ContentCard from "./component/ContentCard";
import Profile from "./component/Profile";
import Filter from "./component/Filter";

export default function Home() {
  return (
    <div className=" mx-auto  h-full bg-blue-600 m-0 p-0">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>Dev-Log | Log Everything I got</title>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3P35X4E752"></script>
        <script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3P35X4E752');
        `}
        </script>
      </Head>
      <div className="grid sm:grid-cols-3 ">
        <div className="sm:col-span-2 sm:m-5 ">
          <div className="p-1">
            <div className="shadow-lg rounded-sm bg-white  h-full">
              <div className="my-3 p-3">
                <div className="flex justify-between py-3 my-auto">
                  <div className="my-auto">
                    <p className="sm:text-5xl text-3xl font-bold">
                      DEV<span className="text-blue-500">LOG.</span>
                    </p>
                  </div>
                  <div className="flex">
                    <Link href={"/about"}>
                      <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                        <i className="fas fa-clipboard-list"></i>About Me
                      </a>
                    </Link>
                    <Link href={"/สมัครงาน.pdf"}>
                      <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                        <i className="fas fa-cloud-download"></i>Download
                      </a>
                    </Link>
                  </div>
                </div>
                <hr />
                <ul className="py-5 z-50">
                  <div className="flex mb-4 justify-between">
                    <div className="font-bold uppercase m-0 p-0 my-auto">
                      <i className="fab fa-gratipay text-blue-500"></i> FILTER
                      BY :
                    </div>
                    <Filter />
                  </div>

                  <p className="font-bold uppercase">
                    <i className="fab fa-gratipay text-blue-500"></i> Lastest
                    Project
                  </p>
                  <li className=" mb-1 text-muted">
                    <ContentCard />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Profile />
      </div>

    </div>
  );
}
