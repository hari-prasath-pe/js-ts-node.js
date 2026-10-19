function add(a, b) {return a + b };
function sub(a, b) {return a - b };
function mod(a,b) { return a - (b * Math.trunc(a / b)) };

module.exports.add = add;
module.exports.sub = sub;
if(false){ module.exports.mod = mod }

