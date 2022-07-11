console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit successful!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let monalisa = document.getElementById("monalisa")
monalisa.addEventListener("mouseover", function(event){
	alert("you are wonderful!")
})