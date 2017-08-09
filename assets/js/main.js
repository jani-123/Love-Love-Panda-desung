  var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
 
  for(var i = 0 ; i < pictures.length ; i++)
  {
  	 var secuencia = document.getElementById('secuenciaImg');
     var picture = document.createElement('img');
     picture.setAttribute('class','pandaImg');
     picture.setAttribute('src', pictures[i]);
     secuencia.appendChild(picture);
  }

