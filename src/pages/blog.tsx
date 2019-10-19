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

function enhancePosts(edges: Edge[]): Post[] {
  return edges.map(
    ({ node }: Edge): Post => ({
      ...node,
      createdAtMoment: moment(node.createdAt),
    }),
  );
}

function sortPosts(a: Post, b: Post): number {
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  if (b.createdAt > a.createdAt) {
    return 1;
  }
  return 0;
}

const BlogPage: FunctionComponent<Props> = ({
  data,
  location,
}): JSX.Element => {
  const posts = enhancePosts(data.allContentfulPost.edges).sort(sortPosts);
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
