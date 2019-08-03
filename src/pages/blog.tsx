import { graphql } from 'gatsby';
import moment from 'moment';
import React, { FunctionComponent } from 'react';

import Layout from '../components/layout';
import PostElement, { Post } from '../components/post';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

interface Props {
  data: {
    allContentfulPost: {
      edges: Edge[];
    };
  };
  location: {
    pathname: string;
  };
}

interface Edge {
  node: Post;
}

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          createdAt
          id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          slug
          title
        }
      }
    }
  }
`;

const enhancePosts = (edges: Edge[]): Post[] =>
  edges.map(
    ({ node }: Edge): Post => ({
      ...node,
      createdAt: moment(node.createdAt).format('MMMM Do, YYYY'),
    }),
  );

const BlogPage: FunctionComponent<Props> = ({
  data,
  location,
}): JSX.Element => {
  const posts = enhancePosts(data.allContentfulPost.edges);
  return (
    <Layout location={location} theme={themes.light}>
      <SEO
        title="Blog"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <div className="content">
        <div className="posts">
          {posts.map(
            (post): JSX.Element => (
              <PostElement key={post.id} {...post} />
            ),
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
