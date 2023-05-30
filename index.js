let openbutton = document.getElementById("main-button");
let dialog = document.getElementById("main-dialog");
let closeButton = document.getElementById("close-button");

openbutton.onclick = () => {
  dialog.showModal();
};

closeButton.onclick = () => {
  dialog.close();
};
