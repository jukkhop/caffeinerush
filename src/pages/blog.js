import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { themes } from '../constants/styles';

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

const Content = styled.div``;

const Post = styled.div`
  align-items: center;
  display: flex;
  padding-bottom: 3rem;
`;

const Left = styled.div`
  min-width: 15%;

  div {
    height: 65px;
  }

  img {
    height: 65px;
    width: auto;
    object-fit: contain !important;
  }
`;

const Right = styled.div`
  margin-left: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 0.35rem;
  margin-top: 0;
`;

const CreatedAt = styled.div`
  font-size: 0.8175rem;
`;

const mapPosts = edges =>
  edges.map(({ node }) => ({
    ...node,
    createdAt: moment(node.createdAt).format('MMMM Do, YYYY'),
  }));

const BlogPage = ({ data, location }) => {
  const posts = mapPosts(data.allContentfulPost.edges);
  return (
    <Layout location={location} theme={themes.light}>
      <SEO
        title="Blog"
        keywords={[`jukka hopeavuori`, `developer`, `helsinki`]}
      />
      <Content>
        <div className="posts">
          {posts.map(({ createdAt, id, image, slug, title }) => (
            <Post key={id}>
              <Left>
                <Img alt={title} fluid={image.fluid} />
              </Left>
              <Right>
                <Title>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </Title>
                <CreatedAt>{createdAt}</CreatedAt>
              </Right>
            </Post>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    allContentfulPost: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default BlogPage;
