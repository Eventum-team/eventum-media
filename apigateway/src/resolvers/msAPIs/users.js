const axios = require("axios");
const { URI } = require("../../server/msUsers");
const URIUsers = `${URI}users`;
const URIUserGroups = `${URI}user_groups`;
const URIUserEvents = `${URI}user_events`;

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(URIUsers);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getUserByID = async ({ userId }) => {
  try {
    const { data } = await axios.get(`${URIUsers}/${userId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getGroupsByUser = async ({ userId }) => {
  try {
    const { data } = await axios.get(`${URI}groups_by_user/${userId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getEventsByUser = async ({ userId }) => {
  try {
    const { data } = await axios.get(`${URI}events_by_user/${userId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getAllUserGroups = async () => {
  try {
    const { data } = await axios.get(URIUserGroups);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getUsersGroupByUserAndGroup = async ({ userId, groupId }) => {
  try {
    const { data } = await axios.get(`${URIUserGroups}/${userId}/${groupId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getUsersByGroup = async ({ groupId }) => {
  try {
    const { data } = await axios.get(`${URIUserGroups}/${groupId}`);

    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getAdminsByGroup = async ({ groupId }) => {
  try {
    const { data } = await axios.get(`${URI}admin_groups/${groupId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getAllUserEvents = async () => {
  try {
    const { data } = await axios.get(`${URIUserEvents}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getUserEventByUserIdAndEventId = async ({ userId, eventId }) => {
  try {
    const { data } = await axios.get(`${URIUserEvents}/${userId}/${eventId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getAssistantUsersByEvent = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${URI}assistant_events/${eventId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const getInterestedUsersByEvent = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${URI}interested_events/${eventId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const createUser = async ({ input }) => {
  try {
    const { data, status } = await axios.post(`${URIUsers}`, input);
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const createUserGroup = async ({ input }) => {
  try {
    const { data, status } = await axios.post(`${URIUserGroups}`, input);
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const createUserEvent = async ({ input }) => {
  try {
    const { data, status } = await axios.post(`${URIUserEvents}`, input);
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const updateUser = async ({ userId, input }) => {
  try {
    const { data, status } = await axios.put(`${URIUsers}/${userId}`, input);
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const updateUserGroup = async ({ userId, groupId, input }) => {
  try {
    const { data, status } = await axios.put(
      `${URIUserGroups}/${userId}/${groupId}`,
      input
    );
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const updateUserEvent = async ({ userId, eventId, input }) => {
  try {
    const { data, status } = await axios.put(
      `${URIUserEvents}/${userId}/${eventId}`,
      input
    );
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const deleteUser = async ({ userId }) => {
  try {
    const { data, status } = await axios.delete(`${URIUsers}/${userId}`);
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const deleteUserGroup = async ({ userId, groupId }) => {
  try {
    const { data, status } = await axios.delete(
      `${URIUserGroups}/${userId}/${groupId}`
    );
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const deleteUserEvent = async ({ userId, eventId }) => {
  try {
    const { data, status } = await axios.delete(
      `${URIUserEvents}/${userId}/${eventId}`
    );
    return {
      message: data,
      status: status,
    };
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  getGroupsByUser,
  getEventsByUser,
  getAllUserGroups,
  getUsersGroupByUserAndGroup,
  getUsersByGroup,
  getAdminsByGroup,
  getAllUserEvents,
  getUserEventByUserIdAndEventId,
  getAssistantUsersByEvent,
  getInterestedUsersByEvent,
  createUser,
  createUserGroup,
  createUserEvent,
  updateUser,
  updateUserGroup,
  updateUserEvent,
  deleteUser,
  deleteUserGroup,
  deleteUserEvent,
};
