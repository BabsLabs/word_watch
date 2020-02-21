// /*jshint esversion: 6 */
//
// const breakDownButton = document.getElementById('breakDownButton');
// let topWord = document.getElementById('topWord');
// let wordDictionaryHash = Object.create(null);
//
// breakDownButton.addEventListener('click', ()=> {
//   const textBoxContent = document.getElementById('textInputArea').value;
//
//   if (textBoxContent in wordDictionaryHash === false) {
//     wordDictionaryHash[`${textBoxContent}`] = 1;
//   } else {
//     wordDictionaryHash[`${textBoxContent}`] = (wordDictionaryHash[`${textBoxContent}`] + 1);
//   }
//
//   x = Object.keys(wordDictionaryHash).reduce(function(a, b){ return wordDictionaryHash[a] > wordDictionaryHash[b] ? a : b });
//   topWord.innerHTML = x;
//   console.log(wordDictionaryHash);
// });
