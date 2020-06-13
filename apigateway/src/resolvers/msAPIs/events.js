const axios = require("axios");
const URI = require("../../server/msEvent");
const completeURI = `${URI}events`;
const completeFilterURI = `${URI}events/filter`;

const getAllEvents = async () => {
  try {
    const { data } = await axios.get(completeURI);
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

const getEventByID = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${eventId}`);
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

const getEventsByStatus = async ({ status }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/status?status=${status}`
    );
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

const getEventsByOwnerType = async ({ ownerType }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/ownerType?type=${ownerType}`
    );
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

const getEventsByName = async ({ name }) => {
  try {
    const { data } = await axios.get(`${completeFilterURI}/name?name=${name}`);
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

const getEventsByRangeDate = async ({ start, end }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/rangeDate?start=${start}&end=${end}`
    );
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

const getEventsByOwnerID = async ({ type, id }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/owner?type=${type}&id=${id}`
    );
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

const addEvent = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURI}`, input); // event obj structured define in resolver function
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

const updateEvent = async ({ id, input }) => {
  try {
    const { d } = await axios.put(`${completeURI}/${id}`, input);
    return {
      message: "Event deleted successfully",
      status: 200,
    };
    // return data;
  } catch (error) {
    return {
      message: "Event deleted successfully",
      status: 200,
    };
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const deleteEventById = async ({ id }) => {
  try {
    const { data } = await axios.delete(`${completeURI}/${id}`);
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

module.exports = {
  getAllEvents,
  getEventByID,
  getEventsByStatus,
  getEventsByOwnerType,
  getEventsByName,
  getEventsByRangeDate,
  getEventsByOwnerID,
  addEvent,
  updateEvent,
  deleteEventById,
};
