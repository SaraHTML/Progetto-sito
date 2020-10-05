
 var httpReq = new XMLHttpRequest(); 
 /*ora devo specificare cosa devo fare quando ricevo risposta dal server */
 httpReq.onreadystatechange = function(){
 if(httpReq.readyState == 4 && httpReq.status == 200){
 console.log(httpReq.responseText);
 }
 }
 
 httpReq.open("POST", "login.php");
 httpReq.send(json); 



$("#login").click(function(){
var email = $("#email").val();
var pwd = $("#password").val();

if(!email || !pwd || email.lenght < 5 || pwd.lenght <5){   /*se email è vuota questo mi sa che fa inviare i dati con AJAX */
alert("Devi inserire tutti i campi");
return false;
} else{
$ajax({
url: "login.php",
type: "POST",
data: JSON.stringify({mail: email, password: pwd}),
success: function(response){
if(response && res.resp=="OK")
location.href = "Prenotazione.html");
document.getElementById("offusco")style.display="none";
},
}
error: function(){
console.log("ERROR");
}
};
var accesso =$("#log").val();
if (response && res.resp=="OK"){
accesso.innerHTML = "Benvenuto!";} ;
});



