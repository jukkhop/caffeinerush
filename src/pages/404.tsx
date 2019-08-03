import React, { FunctionComponent } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

interface Props {
  location: {
    pathname: string;
  };
}

const NotFoundPage: FunctionComponent<Props> = ({ location }): JSX.Element => (
  <Layout theme={themes.light} location={location}>
    <SEO
      title="404: Not found"
      keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
    />
    <h1>OOPS!</h1>
    <p>There is nothing here.</p>
  </Layout>
);

export default NotFoundPage;
