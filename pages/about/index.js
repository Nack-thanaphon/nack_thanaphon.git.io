import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContentCard from "../component/ContentCard";
import Profile from "../component/Profile";

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
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="grid sm:grid-cols-3 ">
        <div className="sm:col-span-2 sm:m-5 ">
          <div className="p-1">
            <div className="shadow-lg rounded-sm bg-white  h-screen">
              <div className="my-3 p-3">
                {/* <h1 className="sm:text-3xl font-bold	"></h1>
                 */}
                <div className="flex justify-between pb-3">
                  <div>
                    <p className="text-5xl font-bold">About<span className="text-blue-500"> Me</span></p>
                  </div>
                  <div className="flex">
                    <a href="./" className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  p-2 rounded-md m-1"><i className="fas fa-left"></i> Back</a>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-900 text-white p-2 rounded-md m-1"> <i className="fas fa-cloud-download"></i> Download</button>
                  </div>
                </div>
                <hr />
                <ul className="py-5">
                 
                  <p className="font-bold uppercase">
                    <i className="fab fa-gratipay text-blue-500"></i> Design
                  </p>
                  <div className="flex">
                    <li>
                      <i className="fab fa-figma text-5xl p-4"></i>
                    </li>
                    <li>
                      <i className="fas fa-ad text-5xl p-4"></i>
                    </li>
                  </div>
                  <p className="font-bold uppercase">
                    <i className="fab fa-gratipay text-blue-500"></i>{" "}
                    Application Program
                  </p>
                  <div className="flex my-3">
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://cdn-icons-png.flaticon.com/512/281/281761.png"
                        alt=""
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536785.png?token=exp=1660961421~hmac=b9f9674c032953e8b8767aafe004cf32"
                        alt=""
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                        alt=""
                      />
                    </li>

                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://cdn-icons-png.flaticon.com/512/1/1975.png"
                        alt=""
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
                        alt=""
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfA9saZjv6q5LESFvG0kFqCWKyDY8GSwcY9TDkTFkTay-zXp30U2ydvFQoEYBMeh2mg4c&usqp=CAU"
                        alt=""
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://www.drupal.org/files/project-images/screenshot_361.png"
                        alt="tailwind css"
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://i0.wp.com/devbanban.com/wp-content/uploads/2018/05/ci.png?fit=431%2C512&ssl=1"
                        alt="tailwind css"
                      />
                    </li>
                    <li className="my-auto m-2">
                      <img
                        width={50}
                        height={50}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                        alt="tailwind css"
                      />
                    </li>
                  </div>
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
