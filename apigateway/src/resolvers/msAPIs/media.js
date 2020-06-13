const axios = require("axios");
const URI = require("../../server/msMedia");
const completeURI = `${URI}image`;
const completeProfileURI = `${URI}image/profile`;
const completeGroupURI = `${URI}image/group`;

const getAll = async () => {
  try {
    const { data } = await axios.get(`${completeURI}/`);

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

const getOneProfile = async ({ id_type }) => {
  try {
    const { data } = await axios.get(`${completeProfileURI}/${id_type}`);
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

const getAllGroup = async ({ id_group }) => {
  try {
    const { data } = await axios.get(`${completeGroupURI}/${id_group}`);
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

const getOneProfileGroup = async ({ id_group }) => {
  try {
    const { data } = await axios.get(`${completeGroupURI}/profile/${id_group}`);
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

const getAllEvent = async ({ id_type, id_event }) => {
  try {
    const { data } = await axios.get(`${completeProfileURI}/${id_type}/event/${id_event}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};//user

const getOneProfileEvent = async ({ id_type, id_event }) => {
  try {
    const { data } = await axios.get(`${completeProfileURI}/${id_type}/event/profile/${id_event}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};//user

const getAllGroupEvent = async ({ id_group, id_event }) => {
try {
  const { data } = await axios.get(`${completeGroupURI}/${id_group}/event/${id_event}`);
  return data;
} catch (error) {
  console.log(error);
}
};

const getOneGroupProfileEvent = async ({ id_group, id_event }) => {
try {
  const { data } = await axios.get(`${completeGroupURI}/${id_group}/event/profile/${id_event}`);
  return data;
} catch (error) {
  console.log(error);
}
};

//upload??
const createImage = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURI}/upload`, input);
    //console.log(data);
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

const deleteUserProfile = async ({ id_type, _id }) => {
  try {
    const { data } = await axios.delete(
      `${completeProfileURI}/delete/${id_type}/${_id}`
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

const deleteGroup = async ({ id_group, _id }) => {
  try {
    const { data } = await axios.delete(
      `${completeGroupURI}/delete/${id_group}/${_id}`
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

const deleteGroupProfile = async ({ id_group, _id }) => {
  try {
    const { data } = await axios.delete(
      `${completeGroupURI}/delete/profile/${id_group}/${_id}`
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

const deleteEvent = async ({ id_type, id_event, _id }) => {
  try {
    const { data } = await axios.delete(`${completeProfileURI}/${id_type}/event/delete/${id_event}/${_id}`);
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

const deleteEventProfile = async ({ id_type, id_event, _id }) => {
  try {
    const { data } = await axios.delete(`${completeProfileURI}/${id_type}/event/delete/profile/${id_event}/${_id}`);
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

const deleteGroupEvent = async ({ id_group, id_event, _id }) => {
try {
  const { data } = await axios.delete(`${completeGroupURI}/${id_group}/event/delete/${id_event}/${_id}`);
  return data;
} catch (error) {
  console.log(error);
}
};

const deleteGroupEventProfile = async ({ id_group, id_event, _id }) => {
try {
  const { data } = await axios.delete(`${completeGroupURI}/${id_group}/event/delete/profile/${id_event}/${_id}`);
  return data;
} catch (error) {
  console.log(error);
}
};

module.exports = {
  getAll,
  getOneProfile,
  getAllGroup,
  getOneProfileGroup,
  getAllEvent,
  getOneProfileEvent,
  getAllGroupEvent,
  getOneGroupProfileEvent,
  createImage,
  deleteUserProfile,
  deleteGroup,
  deleteGroupProfile,
  deleteEvent,
  deleteEventProfile,
  deleteGroupEvent,
  deleteGroupEventProfile
};
