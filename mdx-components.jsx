import React from 'react';

const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  p: (props) => <p className="text-base my-2" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 my-2" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  a: (props) => <a className="text-blue-500 underline" {...props} />,
};

export default components;
