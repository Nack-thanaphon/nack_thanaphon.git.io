import React from "react";
import Link from "next/link";

export default function ContentCard() {
  return (
    
      <Link href="/content/[svwevsdfv].js">
        <a className="sm:grid grid-cols-3 my-5 border shadow-sm">
          <div className="col-span-1">
            <img
              src="https://media.graphassets.com/roAdgZYCTa6FOoHhWsug"
              className=""
              width="100%"
              alt=""
            />
          </div>
          <div className="m-1 sm:p-3 col-span-2 flex flex-col justify-between">
            <p className="sm:text-3xl text-xl font-bold text-start py-4">
              ระบบจัดการข้อมูลด้วย googleSheet+ Appscript
            </p>
            <p>
            จัดการเอกสารและฐานข้อมูลที่เป็น google sheet ด้วยเครื่องมือของ google 
            Appscript & Google sheet API ตั้งแต่เริ่มต้นจนถึงการใช้งานจริง.. 
            <a className="text-blue-300">อ่านต่อ</a>
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
              <p>Date: 10 December 2022</p>
              <p>By: Nack_thanaphon</p>
            </div>
          </div>
        </a>
      </Link>
    
  );
}
