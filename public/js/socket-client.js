const lbloffline = document.getElementById("lbloffline");
const lblonline = document.getElementById("lblonline");
const txtMessage = document.getElementById("txtMessage");
const btnSend = document.getElementById("btnSend");


// conecto mi socket
const socket = io();

socket.on("connect", () => {
  console.log("conectado");
  lbloffline.style.display = "none";
  lblonline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("desconectado");
  lblonline.style.display = "none";
  lbloffline.style.display = "";
});

btnSend.addEventListener("click", () => {
  const msj = txtMessage.value;
  const payload = {
    msj,
    id: 1234,
    date: new Date().getTime()
  };

  // enviar un msj al servidor
  socket.emit("send-message", payload);
});
