import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Moment } from 'moment';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface Post {
  createdAt: string;
  createdAtMoment: Moment;
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
    max-height: 65px;
  }

  img {
    max-height: 65px;
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
  createdAtMoment,
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
      <CreatedAt>{createdAtMoment.format('MMMM Do, YYYY')}</CreatedAt>
    </Right>
  </Container>
);

export default PostElement;
