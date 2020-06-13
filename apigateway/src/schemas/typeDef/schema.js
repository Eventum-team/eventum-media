const {
  commentsTypeDef,
  commentsQueries,
  commentsMutations,
} = require("./comments.js");
const { authTypeDef, authMutations, authQueries } = require("./auth");
const { eventsTypeDef, eventsQueries, eventsMutations } = require("./events");
const { groupsTypeDef, groupsQueries, groupsMutations } = require("./groups");
const {
  groupViewsTypeDef,
  groupViewsQueries,
  groupViewsMutations,
} = require("./groupViews");
const {
  eventViewTypeDef,
  eventViewQueries,
  eventViewMutations,
} = require("./eventView");
const { mediaTypeDef, mediaMutations, mediaQueries } = require("./media");
const { usersTypeDef, usersQueries, usersMutations } = require("./users");
const {
  userViewTypeDef,
  userViewQueries,
  userViewMutations,
} = require("./userView");

const schema = `
${authTypeDef}
${commentsTypeDef}
${groupsTypeDef}
${eventsTypeDef}
${groupViewsTypeDef}
${eventViewTypeDef}
${usersTypeDef}
${userViewTypeDef}
${mediaTypeDef}

type Mutation {
    ${authMutations}
    ${commentsMutations}
    ${groupsMutations}
    ${eventsMutations}
    ${groupViewsMutations}
    ${eventViewMutations}
    ${usersMutations}
    ${userViewMutations}
    ${mediaMutations}
}
type Query {
    ${authQueries}
    ${commentsQueries}
    ${groupsQueries}
    ${eventsQueries}
    ${eventViewQueries}
    ${groupViewsQueries}
    ${usersQueries}
    ${userViewQueries}
    ${mediaQueries}
}
`;

module.exports = schema;
