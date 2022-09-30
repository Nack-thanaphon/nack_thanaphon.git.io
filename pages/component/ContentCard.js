import Image from "next/image";
import Link from "next/link";

function ContentCard(props) {
  const { data } = props;
  const { status } = props;

  return (
    <>
      <Link href={"content/" + [data?.id]}>
        <a
          className={
            "sm:flex sm:col-span-1 my-5  m-1  hover:border-blue-400"
          }
          key={data?.id}
        >
          <div className=" m-2 overflow-hidden  sm:w-64">
            <img
              src={"https://www.xn--y3ch4b7c.com/bos/" + data?.image}
              alt={data?.title}
              className=" object-cover hover:scale-105 ease-in duration-200 "
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className="m-2   flex-col justify-between  sm:w-[500px]">
            <p className="sm:text-md mt-3 sm:pt-0 text-xl font-bold text-start truncate block">
              {data?.name}
            </p>
            {/* <p className="text-gray-600">By: {data?.user_id}</p> */}
            {/* <p className="my-3">
            <Link href={"content/" + [data?.id]}>
              <a className="text-white rounded-full px-3 py-1   bg-gradient-to-r from-blue-400 to-blue-900">
                <i class="fa-solid fa-thumbs-up"></i> อ่านต่อ..
              </a>
            </Link>
          </p> */}
                <p>
                  หมวด: <span className="font-bold text-blue-800">{data?.type}</span>
                </p>
                <p className="text-gray-600  font-light">Date: {data?.date}</p>
          </div>
        </a>
      </Link>
    </>
  );
}

export default ContentCard;
