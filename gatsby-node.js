const path = require(`path`);
const slash = require(`slash`);

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
      console.log('Error retrieving contentful data', errors);
    }

    const template = path.resolve('./src/templates/post.js');

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
    console.log('Error retrieving contentful data', error);
  }
};
