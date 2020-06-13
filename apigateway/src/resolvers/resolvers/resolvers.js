const comments = require("./commentsResolver");
const auth = require("./authResolver");
const events = require("./eventsResolver");
const groups = require("./groupsResolver");
const users = require("./usersResolver");
const groupViews = require("./views/groupsViews");
const eventsViews = require("./views/eventsViews");
const usersViews = require("./views/usersViews");
const userViews = require("./views/usersViews");
const media = require("./mediaResolvers");

const resolvers = {
  ...comments,
  ...auth,
  ...events,
  ...groups,
  ...users,
  ...media,
  ...groupViews,
  ...eventsViews,
  ...usersViews,
  ...userViews,
};

module.exports = resolvers;
