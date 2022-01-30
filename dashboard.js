
const db=firebase.firestore()
var docRef = db.collection("user").doc("user");
const id_name = document.getElementById("id_name")

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());

        document.getElementById('yourName').innerHTML=`Hi ${doc.data().name}`
        id_name.innerHTML=`Hi  ${doc.data().name}`
 
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const array_of_object=[]
function purchase(e){
//    console.log(e.parentElement.parentElement)
   const parent=e.parentElement.parentElement
   image_src=parent.firstElementChild.src
   card_title=parent.lastElementChild.firstElementChild.innerText

   array_of_object.push({
  image_src: image_src,
  card_title:card_title

   })
   localStorage.setItem("items",JSON.stringify(array_of_object))
}

const add_to_Cart = document.getElementById("add_to_Cart")
add_to_Cart.addEventListener("click",()=>{
    window.location.href="store.html"
})

