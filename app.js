document.getElementById('email').addEventListener('input', (e) => {
  var email = e.target.value;
  // console.log(a)
})
document.getElementById('password').addEventListener('input', (e) => {
  var password = e.target.value;
  // console.log(a)
})



document.getElementById("btn").addEventListener('click',(e)=>{
  e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value,password.value)
  .then(()=>{
    // alert("login-successfully")
    document.getElementById('javaAlert').innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong> You successfully login to your account.
    
    <a href="./dashboard.html" style="text-decoration: none;">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    
    </button>
    </a>
  </div>
  `
  })
  .catch((error)=>{
alert(error.message)
  })

})
