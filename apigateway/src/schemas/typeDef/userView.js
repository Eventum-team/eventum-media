const userViewTypeDef = `
`;

const userViewQueries = `
userProfile(userId: Int): User
  `;

const userViewMutations = `
userAuthcreate(input: UserInput): Message
editProfile(input: UserInput): Message
`;

module.exports = { userViewTypeDef, userViewQueries, userViewMutations };
