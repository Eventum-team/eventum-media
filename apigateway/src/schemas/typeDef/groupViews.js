const groupViewsTypeDef = `
`;

const groupViewsQueries = `
  allGroups: [Group!]!
  groupProfile (id:ID!): Group
  filterGroups (name: String, id_type: Int): [Group!]!
`;

const groupViewsMutations = `
  editGroup(id_user: ID!,input: GroupInput, token: AccessToken): Message
  createUser(input: LogRegInput): Message
  createNewGroup (id_user:ID!, input: GroupInput, token: AccessToken ): Group
`;

module.exports = { groupViewsTypeDef, groupViewsQueries, groupViewsMutations };
