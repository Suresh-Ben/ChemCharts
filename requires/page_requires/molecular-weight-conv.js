function isNumber(character){
	if(character >= '0' && character <= '9') return true;
	return false;
}
function isSmall(character){
	if(character >= 'a' && character <= 'z') return true;
	return false;
}

function calculateDots(formula){
  for(int i = 0; i < formula.length; i++)
  {
    let character = formula[i];
    let pre = "";
    let post = "";
    if(character == ".")
    {

    }
  }
}

function calculateWeight(formula){
  formula = calculateDots(formula);
}
module.exports = calculateWeight;
