/* questo è il possibile codice per la compatibilità coi browser:

var xmlhttp;
	 if (window.XMLHttpRequest) {
	    // IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
	 } else {
	    // IE6, IE5
			xmlhttp = new ActiveX0bject("Microsoft.XMLHTTP");
	 }
	 
	 Per istanziare e inviare richieste al server:
	 http_request.open('POST', 'url_del_server', true);
http_request.send(null);
	
	Possiamo impostare una funzione che verrà chiamata quando il server restituirà una
risposta

var http_request = new XMLHttpRequest();
http_request.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
alert(this.responseText);
}
};
http_request.open("POST", "ajax_info.txt", true);
http_request.send();
	 
	 
	 QUESTO INVECE è L'ALTERNATIVA PER AVVIARE QUELL'ISTRUZIONE CHE, UNA VOLTA IMESSI I DATI, DOVREBBE CHIUDERE LA MODALE:
	
$(document).ready(function() {

    $("#Login").click(function() {
        var email = $("#inputEmail4").val(); /*è bastato aggiungere l'attributo "value" ai due input nell'HTML;
        var pwd = $("#inputPassword4").val();

        if (!email || !pwd || email.lenght < 5 || pwd.lenght < 5) {
            $("#mio_toast .toast-header h3").html("Errore");
            $("#mio_toast .toast-body").html("Devi inserire tutti i campi della login");
            $("#mio_toast").toast("show");
            return false;
        } else {
         location.href="Prenotazione.html"  /* funziona, ma perchè credo che per ora sia un codice incompleto, non avendo ancora realizzato la parte php, per questo forse AJAX non funziona.
	}}
    )}); 

	 
	 */


$(document).ready(function() {

    $("#Login").click(function() {
        var email = $("#inputEmail4").val();
        var pwd = $("#inputPassword4").val();

        if (!email || !pwd || email.lenght < 5 || pwd.lenght < 5) {
            $("#mio_toast .toast-header h3").html("Errore");
            $("#mio_toast .toast-body").html("Devi inserire tutti i campi della login");
            $("#mio_toast").toast("show");
            return false;
        } else {
            $.ajax({
                url: "../HTML/Prenotazione.html",
                type: "POST",
                data: { mail: email, password: pwd },
                success: function(response) {
                    if (response && response.resp == "OK") {
                        $("#modal").modal("hide");
                    }
                },
                error: function() {
                    console.log("Errore");
                }
            });
	}}
    )}); 


