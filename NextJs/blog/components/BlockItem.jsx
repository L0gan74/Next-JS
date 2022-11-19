import Link from "next/link";

const BlockItem = ({ title, body, id }) => {
  return (
    <div className="blog-item">
      <h5>{title}</h5>
      <p>{body}</p>
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        Прочитать
      </Link>
    </div>
  );
};

export default BlockItem;
