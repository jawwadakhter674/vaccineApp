
document.getElementById('fullName').addEventListener("input", (e) => {
    var fullName = e.target.value
    console.log(fullName)
})
document.getElementById('email').addEventListener("input", (e) => {
    var email = e.target.value
    console.log(email)
})
document.getElementById('mobile').addEventListener("input", (e) => {
    var mobile = e.target.value
    console.log(mobile)
})
document.getElementById('password').addEventListener("input", (e) => {
    var password = e.target.value
    console.log(password)
})
document.getElementById('passwordConfirmed').addEventListener("input", (e) => {
    var passwordConfirmed = e.target.value
    console.log(passwordConfirmed)

})


document.getElementById('btn').addEventListener('click',
   
    function createEmail(e) {
        e.preventDefault();
        const db=firebase.firestore()
        db.collection("user").doc("US").set({
            name:fullName.value,
            email:email.value,
            mobile:mobile.value,
            password:password.value,

        })

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((result) => {

            //   alert("you successfully regesterd your account")
            window.location.href="login.html"



            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });


           




    }




)


