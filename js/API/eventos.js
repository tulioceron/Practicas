//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		
		$('#tomarFoto').tap(function(){
			tomarFoto();
		});
		$('#Registrar').tap(function(){
			var even = $('#evento').val();
			var desc = $('#descripcion').val();
			var foto = $('#tomarFoto').attr('rel');
			if(even != '')
			{   var db = window.openDatabase("agenda", "1.0", "Agenda BD", 5000000);
				db.executeSql('CREATE TABLE IF NOT EXISTS eventos (id unique, evento, descripcion, fotos, estado)');
				db.executeSql('INSERT INTO eventos (evento, descripcion, fotos, estado) VALUES ("'+even+'", "'+desc+'", "'+foto+'", "0")');
			}
			else{	navigator.notification.alert('Nombre del evento requerido', null, 'Error de Registro', 'Aceptar');
				}
		});
		
		
		
	}, false);
});