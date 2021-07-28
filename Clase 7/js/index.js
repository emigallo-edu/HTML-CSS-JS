function helloExternal(name) {
    alert("hola " + name + " desde un archivo externo");
    alert(`Hola ${name} y ${name1} desde 'external'`);
}

function sum(number1, number2, result) {
    var v1 = parseInt(document.getElementById(number1).value);
    var v2 = parseInt(document.getElementById(number2).value);
    document.getElementById(result).value = v1 + v2;
}

function showImage(age) {
    if (age < 12) {
        document.getElementById('imgByAge').src = "https://cdn.pixabay.com/photo/2015/04/03/16/36/bee-705412__480.png";
    } else {
        document.getElementById('imgByAge').src = "https://cdn.pixabay.com/photo/2020/03/30/10/18/electric-scooter-4983759__480.jpg";
    }
}

function showFruit(fruta) {
    switch (fruta) {
        case 'Banana':
            document.getElementById('imgFruit').src = "https://media.istockphoto.com/photos/banana-picture-id1184345169?b=1&k=6&m=1184345169&s=170667a&w=0&h=MIwKWVPVU300uo70dDgXWngCVLhnY6AaAbpwbJSPXMg=";
            break;
        case 'Manzana':
            document.getElementById('imgFruit').src = "https://media.istockphoto.com/photos/red-apple-picture-id184276818?b=1&k=6&m=184276818&s=170667a&w=0&h=Tpx9Uf0l5RZsaHY2cfP3RyT4Vo5INyavYdprAKzOiFY=";
            break;
        case 'Pera':
            document.getElementById('imgFruit').src = "https://media.istockphoto.com/photos/single-pear-picture-id164142758?b=1&k=6&m=164142758&s=170667a&w=0&h=v2hYZ9iMWL9xeUei7w-47JTIQFSYKG5XwAAbejDHLOk=";
            break;
        default:
    }
}

function isHoliday(dayWeek) {
    switch (dayWeek) {
        case 'Sábado':
        case 'Domingo':
            alert("Es finde!!");
            break;
        case 'Viernes':
            alert("Jornada reducida");
            break;
        case 'Nuevo dia':
            alert('Nuevo día de semana');
            break;
        default:
            alert("Es laborable");
            // case 'Lunes':
            //     alert("Es laborable");
            //     break;
            // case 'Martes':
            //     alert("Es laborable");
            //     break;
            // case 'Miércoles':
            //     alert("Es laborable");
            //     break;
            // case 'Jueves':
            //     alert("Es laborable");
            //     break;
            // case 'Viernes':
            //     alert("Es laborable");
            //     break;
            // case 'Sábado':
            //     alert("Es finde!!");
            //     break;
            // case 'Domingo':
            //     alert("Es finde!!");
            //     break;
    }
}

function showAlert(repeat) {
    for (i = 1; i <= repeat; i++) {
        window.alert("Mensaje " + i);
    }
}

function changeClass(className) {
    document.getElementById('hidden').value = className;
    document.getElementById('square').className = "default " + className;
}