import User from "./models.js";

const createUser = async (firstname, lastname, email, password) => {
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    console.log("New user created:", newUser);
  } catch (error) {
    console.error("Error creating new user:", error);
  }
};

createUser("Johannes", "Kebede", "joh@gmail.com", "jojo123123");
