const lbloffline = document.getElementById('lbloffline');
const lblonline = document.getElementById('lblonline');


// conecto mi socket
const socket = io();

socket.on('connect', ()=> {
  console.log('conectado');
  lbloffline.style.display ='none';
  lblonline.style.display ='';
});

socket.on('disconnect', ()=> {
  console.log('desconectado');
  lblonline.style.display ='none';
  lbloffline.style.display ='';
});