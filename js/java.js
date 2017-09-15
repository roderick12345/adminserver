$(document).ready(function(){
	$("ul.nav li a").click(function(event) {
		cambio( $(this).text().trim().toLowerCase() )
	});
			

});

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}




String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

function host(){
	$.ajax({
		url: 'datos.php',
		type: 'GET',
		data:{'get':'hosts'},
		success: function(data){
			var result= $.parseJSON(data);
			var div = $("#contenedor");
			tmp = "<div class='col-sm-9 col-md-3'><div class='thumbnail'><img class='imagen' src='imagenes/servers.png' alt='...'>"+
	"<div class='caption'><h3>{0}</h3><p>{1}</p><p>Estado &nbsp; <span ><button class='btn btn-danger status'></button> </span></p>"+
	"<button class='btn btn-primary mas' data-toggle='modal' data-target='#myModal'>+</button></div></div></div>"
	//alert(tmp);
			div.html("");
			for (i in result){
				div.append(tmp.format(result[i]['host'],result[i]['address']))
			}
			var referencia=$(".mas");
			referencia.click(function() {
				alert("hola");
				for(i in result){
					div.append(result[i]['host'],result[i]['address']);
				}
				
			})
		}

	})

}
function cambio(a){
	var vista={'host':host,'servicios':servicios,'mapa d red':'mapa','reportes':'reportes'}
	 vista[a]()
}


function servicios(){
	$.ajax({
		url: 'datos.php',
		type:'GET',
		data:{'get':'servicios'},
		success: function(data){
			var result= $.parseJSON(data);
				var div=$("#contenedor");
				div.html("");
				for (i in result){
					for(j in result[i]['services']){
						div.append("<pre>"+result[i]['services'][j]+"</pre>");
					}
				}
		}
			})
		}


function modal(){
	alert("hola");
	$.ajax({
		url: 'datos.php',
		type:'GET',
		data: {'get':'mapa'},
		success: function(data){
			var ressult= $.parseJSON(data);
			var div=$("#myModa");
			div.html("");
			for(i in result){
				div.append(result[i]['host'],result[i]['address']);
			}

		}
	})
}