import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

export async function allusers() {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    console.log(result);
  } catch (e) {
    console.log("Error Happend - " + e);
  }
}

export async function getuser(userid) {
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
      userid,
    ]);
    console.log(result);
  } catch (e) {
    console.log("Error happend - " + e);
  }
}

export async function createuser(fname, lname, email, pwd) {
  try {
    await pool.query(
      "INSERT INTO users (firstname,lastname,email,password) VAlUES (?,?,?,?)",
      [fname, lname, email, pwd]
    );

    console.log("user Registerd Sucessfully");
  } catch (e) {
    console.log("Can not Register user " + e);
  }
}

export async function deleteuser(id) {
  try {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);

    console.log("User Deleted sucessfully");
  } catch (e) {
    console.log("Can not Delete the user - " + e);
  }
}

async function updateemail(newemail, id) {
  try {
    await pool.query("UPDATE users SET email = ? WHERE id = ?", [newemail, id]);

    console.log("Email updated Sucessfully");
  } catch (e) {
    console.log("Can not update the email - " + e);
  }
}

// allusers();

getuser(2);
// createuser("JOnathan", "Belete", "JOnathan@yahoo.com", "234234");
