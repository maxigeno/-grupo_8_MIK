const courses = [
  {
    id: 1,
    name: "futbol",
    description: "asdasdasdasdxzcvxcvxcv",
    price: 258.52,
  },
  {
    id: 2,
    name: "tennis",
    description: "asdasdasdasdxzcvxcvxcv",
    price: 258.52,
  },
  {
    id: 2,
    name: "voley",
    description: "asdasdasdasdxzcvxcvxcv",
    price: 258.52,
  },
];


const mainControllers = {
  index: (req, res) => {
    res.render("index", { mik: "ok" });
  },
  detalle: (req, res) => {
    let idParam = req.params.id;
    let course = courses.find((course) => course.id === idParam);
    res.render("productDetail", { mik: "ok", course });
  },
  login: (req, res) => {
    res.render('login');
  },
  register: (req, res) =>{
    res.render('register');
  },
  productCart: (req, res) =>{
    res.render('productCart');
  },
  productDetail: (req, res) =>{
    res.render('productDetail');
  },
  productIndex: (req, res) =>{
    res.render('productIndex');
  },
  productCreate: (req, res) =>{
    res.render('productCreate');
  },
};

module.exports = mainControllers;
