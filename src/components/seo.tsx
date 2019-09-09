/* eslint-disable @typescript-eslint/indent  */

import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { SiteProps } from './layout';

interface Props {
  description?: string;
  lang?: string;
  meta?: {
    name: string;
    content: string;
    property?: undefined;
  }[];
  keywords?: string[];
  title: string;
}

interface Data {
  site: SiteProps;
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO: FunctionComponent<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}): JSX.Element => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data: Data): JSX.Element => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s - ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          >
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_CHTML"
              async={false}
            />
          </Helmet>
        );
      }}
    />
  );
};

export default SEO;
