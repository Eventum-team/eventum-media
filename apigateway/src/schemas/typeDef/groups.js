const groupsTypeDef = `
input GroupInput {
    id_group: Int
    id_type: Int!
    name: String!
    description: String!
    contact_number: String!
    photo: String
    status: String!
}
type Group {
    id_group: ID
    id_type: Int
    type: String
    name: String
    description: String
    created_date: String
    contact_number: String
    status: String
    followers: Int
    events: [Event]
    admins: [User]
    photo: String
}

type Type {
    id_type: ID!
    name: String!
}
`;

const groupsQueries = `
    groupTypes: [Type!]!
    groupByID(groupId: ID!): Group!
    typeById(id: ID!): Type
`;

const groupsMutations = `
    deleteGroup(id: ID!): Message
`;

module.exports = { groupsTypeDef, groupsQueries, groupsMutations };
