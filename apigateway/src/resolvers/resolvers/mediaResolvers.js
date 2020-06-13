const {
  getAll,
  getOneProfile,
  getAllGroup,
  getOneProfileGroup,
  getAllEvent,
  getOneProfileEvent,
  getAllGroupEvent,
  getOneGroupProfileEvent,
  createImage,
  deleteUserProfile,
  deleteGroup,
  deleteGroupProfile,
  deleteEvent,
  deleteEventProfile,
  deleteGroupEvent,
  deleteGroupEventProfile
} = require("../msAPIs/media.js");

// use by express-graphql in index.js
const resolvers = {
  // Queries
  allImages: getAll,
  profileImage: getOneProfile,
  groupImages: getAllGroup,
  groupProfileImage: getOneProfileGroup,
  eventImages: getAllEvent,
  eventProfileImage: getOneProfileEvent,
  eventGroupImages: getAllGroupEvent,
  eventGroupProfileImage: getOneGroupProfileEvent,
  // Mutations
  createImage: createImage,
  deleteProfileImage: deleteUserProfile,
  deleteGroupImage: deleteGroup,
  deleteGroupProfileImage: deleteGroupProfile,
  deleteEventImage: deleteEvent,
  deleteEventProfileImage: deleteEventProfile,
  deleteGroupEventImage: deleteGroupEvent,
  deleteGroupEventProfileImage: deleteGroupEventProfile
};

module.exports = resolvers;