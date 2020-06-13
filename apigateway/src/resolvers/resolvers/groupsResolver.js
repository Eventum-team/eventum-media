const {
  getAllGroups,
  getGroupByID,
  getGroupsByName,
  getGroupsByIdType,
  getGroupsByNameAndIdType,
  createGroup,
  updateGroup,
  deleteGroup,
  getTypeById,
  getGroupTypes,
} = require("../msAPIs/groups.js");

// use by express-graphql in index.js
const resolvers = {
  // Queries
  groups: getAllGroups,
  groupTypes: getGroupTypes,
  groupByID: getGroupByID,
  groupsByName: getGroupsByName,
  groupsByIdType: getGroupsByIdType,
  groupsByNameAndIdType: getGroupsByNameAndIdType,
  // Mutations
  addGroup: createGroup,
  updateGroup: updateGroup,
  deleteGroup: deleteGroup,
  typeById: getTypeById,
};

module.exports = resolvers;
