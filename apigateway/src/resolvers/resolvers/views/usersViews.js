const { throwCustomError } = require("../../../utils/errors");
const { tokenOutOfDate } = require("../../../utils/messages");
const { getOneProfile, createImage} = require("../../msAPIs/media");
const { loginVerify, createUserAuth } = require("../../msAPIs/auth");
const {
  getUserByID,
  getGroupsByUser,
  createUser,
} = require("../../msAPIs/users");
const { getEventsByOwnerID } = require("../../msAPIs/events");
const { getGroupByID } = require("../../msAPIs/groups");
const {photoRoute} = require("../../../ipconfig");

const userAuthcreate = async ({ input }) => {
  try {
    const userData = {
      input: {
        name: input.name,
        phone_number: input.phone_number,
        age: input.age,
        career: input.career,
        status: input.status,
      },
    };
    const r = await createUser(userData);
    const idUser = r.message.split(" ");
    const authData = {
      input: {
        username: input.username,
        password: input.password,
        idUser: idUser[idUser.length - 1],
      },
    };

    console.log(input.photo);
    

    if (input.photo){
      createImage({
        input:{
          profile: true,
          id_type: idUser[idUser.length - 1],
          path: input.photo
        }
      });
    }

    const res = await createUserAuth(authData);
    return res;
  } catch (error) {
    throwCustomError(error);
  }
};

const editProfile = async ({ token, input }) => {
  try {
    if (validToken(token, input.id)) {
      const message = await updateEvent({ id: id, input: input });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const userProfile = async ({ userId }) => {
  try {
    const user = await getUserByID({ userId: userId });

    const eventsCreated = await getEventsByOwnerID({
      type: "user",
      id: userId,
    });
    user.eventsCreated = eventsCreated;
    const groupsIdFollowing = await getGroupsByUser({ userId: userId });
    const groups = [];
    for (let i = 0; i < groupsIdFollowing.length; i++) {
      const group = await getGroupByID({
        groupId: groupsIdFollowing[i].group_id,
      });
      groups.push(group);
    }

    user.groupsFollowing = groups;
    const image = await getOneProfile({ id_type: userId });
    
    if (image.length){
      user.photo = photoRoute + image[image.length - 1].path;
    }
    return user;
  } catch (error) {
    throwCustomError(error);
  }
};

module.exports = {
  userAuthcreate,
  editProfile,
  userProfile,
};
