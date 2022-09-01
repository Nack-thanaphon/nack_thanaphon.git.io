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
                    <Link href={"/"}>
                      <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                        <i className="fas fa-clipboard-list"></i>Back
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
                <div className="py-5 ">
                  <p className="py-3 text-lg uppercase font-bold  text-blue-800">
                    <i className="fab fa-gratipay text-blue-500"></i> About Me
                  </p>
                  <div className="sm:grid grid-cols-3">
                    <div className="col-span-2">
                      <p className="">
                        <p className="text-xl font-bold pb-3">
                          Thanapon Kalapapruek (Nack)
                        </p>
                        holds a bachelor's degree in religion and society.
                        Mahidol University 2 years of language skills as a guide
                        Started career from Grapphic designer Started Ux ui
                        design with Adobe & Figma Love programming Started with
                        html css Javascript php mysql jquery studied Graphic2b
                        and Indian channels. Self-study through Udemi for about
                        6 months, get a design job for a while and get the
                        opportunity. moved to Nakhon Pathom work at Mahidol
                        University Developed 4 websites, namely aun-Hpn mugh ,
                        both Fontend and Backend systems, all written by myself.
                        After that, I turned to the Codeigniter 3 framework in
                        development to make it more timely.
                      </p>
                      <p className="text-justify ">
                        In the distance, there is knowledge and self-development
                        every day. So I started to study Algoritism, OOP writing
                        and Functional Programming to study Framwork. Node.js
                        next.js express.js tailwind css Bootstrap laravel and
                        study more in Version Control section Git Docker study
                      </p>
                    </div>
                    <div className="sm:inline-grid p-4	hidden">
                      <img
                        width="100%"
                        height={350}
                        layout="fill"
                        src="profile.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="py-3 text-lg uppercase font-bold  text-blue-800 ">
                    <i className="fab fa-gratipay text-blue-500"></i> Life Style
                  </p>
                  <p>
                    I like to develop myself. And every pour with practice and
                    learning.
                  </p>
                  <p className="py-3 text-lg uppercase font-bold  text-blue-800">
                    <i className="fab fa-gratipay text-blue-500"></i> Target for
                    the next 10 years.
                  </p>
                  <p>
                    Working in the field of programmers. Have the ability to
                    talk to both the team and the customer. and getting better
                    every day
                  </p>
                  <p className="py-3 text-lg uppercase font-bold  text-blue-800">
                    <i className="fab fa-gratipay text-blue-500"></i> currently
                    working
                  </p>
                  <p>
                    Building Services Engineering Department Faculty of Medicine
                    Siriraj Hospital Mahidol University, Position General
                    Administration Officer job description Maintain and develop
                    the website Design and develop work systems to be more
                    efficient. Develop databases and design systems for
                    departments within the hospital.
                  </p>

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
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png"
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
        </div>
        <Profile />
      </div>
    </div>
  );
}
