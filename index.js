import express from "express";
import { port } from "./config.js";
import {
  allusers,
  createuser,
  deleteuser,
  getuser,
  updateemail,
} from "./database.js";
import { createCourse, createUser, findUserByName } from "./Sequlizecontrol.js";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const test = await allusers();
  res.send(test);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const test = await getuser(id);
  res.send(test);
});

app.post("/users/adduser", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  const test = await createuser(fname, lname, email, password);

  res.send(test);
});

app.post("/users/deleteuser", async (req, res) => {
  const id = req.body.id;
  const test = await deleteuser(id);

  res.send(test);
});

app.post("/users/updateemail", async (req, res) => {
  const id = req.body.id;
  const newemail = req.body.newemail;

  const test = await updateemail(newemail, id);
  res.send(test);
});

app.post("/createcourse", async (req, res) => {
  const name = req.body.name;
  const college = req.body.college;
  const result = await createCourse(name, college);
  res.send(result);
});

app.post("/createuser", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const pwd = req.body.pwd;

  const result = await createUser(fname, lname, email, pwd);
  res.send(result);
});

app.post("/finduser", async (req, res) => {
  const name = req.body.name;
  const result = await findUserByName(name);
  res.json(result.firstname + " " + result.lastname);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
