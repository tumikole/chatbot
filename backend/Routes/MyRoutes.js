const jsonData = require("../messageConfique.json")

const myRoutes = (app) => {
  app.get('/get_messages', (req, res) => {
    let data = jsonData.siaChatbotTree[0]
    res.send(data)
    
  })
};

module.exports = { myRoutes };
