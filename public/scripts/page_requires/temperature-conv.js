const socket = io('https://chemcharts-production.up.railway.app/');
//buttons
const convButton = $(".convert");
const resetButton = $(".reset");

//Inputfields
const celsius = $(".celsius");
const fahrenheit = $(".fahrenheit");
const kelvin = $(".kelvin");
const rankine = $(".rankine");

socket.on('connection');

// reset
resetButton.click(function(){
  $(".my-input").val("");
});

//convert
convButton.click(function(){

    if( celsius.val() != "" )
      socket.emit('convert-temp', {type : 'cel', value : celsius.val() });

    else if( fahrenheit.val() != "" )
      socket.emit('convert-temp', {type : 'far', value : fahrenheit.val() });

    else if( kelvin.val() != "" )
      socket.emit('convert-temp', {type : 'kel', value : kelvin.val() });

    else if( rankine.val() != "" )
      socket.emit('convert-temp', {type : 'ran', value : rankine.val() });
});

socket.on('converted-temperature', (convertion)=>{
  celsius.val(convertion.Cel);
  fahrenheit.val(convertion.Far);
  kelvin.val(convertion.Kel);
  rankine.val(convertion.Ran);
});
