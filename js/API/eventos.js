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
				{ var db = window.openDatabase("agenda", "1.0", "Agenda BD", 5000000);
				  db.transaction(function(tx){
				  tx.executeSql('CREATE TABLE IF NOT EXISTS eventos (id unique, evento, descripcion, fotos, estado)');
				  tx.executeSql('INSERT INTO eventos (evento, descripcion, fotos, estado) VALUES ("'+even+'", "'+desc+'", "'+foto+'", "0")');
						}, function(){navigator.notification.alert('Error de almacenamiento', null, 'Error de Registro', 'Aceptar');},function(){navigator.notification.alert('Los datos se han guardado', function(){
				$('#evento').val('');
				$('#descripcion').val('');
				$('#tomarFoto').attr('rel','');	
				window.location.href="#page";
				}, 'Error de Registro', 'Aceptar');});
			
			}
			else{	navigator.notification.alert('Nombre del evento requerido', null, 'Error de Registro', 'Aceptar');
				}
		});
		$('#leer').tap(function(){
			leer();
		});
		
		
	}, false);
});