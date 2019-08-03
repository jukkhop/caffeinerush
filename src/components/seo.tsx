/* eslint-disable @typescript-eslint/indent  */

import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Data {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
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
          />
        );
      }}
    />
  );
};

export default SEO;
