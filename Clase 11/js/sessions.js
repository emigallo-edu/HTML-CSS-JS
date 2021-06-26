// session storage
var sessionNameKey = "name_key";

function saveNameInSession(name) {
    sessionStorage.setItem(sessionNameKey, name);

    $('#labelAlert').html("Se guardó el valor: " + name + " en la clave: " + sessionNameKey);
    $('#alert').toggleClass('alert alert-success alert-dismissible');
    $('#successAlert').show();
}

function getNameFromSession() {
    var nombre = sessionStorage.getItem(sessionNameKey);
    return nombre;
}

function removeNameFromSession() {
    var savedName = getNameFromSession();
    sessionStorage.removeItem(sessionNameKey);

    $('#labelAlert').html("Se eliminó el valor: " + savedName + " en la clave: " + sessionNameKey);
    $('#alert').toggleClass('alert alert-warning alert-dismissible');
    $('#successAlert').show();
}

$(document).ready(function() {
    $('#successAlert').hide();
});



// local storage
var sessionLastLoginKey = "last_login_key";

function saveLastLoginInSession() {
    var lastLogin = new Date()
    localStorage.setItem(sessionLastLoginKey, lastLogin);

    $('#labelAlert').html("Se guardó el valor: " + lastLogin + " en la clave: " + sessionLastLoginKey);
    $('#alert').toggleClass('alert alert-success alert-dismissible');
    $('#successAlert').show();
}

function getLastLoginFromSession() {
    var lastLogin = localStorage.getItem(sessionLastLoginKey);

    $('#labelAlert').html("La última actividad fue : " + lastLogin);
    $('#alert').toggleClass('alert alert-success alert-dismissible');
    $('#successAlert').show();
}

function removeLastLoginFromSession() {
    var savedLastLogin = getLastLoginFromSession();
    localStorage.removeItem(sessionLastLoginKey);

    $('#labelAlert').html("Se eliminó el valor: " + savedLastLogin + " en la clave: " + sessionLastLoginKey);
    $('#alert').toggleClass('alert alert-warning alert-dismissible');
    $('#successAlert').show();
}

$(document).ready(function() {
    $('#successAlert').hide();
});