(function () {
  // some initiation code

// const notice = document.querySelector(".notice");
// const deleteBtn = document.querySelector(".notice__close");

// setTimeout(function(args) {
// 	notice.style.display = "flex";
// }, 5000);

// deleteBtn.addEventListener('click', () => {
// 	notice.style.display="none";
// });

})();


(function () {

	const hamburger = document.querySelector('.navbar__hamburger');
	const crossBtn = document.querySelector('.cross');
	const navbarVerticalItem = document.querySelector('.navbar__items--vertical');

	hamburger.addEventListener('click', (e) => {
		navbarVerticalItem.style.display = 'flex';
	});

	crossBtn.addEventListener('click', (e) => {
		navbarVerticalItem.style.display = 'none';
	});



})();




// loading animation before page loads in javascript
window.addEventListener('load', (event) => {
	document.querySelector('.loader-curtain').style.display='none';
})