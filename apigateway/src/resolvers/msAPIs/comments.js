const axios = require("axios");
const URI = require("../../server/msComments");
const completeURI = `${URI}comment`;
const completeURIReact = `${URI}react`;

const getCommentsByID = async ({ eventId, usrId }) => {
  console.log({ eventId, usrId });

  try {
    const { data } = await axios.get(`${completeURI}/${eventId}/${usrId}`);
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

const createComment = async ({ input }) => {
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

const updateComment = async ({ id, input }) => {
  try {
    const { data } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver function
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

const deleteComment = async ({ id }) => {
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

const reactComment = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURIReact}`, input); // event obj structured define in resolver function
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

const unreactComment = async ({ id, idusr }) => {
  try {
    const { data } = await axios.delete(`${completeURIReact}/${id}/${idusr}`);

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
  getCommentsByID,
  createComment,
  updateComment,
  deleteComment,
  reactComment,
  unreactComment,
};
