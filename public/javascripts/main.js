//BOTON LOGIN
$('#send').on('click', function(){
  $.ajax({
    method: 'POST', 
    url: "http://localhost:3000/login",
    data: {
     name: $('#userInput').val(),
     password: $('#passInput').val()  
    }
  }).done(function(data) {
  
    if (data.login == true) {
    window.location.href="http://localhost:3000/add"   
    } else if (data.login == false){
      $('#userInput').val('')
      $('#passInput').val('')
      alert('nombre de usuario o contraseña incorrectos')
    } 
}) 
})

//BOTON AGREGAR
$('#add').on('click', function(){
  $.ajax({
    method: 'POST', 
    url: "http://localhost:3000/add",
    data: {
     imagen: $('#url').val(),
     nombre: $('#title').val(),
     precio: $('#price').val()   
    }
  })
  $('#title').val('')
  $('#url').val('')
  $('#price').val('')   
})


$('#goHome').on('click', function(){
  window.location.href="http://localhost:3000/home"   
})

//EN INDEX.HBS
$('.login').on('click', function(){
  window.location.href="http://localhost:3000/login"   
})

$('.logout').on('click', function(){
  $.ajax({
    url: "http://localhost:3000/logout"
})
})

