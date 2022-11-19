import Layout from "../../components/Layout";

const SinglePost = ({ post }) => {
  if (!post) return "Поста нету";

  return (
    <Layout title={post.title} description={post.body}>
      <div className="blog-item">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post = await data.json();
  console.log(data);

  return {
    props: { post },
  };
};

export default SinglePost;
