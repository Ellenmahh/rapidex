$(function(){
	carregar(0, 2, 'carregar_usuario.php');
	
	$("button.carregar-mais").click(function(evento){
		evento.preventDefault();
		
		var inicio = $("tbody tr").length;
		
		carregar(inicio, 2, 'carregar_usuario.php');
	});
	
	function carregar(inicio, max, url){
		var dados = {inicio : inicio, max : max};
		
		$("tbody").append('<tr><td style="color:red;">Carregando...</td></tr>');
		
		$.post(url, dados, function(data){
			
			$("tbody tr").last().remove();
			
			for(i = 0; i < data.dados.length; i++){
				$("tbody").append('<tr><td>'+data.dados[i].id+'</td><td>'+data.dados[i].name+'</td><td>'+data.dados[i].email+'</td><td>'+data.dados[i].senha+'</td></tr>');
			}
			
			var conta = $("tbody tr").length;
			
			if(conta == data.resultaQuantidade){
				$("button.carregar-mais").hide();
			}
			
		}, "json");
	}
});