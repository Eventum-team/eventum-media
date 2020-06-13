const usersTypeDef = `
type User {
    id: ID!
    
    name: String!
    phone_number: String!
    age: Int
    career: String
    status: String
    created_at: String!
    updated_at: String!
    groupsFollowing: [Group]
    eventsCreated: [Event]
    photo: String
}
input UserInput {
    username: String
    password: String
    name: String!
    phone_number: String!
    age: Int
    career: String
    status: String
    photo: String
}
type UserGroup {
    user_id: Int!
    group_id: Int!
    status: String!
    created_at: String!
    updated_at: String!
}
input UserGroupInput {
    user_id: Int!
    group_id: Int!
    status: String!
}
input UserGroupInputUpdate {
    status: String!
}
type UserEvent {
    user_id: Int!
    event_id: Int!
    assistance: Boolean!
    interested: Boolean!
    created_at: String!
    updated_at: String!
}
input UserEventInput {
    user_id: Int!
    event_id: Int!
    assistance: Boolean!
    interested: Boolean!
}
input UserEventInputUpdate {
    assistance: Boolean!
    interested: Boolean!
}
`;

const usersQueries = `
    users: [User!]!
    userById(userId: Int): User!
    groupsByUser(userId: Int): [UserGroup!]!
    eventsByUser(userId: Int): [UserEvent!]!
    userGroups: [UserGroup!]!
    usersGroupByUserAndGroup(userId: Int, groupId: Int): UserGroup!
    usersByGroup(groupId: Int): [User!]!
    adminsByGroup(groupId: Int): [User!]!
    userEvents: [UserEvent!]!
    userEventByuserIdAndEventId(userId: Int, eventId: Int): UserEvent!
    assistantsByEvent(eventId: Int): [User!]!
    interestedByEvent(eventId: Int): [User!]!
`;

const usersMutations = `
    addUser(input: UserInput): Message!
    addUserGroup(input: UserGroupInput): Message!
    addUserEvent(input: UserEventInput): Message!
    updateUser(userId: Int, input: UserInput): Message!
    updateUserGroup(userId: Int, groupId: Int, input: UserGroupInputUpdate): Message!
    updateUserEvent(userId: Int, eventId: Int, input: UserEventInputUpdate): Message!
    deleteUser(userId: Int): Message!
    deleteUserGroup(userId: Int, groupId: Int): Message!
    deleteUserEvent(userId: Int, eventId: Int): Message!
`;

module.exports = { usersTypeDef, usersQueries, usersMutations };
