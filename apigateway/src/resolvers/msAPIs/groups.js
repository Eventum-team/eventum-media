const axios = require("axios");
const { URI } = require("../../server/msGroups");
const completeURI = `${URI}groups`;
const completeFilterURI = `${URI}groups/filter`;
const completeTypeURI = `${URI}group-types`;

const getAllGroups = async () => {
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

const getGroupByID = async ({ groupId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${groupId}`);
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

const getGroupsByName = async ({ name }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}?name=${name}&id_type=`
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

const getGroupsByIdType = async ({ id_type }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}?name=&id_type=${id_type}`
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

const getGroupsByNameAndIdType = async ({ name, id_type }) => {
  try {
    if (name === undefined && id_type === undefined) {
      const { data } = await axios.get(completeURI);
      return data;
    }
    if (name === undefined) {
      const { data } = await axios.get(
        `${completeFilterURI}?name=&id_type=${id_type}`
      );
      return data;
    } else if (id_type === undefined) {
      const { data } = await axios.get(
        `${completeFilterURI}?name=${name}&id_type=`
      );
      return data;
    } else {
      const { data } = await axios.get(
        `${completeFilterURI}?name=${name}&id_type=${id_type}`
      );
      return data;
    }
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const createGroup = async ({ input }) => {
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

const updateGroup = async ({ id, input }) => {
  try {
    const { data, status } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver functio
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

const deleteGroup = async ({ id }) => {
  try {
    const { data, status } = await axios.delete(`${completeURI}/${id}`);
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

const getTypeById = async ({ id }) => {
  try {
    const { data } = await axios.get(`${completeTypeURI}/${id}`);
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


const getGroupTypes = async ({ id }) => {
  try {
    const { data } = await axios.get(`${completeTypeURI}`);
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
  getAllGroups,
  getGroupTypes,
  getGroupByID,
  getGroupsByName,
  getGroupsByIdType,
  getGroupsByNameAndIdType,
  createGroup,
  updateGroup,
  deleteGroup,
  getTypeById,
};
