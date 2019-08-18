$(function(){

	carregar(0, 4, 'load.php');

	$("a.carregar-mais").click(function(evento){
        //cancelar o evento do link
		evento.preventDefault();
		var init = $("ol li").length;

		carregar(init, 2, 'load.php');

	});

	function carregar(init, max, url){
		var dados = { init : init, max : max };

		$("ol").append('<li>Carregando...</li>');

		$.post(url, d ados, function (data) {

            console.log(data);
			$("ol li").last().remove();

			for(i = 0; i < data.dados.length; i++){
				$("ol").append('<li>'+'<img src="+'+data.dados[i].imagem +'+">'+
                               "<br>"+data.dados[i].titulo+
                               "<br>"+data.dados[i].data+
                               "<br>"+data.dados[i].resumo+
                               "<br>"+data.dados[i].detalhes+
                               '</li>');
			}
            //conta quanto registro ja foram inseridos
			var conta = $("ol li").length;

			if(conta == data.totalResults) {
				$("a.carregar-mais").hide();
			}

		}, "json");
	}

});
