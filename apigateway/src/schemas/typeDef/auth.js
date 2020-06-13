const authTypeDef = `

type AuthUser {
    id: Int
    username: String
    detail: String
}
input LogRegInput {
    idUser: String
    username: String
    password: String
}
type LoginTokens {
    refresh: String
    access: String
    detail: String
}
input AccessToken{
    token: String
}
input RefreshToken{
    refresh: String
}
type NewAccessToken{
    access: String
    detail: String
}`;

const authMutations = `
    addUserAuth(input: LogRegInput!): Message
    logUser(input: LogRegInput!): LoginTokens
    vrfTok(input: AccessToken!): String
    refreshTok(input: RefreshToken!): NewAccessToken
`;

const authQueries = `
    dummy: String
`;

module.exports = { authTypeDef, authMutations, authQueries };
