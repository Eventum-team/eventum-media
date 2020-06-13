const { throwCustomError } = require("../../../utils/errors");
const { tokenOutOfDate } = require("../../../utils/messages");
const { getCommentsByID } = require("../../msAPIs/comments");
const { getAllEvent, getOneProfileEvent, getOneGroupProfileEvent} = require("../../msAPIs/media");
const {photoRoute} = require("../../../ipconfig");

const {
  getEventsByRangeDate,
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEventById,
  getEventsByOwnerID,
  getEventByID,
  getEventsByName,
} = require("../../msAPIs/events");

const {
  getAssistantUsersByEvent,
  getInterestedUsersByEvent,
} = require("../../msAPIs/users");

const validToken = async (token, id) => {
  try {
    const idToken = await loginVerify({ input: token });
    return idToken === id.toISOString();
  } catch (error) {
    throwCustomError(error);
  }
};

const buildEvents = async (events) => {
  try {
    for (let i = 0; i < events.length; i++) {
      const id = events[i].id;
      const assistant = await getAssistantUsersByEvent;
      ({ eventId: id });
      events[i].followers = assistant.length;
      getOneProfileEvent

      //media
      const image = await  getOneGroupProfileEvent({ 
        id_event: id,
        id_group: events[i].ownerId
      });
      
      if (image.length){
        events[i].photo = photoRoute + image[0].path;
      }
      
    }
    return events;
  } catch (error) {
    throwCustomError(error);
  }
};

const eventPhoto = (eventId) => {
  // Media
  return "path/image.png";
};

const todayEvents = async () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = `${now.toISOString().substring(0, 22)}Z`;
  now.setHours(23, 59, 59, 0);
  const end = `${now.toISOString().substring(0, 22)}Z`;
  try {
    const events = await getEventsByRangeDate({ start: start, end: end });
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const allEvents = async () => {
  try {
    const events = await getAllEvents();
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const filterEvents = async ({ id_type, name }) => {
  try {
    const ok = await loginVerify({ input: token });
    if (ok === "ok") {
      const events = await updateGroup({ id: input.id_group, input: input });
      // users-ms

      return events;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const eventsByGroup = async ({ id_group }) => {
  try {
    const events = await getEventsByOwnerID({ id: id_group, type: "group" });
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const eventsByName = async (name) => {
  try {
    const events = await getEventsByName(name);
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const createEvent = async ({ input }) => {
  try {
    const message = await addEvent({ input: input });
    return message;
  } catch (error) {
    throwCustomError(error);
  }
};

const editEvent = async ({ id, input, token }) => {
  try {
    if (validToken(token, input.ownerId)) {
      const message = await updateEvent({ id: id, input: input });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const deleteEvent = async ({ id, token, ownerId }) => {
  try {
    if (validToken(token, ownerId)) {
      const message = await deleteEventById({ id: id });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const eventProfile = async ({ eventId, userId }) => {
  try {
    const event = await getEventByID({ eventId: eventId });
    const comments = await getCommentsByID({ eventId: eventId, usrId: userId });
    event.comments = comments;
    const interested = await getInterestedUsersByEvent({ eventId: eventId });
    event.interested = interested;
    const assistant = await getAssistantUsersByEvent({ eventId: eventId });
    event.assistant = assistant;

    
    const image = await  getOneGroupProfileEvent({ 
      id_event: eventId,
      id_group: event.ownerId
    });

    if (image.length){
      event.photo = photoRoute + image[0].path;
    }
    
    return event;
  } catch (error) {
    throwCustomError(error);
  }
};

module.exports = {
  todayEvents,
  allEvents,
  createEvent,
  editEvent,
  deleteEvent,
  eventsByGroup,
  eventProfile,
  eventsByName,
};
