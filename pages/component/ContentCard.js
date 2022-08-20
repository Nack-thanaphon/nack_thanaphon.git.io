import React from "react";
import Link from "next/link";

export default function ContentCard() {
  return (
    
      <Link href="/content/">
        <a className="sm:grid grid-cols-3 my-5 border shadow-sm">
          <div className="col-span-1">
            <img
              src="https://media.graphassets.com/roAdgZYCTa6FOoHhWsug"
              className=" w-full "
              width="100%"
              alt=""
            />
          </div>
          <div className="m-1 p-3 col-span-2 flex flex-col justify-between">
            <p className="text-3xl font-bold text-start">
              Lorem ipsum dolor sit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              aspernatur.
            </p>
            <div className="border-l-8 border border-l-blue-600 pl-3 my-2">
              <p>
                Type: <span className="font-bold">System Management</span>
              </p>
              <p>
                Stack:
                <span className="w-fit	 rounded-full bg-blue-500 text-white uppercase  px-2 py-1 text-xs font-bold mr-3">
                  #Google
                </span>
                <span className="w-fit	 rounded-full bg-blue-500 text-white uppercase  px-2 py-1 text-xs font-bold mr-3">
                  #Datatable
                </span>
                <span className="w-fit	 rounded-full bg-blue-500 text-white uppercase  px-2 py-1 text-xs font-bold mr-3">
                  #script
                </span>
              </p>
              <p>Link:</p>
              <p>Date:</p>
            </div>
          </div>
        </a>
      </Link>
    
  );
}
