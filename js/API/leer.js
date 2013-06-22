// Lectura

function leer(){
	var db = window.openDatabase("agenda", "1.0", "Agenda BD", 5000000);
	db.executeSql('SELECT * FROM eventos',[],
		function(tx1,resultado)
		{
			var largo = resultado.rows.length;
			if(largo!=0)
			{
				$('#page div[data-role=content]').html('');
				for(i=0;i<largo;i++)
					{
					$('#page div[data-role=content] ul').append('<li>'+
					'Evento: '+resultado.rows.item(i).evento+'<br />'+
					'Descripción: '+resultado.rows.item(i).descripcion+'<br />'+
					'Foto: '+resultado.rows.item(i).fotos+
					'</li>');
					}
			}
		});
}