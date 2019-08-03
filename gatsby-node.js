/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    const { data, errors } = await graphql(`
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    if (errors) {
      // eslint-disable-next-line no-console
      console.log('Error retrieving contentful data', errors);
    }

    const template = path.resolve('./src/templates/post.tsx');

    data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}/`,
        component: slash(template),
        context: {
          slug: node.slug,
          id: node.id,
        },
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error retrieving contentful data', error);
  }
};
