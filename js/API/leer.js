// Lectura

function leer(){
	var db = window.openDatabase("agenda", "1.0", "Agenda BD", 5000000);
	db.executeSql('SELECT * FROM eventos',[],
		function(tx1,resultado)
		{
			var largo = resultado.rows.length;
			if(largo!=0)
			{
				$('#eventos div[data-role=content]').html('');
				for(i=0;i<largo;i++)
					{
					$('#eventos div[data-role=content]').append('<div data-role="collapsible-set">'+
				'<div data-role="collapsible" data-collapsed="true">'+
					'<h3>'+
						resultado.rows.item(i).evento+
					'</h3>'+
					'Desscripción: '+resultado.rows.item(i).descripcion+'<br />'+
					'Foto: '+resultado.rows.item(i).fotos+
				'</div>'+
			'</div>');
					}
			}
		});
}