const {
  getAllUsers,
  getUserByID,
  getGroupsByUser,
  getEventsByUser,
  getAllUserGroups,
  getUsersGroupByUserAndGroup,
  getUsersByGroup,
  getAdminsByGroup,
  getAllUserEvents,
  getUserEventByUserIdAndEventId,
  getAssistantUsersByEvent,
  getInterestedUsersByEvent,
  createUser,
  createUserGroup,
  createUserEvent,
  updateUser,
  updateUserGroup,
  updateUserEvent,
  deleteUser,
  deleteUserGroup,
  deleteUserEvent,
} = require("../msAPIs/users.js");

const resolvers = {
  //queries
  users: getAllUsers,
  userById: getUserByID,
  groupsByUser: getGroupsByUser,
  eventsByUser: getEventsByUser,
  userGroups: getAllUserGroups,
  usersGroupByUserAndGroup: getUsersGroupByUserAndGroup,
  usersByGroup: getUsersByGroup,
  adminsByGroup: getAdminsByGroup,
  userEvents: getAllUserEvents,
  userEventByuserIdAndEventId: getUserEventByUserIdAndEventId,
  assistantsByEvent: getAssistantUsersByEvent,
  interestedByEvent: getInterestedUsersByEvent,

  //mutations
  addUser: createUser,
  addUserGroup: createUserGroup,
  addUserEvent: createUserEvent,
  updateUser: updateUser,
  updateUserGroup: updateUserGroup,
  updateUserEvent: updateUserEvent,
  deleteUser: deleteUser,
  deleteUserGroup: deleteUserGroup,
  deleteUserEvent: deleteUserEvent,
};

module.exports = resolvers;
