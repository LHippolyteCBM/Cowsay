let profil = {
    name: 'Hippolyte',
    campus: 'Paris'
};
const myInfos = () => {};
var cowsay = require("cowsay");
module.exports = myInfos;

console.log(cowsay.say({
	text : `Hello i'm ${profil.name} from ${profil.campus}.`,
	e : "oO",
	T : "U "
}));

