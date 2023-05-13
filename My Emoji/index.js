const inputBtn = document.getElementById("input-btn");
const addToEnd = document.getElementById("addToEnd");
const addToBeginning = document.getElementById("addToBeginning");
const emoji = document.getElementById("emojis");
const removeFromEnd = document.getElementById("removeFromEnd");
const removeFromBeginning = document.getElementById("removeFromBeginning");
var emojiArray = ["😘", "🎉", "✨"];

function renderEmoji() {
  emoji.innerHTML = "";
  for (var i = 0; i < emojiArray.length; i++) {
    var emj = document.createElement("p");
    emj.innerHTML = emojiArray[i];
    emoji.append(emj.innerHTML);
  }
}



addToEnd.addEventListener("click", () => {
  emojiArray.push(inputBtn.value);
  inputBtn.value = "";
  renderEmoji();
});
addToBeginning.addEventListener("click", () => {
  emojiArray.unshift(inputBtn.value);
  inputBtn.value = "";
  renderEmoji();
});

removeFromEnd.addEventListener("click", () => {
  emojiArray.pop();
  renderEmoji();
});
removeFromBeginning.addEventListener("click", () => {
  emojiArray.shift();
  renderEmoji();
});
