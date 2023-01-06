const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersControllers = {
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  newUSer: (req, res) => {
    console.log(req.body);
    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }

    let newPUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      image,
    };
    users.push(newPUser);
    //console.log("products", products);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    res.redirect("user/login");
  },
};

module.exports = usersControllers;
