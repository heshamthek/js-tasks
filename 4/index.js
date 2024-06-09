const button = document.getElementById('btn');
button.addEventListener('click', function() {
    alert('ok');
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("pp1").textContent = "new";
});


document.getElementById("div1").addEventListener("dblclick", function() {
    this.style.backgroundColor = "lightgreen";
});



document.getElementById("hdiv").addEventListener("mouseenter", function() {
    this.textContent = "Text";
});



const form = document.getElementById("formm");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function(event) {
    event.preventDefault();  
    console.log("submission");
});

nameInput.addEventListener("blur", function() {
    this.style.borderColor = "black"; 
});




document.getElementById("scroll").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
    });
});

