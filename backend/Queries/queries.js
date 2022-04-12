const { getClient } = require("../database/db");

const sqlQueries = async (statementQuery, parameters) => {
  console.log("res");
  const client = await getClient();
  try {
    res = await client.query(statementQuery, parameters);
    return res.rows;
  } catch (error) {
    console.log(error);
    client.release();
  }
};

// const getUsernames = async (username) => {
//   let statementQuery = "SELECT * FROM usernames WHERE username = $1";
//   let parameters = [username];
//   return await sqlQueries(statementQuery, parameters);
// };

// const getMessage = async (message) => {
//   let statementQuery = "SELECT * FROM messages WHERE message = $1";
//   let parameters = [username];
//   return await sqlQueries(statementQuery, parameters);

// }; 


// const addMessage = async (message) => {
//   let statementQuery = "INSERT  INTO messages (message) VALUES ($1) RETURNING message" ;
//   let parameters = [message];
//   return await sqlQueries(statementQuery, parameters);
// };

const addUser = async (name, email)  => {
  let statementQuery = `INSERT INTO users (name , email) VALUES ($1 , $2) RETURNING name , email` ;
  let parameters = [name , email];
  return await sqlQueries(statementQuery, parameters);
};



module.exports = { /*getUsers,*/ addUser , /*addMessage*/};
