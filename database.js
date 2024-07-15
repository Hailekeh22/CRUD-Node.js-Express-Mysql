import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.port,
  })
  .promise();

export async function allusers() {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    return result;
  } catch (e) {
    return e;
  }
}

export async function getuser(userid) {
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
      userid,
    ]);
    return result;
  } catch (e) {
    return e;
  }
}

export async function createuser(fname, lname, email, pwd) {
  try {
    await pool.query(
      "INSERT INTO users (firstname,lastname,email,password) VAlUES (?,?,?,?)",
      [fname, lname, email, pwd]
    );

    return "user Registerd Sucessfully";
  } catch (e) {
    return e;
  }
}

export async function deleteuser(id) {
  try {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);

    return "User Deleted sucessfully";
  } catch (e) {
    return e;
  }
}

export async function updateemail(newemail, id) {
  try {
    await pool.query("UPDATE users SET email = ? WHERE id = ?", [newemail, id]);

    return "Email updated Sucessfully";
  } catch (e) {
    return e;
  }
}
