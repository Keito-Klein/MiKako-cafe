const list = document.querySelector(".navbar-navigate");
const navbar = document.querySelector("#nav-menu");

/*Listener on navbar*/
navbar.onclick = () => {
	list.classList.toggle('active')
}


/*Listener close navbar*/
document.addEventListener('click', function(e) {
	if(!list.contains(e.target) && !navbar.contains(e.target)) {
		list.classList.remove('active')
	}
})