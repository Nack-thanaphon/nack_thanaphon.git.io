import Image from "next/image";
import Link from "next/link";

function ContentCard(props) {
  const { data } = props;

  return (
    <>
      <a
        className={
          "col-span-3 sm:col-span-1 my-5 rounded-lg m-1 border-2 border-dark hover:border-blue-400"
        }
        key={data?.id}
      >
        <div className=" m-2 overflow-hidden sm:h-64">
          <img
            src={"https://www.xn--y3ch4b7c.com/bos/" + data?.image}
            alt={data?.title}
            className="w-full object-cover hover:scale-105 ease-in duration-200 md:h-full"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="m-2 col-span-2 flex flex-col justify-between">
          <p className="sm:text-md mt-3 sm:pt-0 text-xl font-bold text-start truncate">
            {data?.name}
          </p>
          <p className="text-gray-600">By: {data?.user_id}</p>
          <p className="my-3">
            <Link href={"content/" + [data?.id]}>
              <a className="text-white rounded-full px-3 py-1   bg-gradient-to-r from-blue-400 to-blue-900">
                <i class="fa-solid fa-thumbs-up"></i> อ่านต่อ..
              </a>
            </Link>
          </p>
          <div className="border-l-8 bg-gray-50   border-l-blue-600 border ">
            <div className="ml-3">
              <p>
                Type: <span className="font-bold">{data?.type}</span>
              </p>
              <p className="text-gray-600">Date: {data?.date}</p>
              Link:
              <Link href={`${data?.url}`}>
                <a
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default ContentCard;
