import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="sm:m-8">
      <div className="p-1">
        <div className="shadow-lg rounded-sm bg-white sm:fixed   ">
          <div className="p-5">
            <div className="grid justify-items-center p-4">
              <Image
                className="rounded-full"
                src={"/profile.jpg"}
                height={"125px"}
                width={"125px"}
                alt={"profile"}
              ></Image>
            </div>
            <div className="sm:text-3xl font-bold  text-center sm:text-start">
              Thanaphon Kallapapruek
            </div>
            <p className="sm:text-start text-center pb-3 uppercase">Web-developer</p>

            <ul className="text-center sm:text-start">
              <li className="py-1">
                <h3 className="text-[20px] uppercase text-blue-600 font-bold">
                  Self-Identify
                </h3>
                <p className="text-xl font-bold	 m-0 p-0">
                  Fail Fast Fail Forward
                </p>
              </li>
              <li className="py-1">
                <h3 className="text-[20px] uppercase text-blue-600 font-bold">
                  Education
                </h3>
                <small>
                  <ul className="text-center sm:text-start">
                    <li className="font-bold uppercase">
                      2015-2018 : Religion Study
                    </li>
                    <li>@Mahidol University</li>
                  </ul>
                </small>
              </li>
              <li className="py-1">
                <h3 className="text-[20px] uppercase text-blue-600 font-bold">Job Experience</h3>
                <small>
                  <ul className="text-center sm:text-start">

                    <li>
                      <ul className="flex sm:justify-start justify-center my-3">
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="/gibbon.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Mahidol_U.png"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="https://medias.unifrance.org/medias/36/139/232228/format_hd/wetv.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="https://yt3.ggpht.com/ytc/AMLnZu-W4SowAHU_G_FEra9SiEXD2yr1x7QlXRg3MGSmrA=s900-c-k-c0x00ffffff-no-rj"
                            alt="tailwind css"
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="https://cf.shopee.co.th/file/a6488cd1f1d04772d961df1aa79aaea4"
                            alt="tailwind css"
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="25px"
                            height="25px"
                            src="https://aun-hpn.or.th/img/logo/Logo.png"
                            alt="tailwind css"
                          />
                        </li>
                        <li className="my-auto m-2">
                          <img
                            width="40px"
                            height="40px"
                            src="https://www.mugh.or.th/issets/img/footer/logo.jpg"
                            alt="tailwind css"
                          />
                        </li>

                      </ul>

                    </li>
                  </ul>
                  <ul className="text-center sm:text-start">
                    <li className="font-bold uppercase">
                      2022-NOW : Web-developer
                    </li>
                    <li>
                      @Faculty of Medicine Siriraj Hospital, Mahidol
                      University
                    </li>
                  </ul>
                </small>
              </li>
              <li className="py-2">
                <h3 className="text-[20px] uppercase text-blue-600 font-bold">
                  Social
                </h3>

                <ul className="flex justify-center sm:justify-start ">
                  <li>
                    <Link href="https://web.facebook.com/learner.infinity.39">
                      <a>
                        <i className="fab fa-facebook-square p-1 text-2xl"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i className="fab fa-linkedin  p-1 text-2xl"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i className="fab fa-line p-1  text-2xl"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>
                        <i className="fas fa-phone-square-alt   p-1 text-2xl"></i>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://github.com/Nack-thanaphon">
                      <a>
                        <i className="fab fa-git-square  p-1 text-2xl"></i>
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
  );
}
