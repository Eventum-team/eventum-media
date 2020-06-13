const eventsTypeDef = `
type Message {
    message: String
    status: Int
}
input EventInput {
    id: ID
    ownerType: String
    ownerId: Int!
    status: String
    eventType: String
    name: String!
    eventStartDate: String!
    eventFinishDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
}
type Event {
    id: ID!
    ownerType: String
    status: String
    eventType: String
    ownerId: Int!
    name: String!
    eventStartDate: String!
    eventFinishDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
    comments: [Comment]
    followers: Int
    assistant: [User]
    interested: [User]
    photo: String
}
`;

const eventsQueries = `
    events: [Event] 
    eventByID(eventId: ID!): Event
    eventsByStatus(status: String!):[Event] 
    eventsByOwnerType(ownerType: String!):[Event] 
    eventsByRangeDate(start: String!, end:String!):[Event] 
    eventsByOwnerID(type: String!, id: Int!):[Event] 
    `;
// eventsByName(name: String!):[Event]

const eventsMutations = `
`;
// updateEvent(id: ID!,input: EventInput ): Message
// deleteEventById(id: ID!): Message
// addEvent(input: EventInput ): Message

module.exports = { eventsTypeDef, eventsQueries, eventsMutations };
