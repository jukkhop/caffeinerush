import React from 'react';
import { cold, setConfig } from 'react-hot-loader';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';

setConfig({ pureSFC: true });
cold(Intro);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />

    {/* <h1>yaada yada</h1>
      <p>bla bla</p>
      <p>gobbledygook</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/posts/">Go to posts</Link> */}
  </Layout>
);

export default IndexPage;
