const config = require('../config.json')

module.exports = (player) => {
  switch (player) {
    case "karen":
      return { id: config.ids.karen, cor: "#7030A0" };
    case "kevin":
      return { id: config.ids.kevin, cor: "#FA6520" };
    case "sinc":
      return { id: config.ids.sinc, cor: "#4B4A4A" };
    case "marks":
      return { id: config.ids.marks, cor: "#40B5AD" };
    case "lucas":
      return { id: config.ids.lucas, cor: "#F3D033" };
    case "inshan":
      return { id: config.ids.inshan, cor: "#1A6310" };
    case "ellenb":
      return { id: config.ids.ellenb, cor: "#ACC1D1" };
    case "iury":
      return { id: config.ids.iury, cor: "#FD671C" };
    case "chico":
      return { id: config.ids.alek, cor: "#DC1B0E" };
    case "ana":
        return { id: config.ids.ana, cor: "#006400" };
    case "thiago":
        return { id: config.ids.thiago, cor: "#7E0A0A" };
    case "ian":
      return { id: config.ids.ian, cor: "#FFC300" }
    default:
      return { id: 0 };
  }
};
