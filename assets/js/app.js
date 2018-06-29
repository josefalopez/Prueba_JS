$(document).ready(function(){


	//Código del profe para subir foto

	console.clear(); // Esto limpia la consola

	$('#uploader').submit(function(evt){
	  evt.preventDefault();
	  
	  // Create a reader
	  var reader = new FileReader();
	  
	  // Get the image
	  var file = $(evt.target).find('input[type="file"]').get(0).files[0];
	  
	  reader.readAsDataURL(file);
	  
	  reader.onload = function(e){
	    console.log('The image was load');
	    $('#image').attr('src', e.target.result);
	  };
	  
	}); 


	//Clic del botón 'btn-crear' para crear nuevo tweet
	$('.btn-crear').click(function(evt){

		//Variable para el txt o valor que se ingresa en el textarea
		var tweet_nuevo = $('.input-tweet').val();

		//Variable para la imagen que ingresa el usuario
		var imagen_nueva = $('.foto').attr('src');

		//Variable para tomar lo que ya existe como html en 'cuadro_tweet' 
		var cuadro_nuevo = `
			<div class="cuadro_tweet">
				<div class="row">
					<div class="col-12 col-md-12 col-lg-4">
						<img src="${imagen_nueva}">
					</div>
					<div class="col-12 col-md-12 col-lg-8">
						<p>${tweet_nuevo}</p>
					</div>
				</div>
				<div class="reaction">
					<a class="heart_gray" href="#">
						<span class="likes">0</span>
						<i class="fas fa-heart"></i>
					</a>
					<button type="button" class="btn btn-outline-danger btn-sm btn-elim">Eliminar</button>
				</div>
			</div>
		`;

		//Se agrega el estilo .cuadro_tweet al nuevo elemento (solo funciona si ya existe un elemento)
		$('.lista_tweets').prepend(cuadro_nuevo);

	});


	//Variable likes aumentan
	$('.lista_tweets').on('click', '.heart_gray', function(evt){

		//Se previenen eventos
		evt.stopPropagation();
		evt.preventDefault();

		//Se pone función que agrega clase 'heart--red'
		$(this).addClass('heart_gray--red');

		//Al valor incial 0 de .likes se lo define como entero con parseInt
		var likes = parseInt($(this).find('.likes').html());

		//Al valor inicial de .likes se le suma 1
		$(this).find('.likes').html(likes + 1);
	});


	//Clic del botón 'btn-elim' elimina al abuelo que es 'cuadro_tweet'
	$('.lista_tweets').on('click', '.btn-elim', function(evt){
		$(this).parents('.cuadro_tweet').remove();
	});

});