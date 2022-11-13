var tempConv = {
  Cel : 0,
  Far : 0,
  Kel : 0,
  Ran : 0
};

//helper-Functions
truncateDecimals = function (number) {
    var ans = Math.round(number*100);
    return ans/100;
};

// convertFunctions
//celsius converter
function convertCelsius(value)
{
  //making it into int
  value = value*1;
  let cel = value;

  var calVal = (value * 9)/5  + 32;
  calVal = truncateDecimals(calVal);
  let far = calVal;

  calVal = value + 273.15;
  calVal = truncateDecimals(calVal);
  let kel = calVal;

  calVal = ((value + 273.15)*9)/5;
  calVal = truncateDecimals(calVal);
  let ran = calVal;

  tempConv = {
    Cel : cel,
    Far : far,
    Kel : kel,
    Ran : ran
  }
  return tempConv;
};

//fahren converter
function convertFahrenheit(value)
{
  //making it into int
  value = value*1;
  let far = value;

  var calVal = ((value - 32)*5)/9;
  calVal = truncateDecimals(calVal);
  let cel = calVal;

  calVal = ((value + 459.67)*5)/9;
  calVal = truncateDecimals(calVal);
  let kel = calVal;

  calVal = value + 459.67;
  calVal = truncateDecimals(calVal);
  let ran = calVal;

  tempConv = {
    Cel : cel,
    Far : far,
    Kel : kel,
    Ran : ran
  }
  return tempConv;
};

function convertKelvin(value)
{
  //making it into int
  value = value*1;
  let kel = value;

  var calVal = value*1 - 273.15;
  calVal = truncateDecimals(calVal);
  let cel = calVal;

  calVal = (value*9)/5 - 459.67;
  calVal = truncateDecimals(calVal);
  let far = calVal;

  calVal = (value*9)/5;
  calVal = truncateDecimals(calVal);
  let ran = calVal;

  tempConv = {
    Cel : cel,
    Far : far,
    Kel : kel,
    Ran : ran
  }
  return tempConv;
};

function convertRankine(value)
{
  //making it into int
  value = value*1;
  let ran = value;

  var calVal = ((value*1 - 491.67)*5)/9;
  calVal = truncateDecimals(calVal);
  let cel = calVal;

  calVal = value*1 - 459.67;
  calVal = truncateDecimals(calVal);
  let far = calVal;

  calVal = (value*5)/9;
  calVal = truncateDecimals(calVal);
  let kel = calVal;

  tempConv = {
    Cel : cel,
    Far : far,
    Kel : kel,
    Ran : ran
  }
  return tempConv;
};


function conertTemperature(data){
  let type = data.type;
  let value = data.value;

  if(type == 'cel')
    return convertCelsius(value);
  else if(type == 'far')
    return convertFahrenheit(value);
  else if(type == 'kel')
    return convertKelvin(value);
  else if(type == 'ran')
    return convertRankine(value);
};

module.exports = conertTemperature;
