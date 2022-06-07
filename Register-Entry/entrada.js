varDocentes = [
    {
        nombre: 'agustin',
        apellido: 'ituarte',
        ci: 53181172,
        entrada: 0,
        salida: 0
    },
    {
        nombre: 'felipe',
        apellido: 'melgar',
        ci: 43181172,
        entrada: 0,
        salida: 0
    },
    {
        nombre: 'karina',
        apellido: 'perez',
        ci: 33181172,
        entrada: 0,
        salida: 0
    } 
]

function login(){
    var newUser = JSON.parse(localStorage.getItem('newUser'));
    var newDocentes = JSON.parse(sessionStorage.getItem('newDocentes'));
    var iDel = JSON.parse(sessionStorage.getItem('iDel'));
    if (newDocentes){
        newDocentes.push(newUser);
        if(iDel != null){
            newDocentes.splice(iDel, 1);
        }
        var ci = document.getElementById('cedula1').value;
        for (i=0; i < newDocentes.length; i++){
            if(ci == newDocentes[i].ci){
                var nombre = newDocentes[i].nombre;
                var apellido = newDocentes[i].apellido;
                var entrada = newDocentes[i].entrada;
                var salida = newDocentes[i].salida;
                localStorage.setItem('ci', ci);
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('apellido', apellido);
                localStorage.setItem('entrada', entrada);
                localStorage.setItem('salida', salida);
                alert(newDocentes[i].nombre + ' se ha logueado');
                window.location.href = 'entrada2.html';
                return
            }
        } 
    }else{
        
        varDocentes.push(newUser);
        if(iDel != null){
            varDocentes.splice(iDel, 1);
        }
        var ci = document.getElementById('cedula1').value;
        for (i=0; i < varDocentes.length; i++){
            if(ci == varDocentes[i].ci){
                var nombre = varDocentes[i].nombre;
                var apellido = varDocentes[i].apellido;
                var entrada = varDocentes[i].entrada;
                var salida = varDocentes[i].salida;
                localStorage.setItem('ci', ci);
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('apellido', apellido);
                localStorage.setItem('entrada', entrada);
                localStorage.setItem('salida', salida);
                alert(varDocentes[i].nombre + ' se ha logueado');
                window.location.href = 'entrada2.html';
                return
            }
        }
    }
    

alert("incorrect CI");
}

function registerUser(){
    var registerNombre = document.getElementById('nombre').value;
    var registerApellido = document.getElementById('apellido').value;
    var registerCI = document.getElementById('ci').value;
    if (registerCI.length != 8){
        alert('CI invalida')
        return
    }
    var entrada = 0;
    var salida = 0;
    var newUser = {
        nombre: registerNombre,
        apellido: registerApellido,
        ci: registerCI,
        entrada: entrada,
        salida: salida
    }
    
    localStorage.setItem('newUser', JSON.stringify(newUser));
    alert("Usuario agregado");
    window.location.href = 'entrada.html';
}
function modUser(){
    varInd = localStorage.getItem('ci');
    var i = varDocentes.findIndex(x => x.ci == varInd);
    var registerNombre = document.getElementById('nombre').value;
    var registerApellido = document.getElementById('apellido').value;
    var registerCI = document.getElementById('ci').value;
    if (registerCI.length != 8){
        alert('CI invalida')
        return
    }
    var entrada = 0;
    var salida = 0;

    varDocentes[i].nombre = registerNombre;
    varDocentes[i].apellido = registerApellido;
    varDocentes[i].ci = registerCI;
    varDocentes[i].entrada = entrada;
    varDocentes[i].salida = salida;
    
    sessionStorage.setItem('newDocentes', JSON.stringify(varDocentes));
    alert('Datos cambiados.')
}
function delUser(){
    ci = localStorage.getItem('ci');
    var i = varDocentes.findIndex(x => x.ci == ci);
    alert('Usuario eliminado');
    sessionStorage.setItem('iDel', JSON.stringify(i));
}

function loadData(){
    document.getElementById('user_ci').innerHTML = localStorage.getItem('ci');
    document.getElementById('user_nombre').innerHTML = localStorage.getItem('nombre');
    document.getElementById('user_apellido').innerHTML = localStorage.getItem('apellido');
}

function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hora').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);

}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}

function checkDate(){
    const today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let d = today.getDay() + 15;

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;

    document.getElementById('fecha').innerHTML = d + '/' + m + '/' + y;
}

function entrada(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var entryHour = today.getHours();

    document.getElementById('horaEntrada').innerHTML = time + '/' + date;
    localStorage.setItem('entryHour', JSON.stringify(entryHour));
}
function salida(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var exitHour = today.getHours();

    document.getElementById('horaSalida').innerHTML = time + '/' +  date;
    localStorage.setItem('exitHour', JSON.stringify(exitHour));
}
    

function calcularHoras(){
    var entry = JSON.parse(localStorage.getItem('entryHour'));
    var exit = JSON.parse(localStorage.getItem('exitHour'));
    var hours = exit - entry;
    return alert('Has trabajado: ' + hours + ' horas.');
}

function LoadEntry(){
    var i = localStorage.getItem('i');
    var entryHour = localStorage.getItem('entryHour');
    varDocentes[i].entrada = entryHour;
}

function SaveHours(){
    var entradaInd = localStorage.getItem('entrada');
    var i = varDocentes.findIndex(x => x.entrada == entradaInd);
    var entryHour = JSON.parse(localStorage.getItem('entryHour'));
    var exitHour = JSON.parse(localStorage.getItem('exitHour'));
    
    varDocentes[i].entrada = entryHour;
    varDocentes[i].salida = exitHour;
    localStorage.setItem('EntradaSalida', JSON.stringify(varDocentes));
}