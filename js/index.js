(function () {
  // some initiation code

const notice = document.querySelector(".notice");
const deleteBtn = document.querySelector(".notice__close");

setTimeout(function(args) {
	notice.style.display = "flex";
}, 5000);

deleteBtn.addEventListener('click', () => {
	notice.style.display="none";
});

})();