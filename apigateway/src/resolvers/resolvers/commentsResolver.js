const {
    getCommentsByID,
    createComment,
    updateComment,
    deleteComment,
    reactComment,
    unreactComment
  } = require("../msAPIs/comments.js");
  
  // use by express-graphql in index.js
  const resolvers = {
    // Queries
    getComments: getCommentsByID,
    // Mutations
    addComment: createComment,
    react: reactComment,
    unreact: unreactComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
  };
  
  module.exports = resolvers;
  