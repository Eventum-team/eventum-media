const eventViewTypeDef = `
`;

const eventViewQueries = `
  todayEvents: [Event]
  allEvents: [Event]
  eventsByGroup(id_group: ID!): [Event] 
  eventProfile(eventId: ID!, userId: ID!): Event
  eventsByName(name: String!): [Event]
  `;

const eventViewMutations = `
  createEvent(input: EventInput): Message
  editEvent(token: AccessToken,input: EventInput, id:ID!): Message
  deleteEvent(token: AccessToken,id: ID!,ownerId: ID!): Message
`;

module.exports = { eventViewTypeDef, eventViewQueries, eventViewMutations };
