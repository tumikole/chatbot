// const jsonData = require("../messageConfiq.json");
const Data = require('../chatbot.json')

const chatbotData = Data.chatbot.chatbotMessage
const myRoutes = (app) => {
  app.get('/get_messages', (req, res) => {
    res.send(chatbotData);
    console.log('chatbotData', chatbotData)
  });
};

module.exports = { myRoutes };
