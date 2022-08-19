import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
                <h1 className="sm:text-3xl font-bold	">
                  <i className="fab fa-gratipay text-blue-500"></i> SOMEDAY I WILL
                  BE WEB-DEVELOPER
                </h1>
                <ul className="py-5">
                  <p className="font-bold uppercase">
                    {" "}
                    <i className="fab fa-gratipay text-blue-500"></i> Lastest
                    Project
                  </p>
                  <li className="mb-1 text-muted">
                    <i className="fas fa-angle-right"></i> website : <a href=""></a>{" "}
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-angle-right"></i> website : <a href=""></a>{" "}
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-angle-right"></i> website : <a href=""></a>{" "}
                  </li>
                  <li className="mb-1">
                    <i className="fas fa-angle-right"></i> website : <a href=""></a>{" "}
                  </li>
                  {/* <li>datavisualization </li>
                  <li>system Management</li> */}
                  <p className="font-bold uppercase">
                    {" "}
                    <i className="fab fa-gratipay text-blue-500"></i> stack
                  </p>
                  <li>website</li>
                  <li>datavisualization</li>
                  <li>system Management</li>
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
                    {" "}
                    <i className="fab fa-gratipay text-blue-500"></i> Application
                    Program
                  </p>
                  <li>Google Line sheet</li>
                  <li>Php Mysql bootstrap</li>
                  <li>php Mysql tailwindcss</li>
                  <li>Codeigniter tailwindcss / bootstrap</li>
                  <li>next.js express.js</li>
                  <p className="font-bold uppercase">Devops stack</p>
                  <div className="flex">
                    <li>
                      <i className="fab fa-figma text-5xl p-4"></i>
                    </li>
                    <li>
                      <i className="fab fa-docker text-5xl p-4"></i>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:m-1">
          <div className="p-1">
            <div className="shadow-lg rounded-sm bg-white fixed   ">
              <div className="p-5">
                <div className="grid justify-items-center p-4">
                  <Image
                    className="rounded-full"
                    src={"/profile.jpg"}
                    height={"150px"}
                    width={"150px"}
                    alt={"profile"}
                  ></Image>
                </div>
                <div className="sm:text-3xl font-bold  text-center sm:text-start">
                  Thanaphon Kallapapruek
                </div>
                <p className="text-center">Web-developer</p>
                <hr className="py-3" />
                <ul className="text-center sm:text-start">
                  <li className="py-1">
                    <h3 className="text-[20px] text-blue-600 font-bold">
                      Self-Identify
                    </h3>
                    <p className="text-xl font-bold	uppercase m-0 p-0">
                      Learn Fast Do Now
                    </p>
                  </li>
                  <li className="py-1">
                    <h3 className="text-[20px] text-blue-600 font-bold">
                      Education
                    </h3>
                    <small>
                      <ul className="text-center sm:text-start">
                        <li className="font-bold uppercase">
                          2015-2018 : Religion and Social Study
                        </li>
                        <li>@Mahidol University</li>
                      </ul>
                    </small>
                  </li>
                  <li className="py-1">
                    <h3 className="text-[20px] text-blue-600 font-bold">Job</h3>
                    <small>
                      <ul className="text-center sm:text-start">
                        <li className="font-bold uppercase">
                          2020-NOW : Webdeveloper
                        </li>
                        <li>
                          @Faculty of Medicine Siriraj Hospital, Mahidol
                          University
                        </li>
                      </ul>
                    </small>
                  </li>
                  <li className="py-2">
                    <h3 className="text-[20px] text-blue-600 font-bold">
                      Social
                    </h3>

                    <ul className="flex justify-center sm:justify-start ">
                      <li>
                        <Link href="">
                          <a>
                            <i className="fab fa-facebook-square p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a>
                            <i className="fab fa-linkedin p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a>
                            <i className="fab fa-line p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a>
                            <i className="fas fa-phone-square-alt p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a>
                            <i className="fas fa-envelope p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a>
                            <i className="fab fa-git-square p-1 text-3xl"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
