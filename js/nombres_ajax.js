function select() {
	const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
		var texto= this.responseText;
		var lista=texto.split(",");
		var select=document.getElementById("creaSelect");
			for (i=0; i<lista.length; i++){
				var opcion=document.createElement("option");
				select.appendChild(opcion);
				opcion.innerHTML=lista[i];
			}

		}
	xhttp.open("GET", "../../nombres.txt", true);
	xhttp.send();

}