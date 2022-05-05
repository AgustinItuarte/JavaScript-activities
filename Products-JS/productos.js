const productos = new Map();
productos.set(0, {nombre:'Remera', precio:100,
modelo:'Nike'});
productos.set(1, {nombre:'Zapato', precio:500,
modelo:'Reebook'});

function cargar_datos(valor)
{
        for (const value of productos.values())
        {
            if (valor == 'remera' && value.nombre == 'Remera')
            {
                var mapNombre = value.nombre;
                var mapPrecio = value.precio;
                var mapModelo = value.modelo;
                document.getElementById('Nombre').innerHTML = mapNombre;
                document.getElementById('Precio').innerHTML = mapPrecio;
                document.getElementById('Modelo').innerHTML = mapModelo;
                var cantidad = document.getElementById('Cantidad');
                var numero = cantidad.innerHTML;
                numero++;
                cantidad.innerHTML = numero;
                    
                localStorage.setItem('mapNombre', mapNombre);
                localStorage.setItem('mapPrecio', mapPrecio);
                localStorage.setItem('mapModelo', mapModelo);
                sessionStorage.setItem('numeroRem', numero);

            }
            else if (valor == 'zapatos' && value.nombre == 'Zapato')
            {
                
                var mapNombre = value.nombre;
                var mapPrecio = value.precio;
                var mapModelo = value.modelo;
                document.getElementById('Nombre').innerHTML = mapNombre;
                document.getElementById('Precio').innerHTML = mapPrecio;
                document.getElementById('Modelo').innerHTML = mapModelo;
                var cantidad = document.getElementById('Cantidad2');
                var numero = cantidad.innerHTML;
                numero++;
                cantidad.innerHTML = numero;

                localStorage.setItem('mapNombre', mapNombre);
                localStorage.setItem('mapPrecioZ', mapPrecio);
                localStorage.setItem('mapModelo', mapModelo);
                sessionStorage.setItem('numeroZap', numero);
            }

        }
                
}

function mostrar(valor)
{
    if (valor === 'cantidad1')
    {
        var x = document.getElementsByClassName('cantidad1');
        x[0].style.display = 'block';

    }
    else if (valor === 'cantidad22')
    {
        var x = document.getElementsByClassName('cantidad22');
        x[0].style.display = 'block';    
    }
}
    
function recuperar()
{
        document.getElementById('Nombre').innerHTML = localStorage.getItem('mapNombre');
        document.getElementById('Modelo').innerHTML = localStorage.getItem('mapModelo');
        var valor = localStorage.getItem('mapPrecio');
        var valor2 = localStorage.getItem('mapPrecioZ');
        var cantidad = sessionStorage.getItem('numeroRem');
        var cantidad2 = sessionStorage.getItem('numeroZap');

        if (cantidad > 0 && cantidad2 <= 0)
        {
            document.getElementById('Total').innerHTML = valor * cantidad;
            sessionStorage.removeItem("numeroRem");
        }
        else if(cantidad2 > 0 && cantidad <= 0)
        {
            document.getElementById('Total').innerHTML = valor2 * cantidad2;
            sessionStorage.removeItem("numeroZap");
        }
        else if(cantidad > 0 && cantidad2 > 0){
            var total = valor * cantidad;
            var total2 = valor2 * cantidad2;
            document.getElementById('Total').innerHTML = parseInt(total) + parseInt(total2);
            sessionStorage.removeItem("numeroRem");
            sessionStorage.removeItem("numeroZap");
        }
}