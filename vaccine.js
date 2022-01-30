
var idcard;

//for select value of cards
document.querySelector("select").addEventListener("change", (e) => {
    //  console.log(e.target.value);
    idcard = e.target.value
});




document.getElementById('btn').addEventListener('click',
    function getInformation(e) {
        e.preventDefault();


        var myname = document.getElementById("name").value;
        var year = document.getElementById("year").value;
        var number = document.getElementById("number").value
        var idNumber = document.getElementById("idNumber").value
        var como = document.getElementById("como").value

        //for select value of radio button
        var elements = document.getElementsByName('gender');
        var checkedButton;
        elements.forEach(e => {
            if (e.checked) {
                checkedButton = e.value;
                console.log(checkedButton)
            }
        });
        var elements = document.getElementsByName('status');
        var statuscheckedButton;
        elements.forEach(e => {
            if (e.checked) {
                statuscheckedButton = e.value;
                console.log(statuscheckedButton)
            }
        });



        
        // Add a new document in collection "Vaccine"
        const db= firebase.firestore()
        db.collection("Vaccine").add({
            name:myname,
            year:year,
            number:number,
            idNumber:idNumber,
            idcard:idcard,
            gender:checkedButton,
            comobidities:como,
            status:statuscheckedButton
            
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });









    }
)