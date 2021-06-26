// var user = "usuario";
// var pass = "1234";

var userLogin = {
    user: "usuario",
    pass: "1234",
    lastLogin: "23/08/2020",
    name: "Emiliano Gallo"
};

function login(user, pass) {
    if (user != "" && pass != "") {

        // this hace referencia a la variable creada fuera de la función
        if (this.userLogin.user == user && this.userLogin.pass == pass) {
            window.location.href = 'home.html';
        } else {
            alert("Usuario o contraseña incorrecto.")
        }
    }
}

var balance = 155;

var accountList = [{ date: "25/08/2020", type: "Compra por internet", amount: -100, balance: 0 },
    { date: "26/08/2020", type: "Ingreso por transferencia externa", amount: 80, balance: 0 },
    { date: "31/08/2020", type: "Compra en local", amount: -20, balance: 0 },
    { date: "01/09/2020", type: "Ingreso por recibo de sueldo", amount: 200, balance: 0 },
    { date: "02/09/2020", type: "Compra en local", amount: -30, balance: 0 }
];

function loadWelcome() {
    document.getElementById('welcomeHeader').innerHTML = "Bievenido " + this.userLogin.name;
    this.loadLastLoginInformation();
}

function loadLastLoginInformation() {
    document.getElementById('lastLoginInformation').innerHTML = "Tu última actividad fue " + this.userLogin.lastLogin;
}

function loadAccount() {

    accountList.forEach(element => {

        var tableRef = document.getElementById('tableAccount').getElementsByTagName('tbody')[0];

        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow();

        // Insert a cell in the row at index 0
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);

        // Append a text node to the cell
        var newText1 = document.createTextNode(element.date);
        newCell1.appendChild(newText1);

        var newText2 = document.createTextNode(element.type);
        newCell2.appendChild(newText2);

        var newText3 = document.createTextNode(element.amount);
        newCell3.appendChild(newText3);

        balance = balance + element.amount;

        var newText4 = document.createTextNode(balance);
        newCell4.appendChild(newText4);
    });
}