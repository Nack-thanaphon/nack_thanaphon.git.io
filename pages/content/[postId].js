import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profile from "../component/Profile";
import Loader from "../component/Loader";

function posts({ posts }) {
  if (!posts) return <Loader />;

  return (
    <>
      <div className=" mx-auto  h-full bg-blue-600 m-0 p-0">
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
                          <i className="fas fa-clipboard-list"></i> Back
                        </a>
                      </Link>
                      <Link href={"/สมัครงาน.pdf"}>
                        <a className="bg-gradient-to-r from-blue-500 to-blue-900 text-white  sm:p-2 p-1 rounded-md m-1">
                          <i className="fas fa-cloud-download"></i> Download
                        </a>
                      </Link>
                    </div>
                  </div>
                  <hr />

                  {posts.result.map((post) => {
                    return (
                      <>
                        <Head>
                          <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                            integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
                            crossOrigin="anonymous"
                            referrerpolicy="no-referrer"
                          />
                          <title>Dev-Log | {post.name}</title>
                          <meta
                            property="og:image"
                            content={"https://www.โลมา.com/bos/" + post.image}
                          />
                          <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
                            type="text/css"
                            media="screen"
                          />
                          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
                          <script
                            type="text/javascript"
                            src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
                          />
                        </Head>

                        <div className="w-full md:h-full py-5 " key={post.id}>
                          <h1 className="text-3xl">{post.name}</h1>
                          <div className="object-contain py-4">
                            <a
                              class="fancybox"
                              data-fancybox="gallery"
                              href={"https://www.โลมา.com/bos/" + post.image}
                            >
                              <img
                                src={"https://www.โลมา.com/bos/" + post.image}
                                alt={post.title}
                                width="100%"
                                height="100%"
                                layout="responsive"
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: post.detail }}
                        ></div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
}
export default posts;

export const getServerSideProps = async (context) => {
  const postId = context.params.postId;
  const resp = await fetch(
    `https://www.โลมา.com/api/get_news_id.php?id=${postId}`
  );
  const data = await resp.json();

  return {
    props: {
      posts: data,
    },
  };
};
