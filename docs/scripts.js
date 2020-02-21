/*jshint esversion: 6 */
let topWord = document.getElementById('topWord');

window.onload = function() {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word') .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(Object.keys(myJson.word));
      topWord.innerHTML = Object.keys(myJson.word);
    });
};
const breakDownButton = document.getElementById('breakDownButton');

breakDownButton.addEventListener('click', async ()=> {
  const textBoxContent = document.getElementById('textInputArea').value;
  console.log(textBoxContent);
  let data = { "word": { textBoxContent: "sample" } };
  await fetch("https://wordwatch-api.herokuapp.com/api/v1/words", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => {
    console.log("Request complete! response:", res);
  });

  await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word') .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(Object.keys(myJson.word));
      topWord.innerHTML = Object.keys(myJson.word);
    });
});
