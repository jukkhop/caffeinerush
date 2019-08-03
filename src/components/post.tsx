import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface Post {
  createdAt: string;
  id: string;
  image: {
    fluid: FluidObject;
  };
  slug: string;
  title: string;
}

const Container = styled.div`
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
    object-fit: contain !important;
    width: auto;
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

const PostElement: FunctionComponent<Post> = ({
  createdAt,
  id,
  image,
  slug,
  title,
}): JSX.Element => (
  <Container key={id}>
    <Left>
      <Img alt={title} fluid={image.fluid} />
    </Left>
    <Right>
      <Title>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </Title>
      <CreatedAt>{createdAt}</CreatedAt>
    </Right>
  </Container>
);

export default PostElement;
