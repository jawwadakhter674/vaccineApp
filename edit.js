// console.log("chalgya")

const db = firebase.firestore()
    var myname=document.getElementById("fullName")
    var email=document.getElementById("email")
    var number=document.getElementById("number")
    var password=document.getElementById("password")
    var newPassword=document.getElementById("newPassword")
    var confirmPassword=document.getElementById("confirmPassword")
   




// firebase.firestore().collection("user").get()
// .then((snapshots)=>{
// snapshots.docs.forEach(doc=>{
//     console.log(doc.data())
// 


// })
   

// }).catch((error)=>{
// console.log(error)
// })


var docRef = db.collection("user").doc("user");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        myname.value=doc.data().name
email.value=doc.data().email
number.value=doc.data().mobile
password.value=doc.data().password
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});







    document.getElementById("btn").addEventListener('click',
    function clickMe(e){
        e.preventDefault();

        const db=firebase.firestore()
        db.collection("user").doc("user").set({
            mobile:number.value,
            name:myname.value,
            email:email.value,
            password:confirmPassword.value,

        })
        .then(() => {
            alert("your data has been Updated");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });



  

    
}
    
    
    )




    

