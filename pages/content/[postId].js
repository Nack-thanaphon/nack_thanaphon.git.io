import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContentCard from "../component/ContentCard";
import Profile from "../component/Profile";


function posts({ posts }) {

  return (
    <>
      {posts.result.map((post) => {
        return <>
          <div className="py-5" key={post.id} >
            <h1 className="text-3xl"  >{post.name}</h1>
            <img
              src={"https://www.โลมา.com/bos/" + post.image}
              alt={post.title}
              className="w-full object-cover md:h-full py-5"
              width="100%"
            />
          </div>
        </>
      })}
    </>
  );
}
export default posts;
// for /post/[postId]

export const getServerSideProps = async (context) => {

  // you also have access to the param postId from the context
  const postId = context.params.postId

  const resp = await fetch(`https://www.โลมา.com/api/get_news_id.php?id=${postId}`);
  const data = await resp.json();

  // query the data based on the postId and return as props
  return {
    props: {
      posts: data
    }
  }

}