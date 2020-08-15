var $$=Dom7;

//MuestraMensaje();

var idinmueble=0;
var marca ="";
var categoria ="";
var token="";
var platform = "";


var app = {
  // Application Constructor
  initialize: function() {
      this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
      app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {


    platform = device.platform;

    if(device.platform !="browser"){
     
        var push = PushNotification.init({
              android:{

              },ios:{
                  alert:"true",
                  badge:true,
                  sound:'false'
              }
        });


        push.on('registration', function (data) {
         
          

          getToken(data.registrationId,device.platform);
          
          token = data.registrationId;
          console.log(data.registrationId);
          console.log(data.registrationType);
      
          });


          push.on('notification', function (data) {

              console.log(data.message);
              console.log(data.title);
              console.log(data.count);
              console.log(data.sound);
              console.log(data.image);
              console.log(data.additionalData);

          });

        }

  }
};




        function getToken(token,platform){

          var token = token;
          var platform = platform;


          app7.request({
            url: 'http://rragenciainmobiliaria.com/team/api/settoken.php',
            data:{token:token,platform:platform},
            method:'POST',
            crossDomain: true,
            success:function(data){
           
            
            },
            error:function(error){

            }
            
            });
          
        }









function showSplashScreen(){

  setTimeout(function(){ InitApp(); }, 4000);
}


function InitApp(){

  if (localStorage.getItem("team-login")=="Autenticado"){

    mainView.router.navigate('/opcion/',{animate:true});
  }/*else{

    mainView.router.navigate('/login/',{animate:true});

  }*/
}





 function CerrarSesion(){

  localStorage.setItem("team-login", "false");

  mainView.router.navigate('/login/',{animate:true});



}



function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  alert('Connection type: ' + states[networkState]);

  //checkConnection();
}




var app7 = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Team',
    // App id
    id: 'com.team.app',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        url: 'views/home.html',
      },/*{
        path: '/login/',
        url: 'views/login.html',
      },{
        path: '/registro/',
        url: 'views/registro.html',
      }*/,{
        path: '/perfil/',
        url: 'views/perfil.html',
      },{
        path: '/opcion/',
        url: 'views/opcion.html',
      },{
        path: '/busqueda/',
        url: 'views/busqueda.html',
      },{
        path: '/vender/',
        url: 'views/vender.html',
      },{
        path: '/filtro1/',
        url: 'views/filtro1.html',
      },
      {
        path: '/inmueble/',
        url: 'views/inmueble.html',
      },{
        path: '/novedades/',
        url: 'views/novedades.html',
      },{
        path: '/favoritos/',
        url: 'views/favoritos.html',
      },{
        path: '/masinfo/',
        url: 'views/masinfo.html',
      },
      

    ],
    // ... other parameters
  });

  var mainView = app7.views.create('.view-main');

  

// Create full-layout notification
var notificationFull = app7.notification.create({
    icon: '<i class="f7-icons">airplane</i>',
    title: 'Framework7',
    titleRightText: 'now',
    subtitle: 'This is a subtitle',
    text: 'This is a simple notification message',
  });

  function Ingresar(){

    var usuario = $$('#usuario').val();
    var password = $$('#password').val();

    app7.preloader.show('blue');

    app7.request({
      url: 'http://localhost/team/api/login.php',
      data:{username:usuario,password:password},
      method:'POST',
      crossDomain: true,
      success:function(data){
       
        app7.preloader.hide();

        var objson = JSON.parse(data);

        if(objson.data == "AUTENTICADO"){

          localStorage.setItem("team-login", "Autenticado");

        mainView.router.navigate('/home/',{animate:true});
      
        }else{

          alert("USUARIO Y/O PASSWORD INCORRECTO");
        }
      },
      error:function(error){

      app7.preloader.hide();
      
      }

      
      
      });


     // app7.preloader.show('blue');
  }


  function Vender(){

    var nombre = $$('#nombre').val();
    var apellidos = $$('#apellidos').val();
    var telefono = $$('#telefono').val();
    var correo = $$('#correo').val();
    var usuario = $$('#usuarior').val();
    var password = $$('#passwordr').val();

    
  
      app7.preloader.show('blue');
  
      app7.request({
        url: 'http://localhost/team/api/users.php',
        data:{usuario:usuario,password:password,nombre:nombre,apellido:apellidos,telefono:telefono,correo:correo},
        method:'POST',
        crossDomain: true,
        success:function(data){
         
          app7.preloader.hide();
  
          var objson = JSON.parse(data);
  
          if(objson.status_message == "CORRECTO"){
  
         alert("Gracias por registrarte, bienvenido.");
           mainView.router.navigate('/home/',{animate:true});



          }else{
  
            alert("Error. Inténtalo nuevamente.");
          }
        },
        error:function(error){
  
        app7.preloader.hide();
        
        }
  
        
        
        });
  
  
  }



  /*function Registrarse(){

    var nombre = $$('#nombre').val();
    var apellidos = $$('#apellidos').val();
    var telefono = $$('#telefono').val();
    var correo = $$('#correo').val();
    var usuario = $$('#usuarior').val();
    var password = $$('#passwordr').val();

    
  
      app7.preloader.show('blue');
  
      app7.request({
        url: 'http://localhost/team/api/users.php',
        data:{usuario:usuario,password:password,nombre:nombre,apellido:apellidos,telefono:telefono,correo:correo},
        method:'POST',
        crossDomain: true,
        success:function(data){
         
          app7.preloader.hide();
  
          var objson = JSON.parse(data);
  
          if(objson.status_message == "CORRECTO"){
  
         alert("Gracias por registrarte, bienvenido.");
           mainView.router.navigate('/home/',{animate:true});



          }else{
  
            alert("Error. Inténtalo nuevamente.");
          }
        },
        error:function(error){
  
        app7.preloader.hide();
        
        }
  
        
        
        });
  
  
  }*/




  function AbrirNotificacion(){

    notificationFull.open(); 
    app7.preloader.show();    
  }

  // Show preloader before Ajax request


  function MuestraMensaje(){
      alert("holiwiii");
      console.log("holiwiii");
  }


  $$(document).on ('page:init', '.page[data-name="home"]', function (e){

    //alert("alerta");

    getSlider();

    getInmuebles();


  });






  $$(document).on ('page:init', '.page[data-name="inmueble"]', function (e){


    app7.preloader.show('blue');


    app7.request({
      url: 'http://localhost/team/api/inmueble.php',
      data:{id:idinmueble},
      method:'POST',
      crossDomain: true,
      success:function(data){
       
        app7.preloader.hide();

        var objson = JSON.parse(data);

        var inmuebles="";

        console.log(objson.data.titulo);

        $$('#titulo-inmueble').html(objson.data.titulo);
        $$('#descripcion-inmueble').html(objson.data.descripcion);
        $$('#precio-inmueble').html(objson.data.precio);
        $$('#imagen1-inmueble').html('<img src="'+objson.data.imagen1+'" width="100%"/>');


      },

      error:function(error){

      app7.preloader.hide();
      
      }
      
      });

  });






  function getSlider(){


    app7.preloader.show('blue');


    app7.request({
      url: 'http://localhost/team/api/slider.php',
      data:{},
      method:'POST',
      crossDomain: true,
      success:function(data){
       
        app7.preloader.hide();

        var objson = JSON.parse(data);

        var slider="";

        var swiper= app7.swiper.get('.swiper-container');
        swiper.removeAllSlides();

        for(x in objson.data){

          var slide = '<div class="swiper-slide"><img src="'+objson.data[x].imagen+'"width="100%"/></div>';

          swiper.appendSlide(slide);


        }

      },

      error:function(error){

      app7.preloader.hide();
      
      }
      
      });

  }





  function Favorito(id){
    alert(id);


  }








  function getInmuebles(){


    app7.preloader.show();

    $$('#inmuebles').html("");



    app7.request({
      url: 'http://localhost/team/api/inmuebles.php',
      data:{},
      method:'POST',
      crossDomain: true,
      success:function(data){
       
        app7.preloader.hide();

        var objson = JSON.parse(data);

        var inmuebles="";

        for(x in objson.data){

          console.log(objson.data[x].titulo);


          inmueble = '<div class="card demo-card-header-pic"><div style="background-image:url('+objson.data[x].imagen1+')" class="card-header align-items-flex-end">'+objson.data[x].titulo+'</div><div class="card-content card-content-padding"><p class="date">'+objson.data[x].generales+'</p><p>'+objson.data[x].ubicaciontxt+'</p></div><div class="card-footer"><p>'+objson.data[x].precio+'</p></a><i class="f7-icons" onClick="Favorito('+objson.data[x].id+')">heart</i><a href="javascript:verinmueble('+objson.data[x].id+')" class="link">Ver más</a></div></div>';

          $$('#inmuebles').append(inmueble);

        }

      },

      error:function(error){

      app7.preloader.hide();
      
      }
      
      });
  }


  function verinmueble(id){

    idinmueble = id;

    mainView.router.navigate('/inmueble/',{animate:true});


  }





  function cambiaVista(){


  }






  function Vender(){

    var nombre = $$('#nombre').val();
    var apellidos = $$('#apellidos').val();
    var telefono = $$('#telefono').val();
    var correo = $$('#correo').val();
    var descripcion = $$('#descripcion').val();
    var ubicacion = $$('#ubicacion').val();
    var precio = $$('#precio').val();
    var superficie = $$('#superficie').val();



    

  
      app7.preloader.show('blue');
  
      app7.request({
        url: 'http://localhost/team/api/vender.php',
        data:{nombre:nombre,apellidos:apellidos,telefono:telefono,correo:correo,descripcion:descripcion,ubicacion:ubicacion,precio:precio,superficie:superficie},
        method:'POST',
        crossDomain: true,
        success:function(data){
         
          app7.preloader.hide();
  
          var objson = JSON.parse(data);
  
          if(objson.status_message == "CORRECTO"){
  
         alert("Tu propiedad ha sido registrada, te contactaremos lo más pronto posible. Gracias");
           mainView.router.navigate('/home/',{animate:true});



          }else{
  
            alert("Error. Inténtalo nuevamente.");
          }
        },
        error:function(error){
  
        app7.preloader.hide();
        
        }
  
        
        
        });
  
  
  }







  function MasInfo(){

    var nombre = $$('#nombremi').val();
    var apellidos = $$('#apellidosmi').val();
    var telefono = $$('#telefonomi').val();
    var correo = $$('#correomi').val();
       

  
      app7.preloader.show('blue');
  
      app7.request({
        url: 'http://localhost/team/api/masinfo.php',
        data:{nombre:nombre,apellidos:apellidos,telefono:telefono,correo:correo},
        method:'POST',
        crossDomain: true,
        success:function(data){
         
          app7.preloader.hide();
  
          var objson = JSON.parse(data);
  
          if(objson.status_message == "CORRECTO"){
  
           mainView.router.navigate('/home/',{animate:true});



          }else{
  
            alert("Error. Inténtalo nuevamente.");
          }
        },
        error:function(error){
  
        app7.preloader.hide();
        
        }
  
        
        
        });
  
  
  }





 

  

