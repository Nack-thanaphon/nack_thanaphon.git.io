/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect } from "react";
import { useState } from "react";





function Filter(props) {
    const [typeData, setData] = useState();
    const { value, OnvalueChange } = props;

    useEffect(() => {
        async function fetchAll() {
            const resp = await fetch("https://xn--y3ch4b7c.com/api/get_newsType.php");
            const data = await resp.json();
            setData(data.result);
        }
        fetchAll();
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    หมวดหมู่
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                    <div className="py-1">
                        {typeData?.map((resp) => {
                            return (
                                <Menu.Item
                                >
                                    <a
                                        href="#"
                                        className={(
                                            'block px-4 py-2 text-sm hover:bg-blue-100'
                                        )}
                                        onClick={() => { OnvalueChange(resp.type) }}
                                    >
                                        {resp.type}
                                    </a>

                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>

        </Menu >
    )
}


// async function Search(param) {
//     await alert(param)
//     // $(".news_card").attr("style", "display: none !important");
//     // if (param == "all") {
//     //     $(".news_card").attr("style", "display: block !important");
//     // } else {
//     //     $("." + param).attr("style", "display: block !important");
//     // }
// }


export default Filter;

