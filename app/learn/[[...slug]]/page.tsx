import { allLearns } from 'contentlayer/generated';
import { useMDXComponent } from "next-contentlayer/hooks";

const SinglePost = ({ params } : { params: {slug: string[]}}) => {
  const post = allLearns.find((post) => post.slugAsParams === params.slug.join("/"));

  if (!post)
    return (<> <h1>NOT FOUND</h1> </>);
  console.log(post.title);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <MDXContent/>
    </>
  );
};

export default SinglePost;