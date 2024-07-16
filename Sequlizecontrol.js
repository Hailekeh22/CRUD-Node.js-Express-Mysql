import { where } from "sequelize";
import { User, Course } from "./models.js";
import { sequelize } from "./usingSequelize.js";

const connection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};

export const createUser = async (firstname, lastname, email, password) => {
  connection();
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    return newUser;
  } catch (error) {
    console.error("Error creating new user:", error);
  }
};

export const createCourse = async (name, college) => {
  connection();
  try {
    const newCourse = await Course.create({
      name,
      college,
    });
    return newCourse;
  } catch (e) {
    console.log(e);
  }
};

export const findUserByName = async (name) => {
  const username = User.findOne({ where: { firstname: name } });
  if (username) {
    console.log("User Found");
    return username;
  }
  console.log("User Not Found");
  return null;
};

export const deleteUser = async (name) => {
  const deletedUser = User.destroy({ where: { firstname: name } });
  if (deleteUser) {
    console.log("User Deleted Sucessfully");
    return deletedUser;
  } else {
    console.log("User Not Found");
    return 0;
  }
};

export const updateName = async (name, newname) => {
  const updateName = await await User.update(
    { firstname: newname },
    {
      where: {
        firstname: name,
      },
    }
  );
  if (updateName) {
    return updateName;
  } else {
    console.log("User Not FOund");
    return 0;
  }
};
