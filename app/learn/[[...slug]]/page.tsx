import { allLearns } from 'contentlayer/generated';
import { getMDXComponent } from "next-contentlayer/hooks";

const Learn = ({ params}: { params: { slug: string[] }}) => {
  const doc = allLearns.find((doc) => doc.slugAsParams === params.slug.join("/"));

  if (!doc)
    return (<> <h1>NOT FOUND</h1> </>);
  const MDXContent = getMDXComponent(doc.body.code);

  return (
    <>
      <MDXContent />
    </>
  );
};

export default Learn;