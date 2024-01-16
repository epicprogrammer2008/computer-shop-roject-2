var adminPageButton = document.getElementById('adminPageButton'); adminPageButton.addEventListener('click', function () {window.location.href = "admin.html";});

var myComputersButton = document.getElementById('my-computers-button');
var myOrderButton = document.getElementById('my-orders-button');
var shoppingButton = document.getElementById('shopping-button');
var loginButton = document.getElementById('login-button');
var logoutButton = document.getElementById('logout-button');
myComputersButton.addEventListener('click', function () {window.location.href = "computers.html"; });
shoppingButton.addEventListener('click', function () {
    window.location.href = "shopping.html";
});
var userLoggedIn = false;

var loggedInUserId = localStorage.getItem("logged-in-user-id");
if (loggedInUserId == null) {
    userLoggedIn == false;
} else {
    userLoggedIn = true;
}
var showSuccessLoginMessage = localStorage.getItem('show-success-login-message');
if (showSuccessLoginMessage == null) {

}else {
    document.getElementById('success-login-alert').style.display = 'block';
    localStorage.removeItem('show-success-login-message');
    setTimeout(() => {
        document.getElementById('success-login-alert').style.display = 'none';

    }, 1200);
}
function showButtons() {
    if (userLoggedIn) {
        loginButton.style.display = 'none';
        myComputersButton.style.display = 'inline-block';
        myOrderButton.style.display = 'inline-block';
        logoutButton.style.display = 'inline-block';
    }else {
        logoutButton.style.display = 'none';
        myComputersButton.style.display='none';
        myOrderButton.style.display = 'none';
        loginButton.style.display = 'inline-block';
    }
}
showButtons();
function onLogin() {
    window.location.href= "login.html";
}
function onLogout() {
    setTimeout( () =>{
        userLoggedIn = false;
        localStorage.removeItem("logged-in-user-id");
        localStorage.removeItem("logged-in-user-name");
        showButtons();
        document.getElementById('success-logout-alert').style.display = 'block';
        showUsername();
        setTimeout(() => {
            document.getElementById('success-logout-alert').style.display = 'none';
        }, 1200)
    }, 500);
    

}
var users = [];
var categories = [];
var computers = [];

function addObjects() {

    users.push({ id: 1, name:"User-1", phone:"055-324-3434", username:"u1", password: "p1"});
    users.push({ id: 2, name:"User-2", phone:"055-324-1232", username:"u2", password: "p2"});
    users.push({ id: 3, name:"User-3", phone:"055-324-6765", username:"u3", password: "p3"});
    users.push({ id: 4, name:"User-4", phone:"055-324-9823", username:"u4", password: "p4"});
    users.push({ id: 5, name:"User-5", phone:"055-324-7151", username:"u5", password: "p5"});
    users.push({ id: 6, name:"Admin", phone:"055-324-0000", username:"admin", password: "admin"});
    

    categories.push({ id:1, name:"Acer"});
    categories.push({ id:2, name:"HP"});
    categories.push({ id:3, name:"aSUS"});
    categories.push({ id:4, name:"Dell"});
    categories.push({ id:5, name:"Lenovo"});
    categories.push({ id:6, name:"LG"});
    categories.push({ id:7, name:"Casper"});
    categories.push({ id:8, name:"Fujitsu"});
    categories.push({ id:9, name:"Nexus"});
    categories.push({ id:10, name:"Samsung"});
    categories.push({ id:11, name:"Toshiba"});
    categories.push({ id:12, name:"Sony"});

    computers.push({ id: 1, name:"Acer 1", price: 578, description:"Acer 1 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 1});
    computers.push({ id: 2, name:"Acer 2", price: 6452, description:"Acer 2 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 3});
    computers.push({ id: 3, name:"Acer 3", price: 934, description:"Acer 3 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 5});
    computers.push({ id: 4, name:"Acer 4", price: 965, description:"Acer 4 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 12});
    computers.push({ id: 5, name:"Acer 5", price: 763, description:"Acer 5 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 11});
    computers.push({ id: 6, name:"Acer 6", price: 4345, description:"Acer 6 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 8});
    computers.push({ id: 7, name:"Acer 7", price: 2458, description:"Acer 7 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 7});
    computers.push({ id: 8, name:"Acer 8", price: 3468, description:"Acer 8 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 7});
    computers.push({ id: 9, name:"Acer 9", price: 7809, description:"Acer 9 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 8});
    computers.push({ id: 10, name:"Acer 10", price: 1084, description:"Acer 10 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 1, categoryId: 5});
    computers.push({ id: 11, name:"Acer 11", price: 4563, description:"Acer 11 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 4});
    computers.push({ id: 12, name:"Acer 12", price: 6432, description:"Acer 12 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 13, name:"Acer 13", price: 756, description:"Acer 13 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 14, name:"Acer 14", price: 1234, description:"Acer 14 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 15, name:"Acer 15", price: 4322, description:"Acer 15 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 7});
    computers.push({ id: 16, name:"Acer 16", price: 8655, description:"Acer 16 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 9});
    computers.push({ id: 17, name:"Acer 17", price: 2084, description:"Acer 17 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 18, name:"Acer 18", price: 3456, description:"Acer 18 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 8});
    computers.push({ id: 19, name:"Acer 19", price: 975, description:"Acer 19 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 20, name:"Acer 20", price: 5683, description:"Acer 20 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 2, categoryId: 1});
    computers.push({ id: 21, name:"Acer 21", price: 345, description:"Acer 21 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 9});
    computers.push({ id: 22, name:"Acer 22", price: 867, description:"Acer 22 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 23, name:"Acer 23", price: 9865, description:"Acer 23 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 3});
    computers.push({ id: 24, name:"Acer 24", price: 3546, description:"Acer 24 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 25, name:"Acer 25", price: 8676, description:"Acer 25 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 26, name:"Acer 26", price: 3456, description:"Acer 26 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 6});
    computers.push({ id: 27, name:"Acer 27", price: 567, description:"Acer 27 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 28, name:"Acer 28", price: 8765, description:"Acer 28 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 29, name:"Acer 29", price: 1981, description:"Acer 29 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 1});
    computers.push({ id: 30, name:"Acer 30", price: 2020, description:"Acer 30 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 3, categoryId: 6});
    computers.push({ id: 31, name:"Acer 31", price: 4563, description:"Acer 31 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 32, name:"Acer 32", price: 7654, description:"Acer 32 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 33, name:"Acer 33", price: 8976, description:"Acer 33 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 34, name:"Acer 34", price: 6755, description:"Acer 34 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 35, name:"Acer 35", price: 4356, description:"Acer 35 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 4});
    computers.push({ id: 36, name:"Acer 36", price: 2346, description:"Acer 36 desc", isNew: true, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 37, name:"Acer 37", price: 9876, description:"Acer 37 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 3});
    computers.push({ id: 38, name:"Acer 38", price: 654, description:"Acer 38 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
    computers.push({ id: 39, name:"Acer 39", price: 3456, description:"Acer 39 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 2});
    computers.push({ id: 40, name:"Acer 40", price: 9999, description:"Acer 40 desc", isNew: false, imagePath:"images/comp.no.1.jpg", userId: 4, categoryId: 1});
 
    var idCounter = 40;

    for (var j =0; j < 4; j++) {
        for (var i =0; i < 40; i++) {
            idCounter++;
            computers.push(
                {
                    id: idCounter, name: "Acer" + idCounter, price: computers[i].price, description: "Acer" + idCounter + "desc",
                    isNew: computers[i].isNew, imagePath: "images/comp.no.1.jpg", userId: computers[i].userId, categoryId: 1
                }
            );
        }
    }

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "HP" + (i + 1), price: computers[i].price, description: "HP",
                isNew: computers[i].isNew, imagePath: "images/comp. no.2.jpg", userId, categoryId:2
            }
        );
    }
    
    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "aSUS" + (i + 1), price: computers[i].price, description: "aSUS",
                isNew: computers[i].isNew, imagePath: "images/comp. no.3.jpg", userId, categoryId:3
            }
        );
    }

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Dell" + (i + 1), price: computers[i].price, description: "Dell",
                isNew: computers[i].isNew, imagePath: "images/comp. no.4.jpg", userId, categoryId:4
            }
        );
    }

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "lenovo" + (i + 1), price: computers[i].price, description: "Lenovo",
                isNew: computers[i].isNew, imagePath: "images/comp. no.5.jpg", userId, categoryId:5
            }
        );
    }
    
    for (var i = 0; i < computers.length; i++) {
        const c = computers[i];
        c.ram = 8;
        c.cpu = "Core I 9";
        c.drive = 500; c.drivetype = (i % 2 == 0) ? 'hdd' : 'ssd';
        c.os = "windows 10";
        c.videoCard = 3;
    }

    for (var i = 0; i < computers.length; i++) {
        const c = computers[i];
        for (var j = 0; j < userLoggedIn.length; i++) {
            const u = users[j];
            if (u.id === c.userId) {
                c.phone = u.phone; break;
            }
        }
    }
}
 addObjects();


 function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users");
    var categoriesString = localStorage.getItem("categories");
    var computersString = localStorage.getItem("computers");

    if (usersString == null) {
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(usersString);
    }

    if (computersString == null) {
        localStorage.setItem("categories", JSON.stringify(categories));
    } else {
        categories = JSON.parse(categoriesString)
    }

    if (computersString == null) {
        localStorage.setItem("computers", JSON.stringify(computers));
    } else {
        computers = JSON.parse(computersString)
    }

}

loadDataFromLocalStorage();
console.log("Total number of all computers = " + computers.length);
function onClearLocalStorage() {
    localStorage.removeItem("users");
    localStorage.removeItem("categories");
    localStorage.removeItem("computers");
    localStorage.removeItem("basketComputers");
    localStorage.removeItem("orders");
    localStorage.removeItem("customer");
    localStorage.removeItem("order-customer");
    localStorage.removeItem("logged-in-user-id");
    window.location.reload();

}

var customers = [];
customers.push({ id: 1, name: "Customer-1", adress: "Customer-1-adress", phone: "o44-111-2222", email: "customer1gmail.com"});
customers.push({ id: 1, name: "Customer-2", adress: "Customer-2-adress", phone: "o44-222-3333", email: "customer2gmail.com"});
customers.push({ id: 1, name: "Customer-3", adress: "Customer-3-adress", phone: "o44-333-4444", email: "customer3gmail.com"});



var customersString = localStorage.getItem("customers");

if (customersString == null) {
    localStorage.setItem("customers", JSON.stringify(customers));
}else {
    customers = JSON.parse(customersString);
}

var orders = [];

var order1 ={};
order1.id = 1;
order1.note = "dostavka budet za 2 dnya";
var order1BasketComputers = [];
order1BasketComputers.push({ id:1, count:7, computer: computers[1] });
order1BasketComputers.push({ id:2, count:3, computer: computers[3] });
order1BasketComputers.push({ id:3, count:9, computer: computers[5] });
order1BasketComputers =order1BasketComputers;
order1.customer = customers[1];
order1.userId = 1;
order1.register = new Date(2023, 9, 23);
order1.totalPrice = calculateOrderTotalPrice(order1);

var order2 = {};
order2.id = 2;
order2.note = "dostavka budet za 4 dnya i 4 klaviaturi dobavte v zakaz";
var order2BasketComputers = [];
order2BasketComputers.push({ id: 4, count: 12, computer: computers[51] });
order2BasketComputers.push({ id: 5, count: 15, computer: computers[53] });
order2BasketComputers.push({ id: 6, count: 6, computer: computers[55] });
order2.basketComputers = order2BasketComputers;
order2.customer = customers[0];
order2.userId = 2;
order2.register = new Date(2023, 9, 30);
order2.totalPrice = calculateOrderTotalPrice(order2);


var order3 = {};
order3.id = 3;
order3.note = "dostavka budet za 12 dney n 2 monitora d0bavte v zakaz";
order3BasketComputers.push({ id:7, count: 1, computer: computers[97] });
order3BasketComputers.push({ id:8, count: 2, computer: computers[99] });
order3BasketComputers.push({ id:9, count: 3, computer: computers[101] });
order3.basketComputers = order3BasketComputers;
order3.customer = customers[2];
order3.userId = 3;
order3.register = new Date(2023, 10, 9);
order3.totalPrice = calculateOrderTotalPrice(order3);

orders.push(order1);
orders.push(order2);
orders.push(order3);

var ordersString = localStorage.getItem("orders");

if (ordersString == null) {
    localStorage.setItem("orders", JSON.stringify(orders));
} else {
    orders = JSON.parse(ordersString);
}



var myOrdersButton = document.getElementById('my-orders-button');

myOrderButton.addEventListener('click', function() {
    window.location.href = "orders.html";
});

function calculateOrderTotalPrice(order) {
    var totalPrice = 0;

    for (let index = 0; index < order.basketComputers.length; index++) {
        const b = order.basketComputers[index];
        totalPrice += b.count * b.computer.price;
    }

    return totalPrice;
}

var loggedInUserName = document.getElementById('logged-in-user-name');
console.log('userLoggedIn : ' + userLoggedIn);
function showUsername() {
    if (userLoggedIn) {
        var username = '';
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.id == loggedInUserId) {
                username = user.username; break;
            }
        }
        loggedInUserName.innerHTML = username;
        if (username === 'admin') {
            adminPageButton.style.display = 'inline-block';
        } else {
            adminPageButton.style.display = 'none';
        }
    }else{
        loggedInUserName.innerHTML ='';
        adminPageButton.style.display = 'none';
    }
}
showUsername();



