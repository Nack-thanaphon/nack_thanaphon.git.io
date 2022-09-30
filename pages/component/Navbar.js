import React from 'react'
import Link from 'next/link'
export default function Navbar(props) {

    const { data,goto } = props;
 

    return (
        <div>
            <Link href={`/${goto}`}>
                <a className="bg-gradient-to-r from-blue-500 text-sm mx-auto to-blue-900 text-white  sm:p-2  p-1  m-2">
                    <i className="fas fa-clipboard-list"></i> {data}
                </a>
            </Link>
            <Link href={"/สมัครงาน.pdf"}>
                <a className="bg-gradient-to-r from-blue-500 text-sm mx-auto to-blue-900 text-white  sm:p-2  p-1  m-2">
                    <i className="fas fa-cloud-download"></i> 
                </a>
            </Link>
        </div>
    )
}
