let session = new Session();
session = session.getSession();
if(session !== ""){
  window.location.href = "hexa.html"
}

document.querySelector("#registracija").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "block";
});

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector(".custom-modal").style.display = "none";
});

let config = {
  "korisnicko-ime": {
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  register_email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },
  register_lozinka: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "ponovi-lozinku",
  },
  "ponovi-lozinku": {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: "register_lozinka",
  },
};

let validator = new Validator(config, "#registrationForm");
document.querySelector("#registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.getElementById("korisnicko-ime").value;
    user.email = document.getElementById("register_email").value;
    user.password = document.getElementById("register_lozinka").value;
    user.create();
} else {
    alert("Ne e okej popolneto login!");
}
});

document.querySelector('#loginForm').addEventListener('submit', e =>{
e.preventDefault();
let email = document.getElementById('login-email').value;
let password = document.getElementById('login-lozinka').value;

let user = new User();
user.email = email;
user.password = password;
user.login()
})