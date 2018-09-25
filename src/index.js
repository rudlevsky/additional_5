module.exports = function check(str, bracketsConfig) {
  let allBrackets = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (str[j] === bracketsConfig[i][1]) {
				allBrackets.pop();
				continue;
			}
			if (str[j] === bracketsConfig[i][0]) {
				allBrackets.push(str[j]);
				continue;
			}
		}
  }
  
	if (allBrackets[0] == undefined) {
    return true;
  }
	else return false;
}
