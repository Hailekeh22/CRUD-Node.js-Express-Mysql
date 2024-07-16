import { User, Course } from "./models.js";
import { sequelize } from "./usingSequelize.js";

export const createUser = async (firstname, lastname, email, password) => {
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
  } finally {
    sequelize.close();
  }
};

export const createCourse = async (name, college) => {
  try {
    const newCourse = await Course.create({
      name,
      college,
    });
    return newCourse;
  } catch (e) {
    console.log(e);
  } finally {
    sequelize.close();
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
