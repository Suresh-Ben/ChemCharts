const socket = io('localhost:3000');
socket.on('connection');
socket.emit('load-home');

//Variables
const graphContaier = $(".graphs-container");
const convContaier = $(".conv-container");

socket.on('load-graphs', (result)=>{
  for(let i = 0; i < result.length; i++)
    loadContaier(result[i], graphContaier);
});

socket.on('load-conv', (result)=>{
  for(let i = 0; i < result.length; i++)
    loadContaier(result[i], convContaier);
});


//Loading functions
function loadContaier(data, parent){

  let row = $((document.createElement('tr')));
    let name = $((document.createElement('td')));
      let link = $((document.createElement('a')));
      link.html(data.name);
      link.attr("href", '/'+data.link);
    name.attr("class", "table-name")
    name.append(link);

    let desc = $((document.createElement('td')));
    desc.html(data.description);
    desc.attr("class", "table-disc");
  row.append(name);
  row.append(desc);

  parent.append(row);
}
