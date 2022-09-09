import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="sm:m-8">
      <div className="p-1">
        <div className="shadow- rmdounded-sm bg-white sm:fixed  ">
          <div className="p-2">
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
                          <Image
                            width="25px"
                            height="25px"
                            src="/gibbon.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="25px"
                            height="25px"
                            src="/Mahidol_U.png"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="25px"
                            height="25px"
                            src="/wetv.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="25px"
                            height="25px"
                            src="/kene.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="25px"
                            height="25px"
                            src="/ptt.jpg"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="25px"
                            height="25px"
                            src="/Logo.png"
                            alt=""
                          />
                        </li>
                        <li className="my-auto m-2">
                          <Image
                            width="100%"
                            height="40px"
                            src="/logo.jpg"
                            alt=""
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
