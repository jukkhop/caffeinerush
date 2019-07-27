import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

const NotFoundPage = () => (
  <Layout theme={themes.light}>
    <SEO title="404: Not found" />
    <h1>OOPS!</h1>
    <p>There is nothing here.</p>
  </Layout>
);

export default NotFoundPage;
