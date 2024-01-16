var computerCategoriesElement = document.getElementById('computer-categories-div');
var computersElement = document.getElementById('computers-div');
var computersLoading = document.getElementById('computers-loading');
var basketComputerCount = document.getElementById('basket-computer-count');
var openBasketButton = document.getElementById('open-basket-button');
var computerModalImage = document.getElementById('computer-modal-image');
var computerModalName = document.getElementById('computer-modal-name');
var computerModalDescription = document.getElementById('computer-modal-description');
var computerModalPrice = document.getElementById('computer-modal-price');
var computerModalPhone = document.getElementById('computer-modal-phone');
var computerModalNew = document.getElementById('computer-modal-new');
var computerModalRam = document.getElementById('computer-modal-ram');
var computerModalCpu = document.getElementById('computer-modal-cpu');
var Drive = document.getElementById('computer-modal-drive');
var computerModalDriveType = document.getElementById('computer-modal-drive-type');
var computerModalOs = document.getElementById('computer-modal-os');
var computerModalVideoCard = document.getElementById('computer-modal-vide-card');
var computerDetailsModal = document.getElementById('computer-details-modal');
var computerDetailsModalContent = document.getElementById('computer-details-modal-content');
var basketModalElement = document.getElementById('basket-modal');
var basketModalCloseButton = document.getElementById('basket-modal-close-button');
var basketComputersTableBodyElement = document.getElementById('basket-computer-table-body');
var basketTotalPriceContentElement = document.getElementById('basket-total-price-content');

var users = [];
var categories = [];
var categoriesGlobal = [];
var computers = []; var computersGlobal = []; var computersSelectedGlobal = [];
var computersSelectedGlobalForSearch = [];

var basketComputers = [];
var currentSelectedCategoryId = 0;

function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users");
    var categoriesString = localStorage.getItem("categories");
    var computersString = localStorage.getItem("computers");
    if (usersString == null) {
        localStorage.setItem("users", JSON.stringify(users));
    }else {
        users = JSON.parse(usersString);
    }
    if (categoriesString == null){
        localStorage.setItem("categories", JSON.stringify(categories));
    } else {
        categories = JSON.parse(categoriesString);
        categoriesGlobal = categories.slice();
    }
    if (computersString == null) {
        localStorage.setItem("computers", JSON.stringify);
    } else {
        computers = JSON.parse(computersString); computersGlobal = computers.slice();
    }
    var basketComputerString = localStorage.getItem("basketComputers");
    if (basketComputerString == null) {
        localStorage.setItem("basketComputers", "[]");
    } else {
        basketComputers = JSON.parse(basketComputerString);
    }
    showBasketComputerCount();

}
loadDataFromLocalStorage();
function loadComputerCategories() {
    computerCategoriesElement = "<ul class = 'list-group'>";
    for (var i = 0; i < categories.length; i++) {
        const c = categories[i];
        computerCategoriesElementHTML += "<li class='list-group-item"+
            "list-group-item-action' id='computer-category-" + c.id + "' onclick='oncategorySelected(" + c.id + ")'>" +
            c.name + "</li>";
    }
    computerCategoriesElementHTML += "</ul>";
    computerCategoriesElement.innerHTML = computerCategoriesElementHTML;
}
loadComputerCategories();
function onCategorySelected(categoryId){
    if (currentSelectedCategoryId === categoryId) { } else {
        currentSelectedCategoryId = categoryId;
        computersLoading.style.display = 'block';
        computersElement.innerHTML = '';
        computersElement.style.display = 'none';
        begin = 0;
        allComputersLoaded = false;
        allowSrcoll = true;
        for (let index = 0; index < categories.length; index++) {
            const c = categories[index];
            if (c.id === categoryId) {
                document.getElementById('computer-category-' + c.id).style.color = 'blue';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'bold';
            } else {
                document.getElementById('computer-category-' + c.id).style.color = 'black';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'normal';
            }
        }
        setTimeout(function (){
            computersLoading.style.display = 'none';
            var computersSelected = [];
            for (var i = 0; i < computers.length; i++) {
                const c = computers[i];
                if (c.categoryId === categoryId) {
                   computersSelected.push(c);
                }   
            }
            for (var i = 0; i < computersSelected.length; i ++) {
                const c = computersSelected[i];

                for (var j = 0; j < users.length; j++){
                    const u = users[j];
                    if (u.id === c.userId) {
                        c.phone = u.phone; break;
                    }
                }
            } computersSelectedGlobal = computersSelected.slice();
            computersSelectedGlobalForSearch = computersSelected.slice();
            computersElementHTML = "";
            if (computersSelected.length <= length) { allComputersLoaded = true; } else {

            }
            computersSelected = computersSelected.slice(begin, length);

            for (var i = 0; i < computersSelected.length; i++) {
                const c = computersSelected[i];
                computersElementHTML += "<div class = 'computer-card-container' >" +
                "<div class='computer-card' >" +
                "<div class='computer-image' onclick='onComputerSelected(" + c.id + ")' style = 'background'" +
                "<div class='computer-data'><div class='computer-name' title='"+
                c.name + "'>" + c.name + "</div>" +
                "<div class='computer-description' title='" + 
                c.description + "'>" + c.description + "</div>" +
                "<div class='computer-price' title='" + c.price + " AZN'>"+
                c.price + "AZN</div>" +
                "<div class='computer-new'>" + (c.isNew ? 'Yes' : 'No') + "</div>" +
                "<div class='user-phone' title='" + c.phone + "'>" + c.phone + "</div>" +
                "<div class='add-to-basket-div'><button class='btn btn-primary' " +
                "onclick='onAddToBasket(" +
                c.id + ")'>Add to basket</button></div>" +
                "</div></div></div>";
            }
            computersElement.innerHTML = computersElementHTML;
            computersElement.style.display = 'block';
            if (computersSelected.length === 0) {
                computersElement.innerHTML = "<h2 class='not-found'>there is no such computers in this category!</h2>"
            }
        }, 300)

    }
}
onCategorySelected(1);
function onComputerSelected(computerId) {
    computerDetailsModal.style.display = "block";
    var selectedComputer = null;
    for (let index = 0; index < computers.length; index++){
        const c = computers[index];
        if (c.id === computerId) {
            selectedComputer = c; break;
        }
    }
    computerModalImageContainer.style.backgroundImage = "url('" + selectedComputer.imagePath + "')"
    computerModalName.innerHTML = selectedComputer.description;
    computerModalDescription.innerHTML = selectedComputer.description;
    computerModalPrice.innerHTML = selectedComputer.price + " AZN";
    computerModalPhone.innerHTML = selectedComputer.phone;
    computerModalNew.innerHTML = selectedComputer.isNew ? 'Yes' : 'No';
    computerModalRam.innerHTML = selectedComputer.ram + " GB";
    computerModalCpu.innerHTML = selectedComputer.cpu;
    computerModalDrive.innerHTML = selectedComputer.drive + " GB";
    computerModalDriveType.innerHTML = selectedComputer.driveType == "hdd" ? "HDD" : "SSD";
    computerModalOs.innerHTML = selectedComputer.os;
    computerModalVideoCard.innerHTML = selectedComputer.videoCard + " GB";
}
function onToBasket(computerId){
    openBasketButton.style.display = 'none';
    setTimeout(function () {
        openBasketButton.style.display = 'inline-block';

        var existsInBasket = false;
        for (let index = 0; index < basketComputers.length;index++) {
            const b = basketComputers[index];
            if (b.computer.id === computerId){
                b.count++; existsInBasket = true; break;
            }
        }
        if (existsInBasket) {
        }else{
            var selectedComputer = null;
            for (let index = 0; index < computers.legth; index++){
                const c = computers[index];
                if (c.id === computerId) {
                    selectedComputer = c; break;
                }
            }
            basketComputers.push({ count:1, computer: selectedComputer});
        }
        showBasketComputerCount();
        saveBasketcomputersToLocalStorage();
    }, 200);
}
function saveBasketcomputersToLocalStorage() {
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
}
window.addEventListener('click',function (event) {
    if (evevnt.target === computerDetailsModal){
        computerDetailsModal.style.display = 'none';
    }
});
function openBasket() {
    if (basketComputer.legth === 0) {
        showAlertMessage('Basket is empty',1000);
    }else {
        basketModalElement.style.display = 'block';
        refreshComputersBasket();
        calculateBasketTotalPrice();
    }
}
basketModalCloseButtonElement.addEventListener('click', function () {
    closeBasket();
});
function refreshComputersBasket() {
    basketComputersTableBodyElement.innerHTML = "";
    basketComputersTableBodyElement.Html = "";
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        basketComputersTableBodyElement += '<tr><td>' + b.computer.id;
        basketComputersTableBodyElement += '</td><td><img class= basket-computer-image" src="' +
            b.computer.imagePath + '"/>';
        basketComputersTableBodyElementHtml += '</td><td>'+ b.computer.name;
        basketComputersTableBodyElementHtml += '</td><td>'+ b.computer.price;
        basketComputersTableBodyElementHtml += 'AZN</td><td><input min="1" max="10000" type="number" value ="' +
            b.count + '" '+
            'onchange = "computerCountChanged(this,' + b.computer.id + ')" onkeypress="checkCount(event)" />';
        basketComputersTableBodyElementHtml += '</td><td id="computer-total-price-' +
            b.computer.id + '">' + (b.computer.price * b.count);
        basketComputersTableBodyElementHtml += ' AZN</td><td><button oncklick="dleteBasketComputer(' +
            b.computer.id + 
            ')"class="btn btn-danger">Delete</button></td><tr>';    
    }
    basketComputersTableBodyElement.innerHTML = basketComputersTableBodyElementHtml;
}
function calculateBasketTotalPrice() {
    var totalPrice = 0;
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        totalPrice+= b.count * computer.price;
    }
    basketTotalPriceContentElement.innerHTML = totalPrice;
}
calculateBasketTotalPrice();
function computerCountChanged(countInput, computerId) {
    if (countInput.value == '' || countInput.value == '0') { countInput.value = "1"; }
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        if (b.computer.id === computerId) {
            b.count = Number(countInput.value);
            document.getElementById('copmuter-total-price-' + b.computer.id).innerHTML = "" + (b.count * b.computer.price) + "AZN";
            break;
        }
    }
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    calculateBasketTotalPrice();
}
function deleteBasketComputer(computerId) {
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        if (b.computer.id === computerId) {
            basketComputers.splice(index,1);
            break;
        }
    }
    refreshComputersBasket();
    localStorage.setItem('basketComputers' , JSON.stringify(basketComputers));
    hideAndShowBasketButton();
    calculateBasketTotalPrice();
    if (basketComputers.length === 0){
        closeBasket();
    }
}
function hideAndShowBasketButton(){
    openBasketButton.style.display = 'none';
    setTimeout(function () {
        openBasketButton.style.display = 'block';
        showBasketComputerCount();
    }, 200);
}
function closeBasket() {
    setTimeout(function () { basketModalElement.style.display = 'none';}, 200);
}
function clearBasket() {
    basketComputers.splice(0, basketComputers.length);
    refreshComputersBasket();
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    calculateBasketTotalPrice();
    hideAndShowBasketButton();

    setTimeout(() => {
        closeBasket();
    },300);
}

function confirmOrder() {
    closeBasket();
    setTimeout(() => {
        openConfirmOrderModalPage();
    },200);
}



var confirmOrderModalElement = document.getElementById('confirm-order-modal');
var confirmOrderModalCloseButtonElement = document.getElementById('confirm-order-modal-close-button');

confirmOrderModalCloseButtonElement.addEventListener("click", function () {
    closeConfirmOrder();
});

function closeConfirmOrder(){

    setTimeout(function () { confirmOrderModalElement.style.display = 'none'; }, 100);
}

function openConfirmOrderModalPage() {

    confirmOrderModalElement.style.display = 'block';
    fillCustomerInformation();

}

function checkCount(event) {

    var code = event.charCode;
    if (code >= 48 && code <= 57) {
        
    } else {

        event.returnValue = false;
    }

    if (Number(event.target.value + "" + event.key) > 10000) {
        event.target.value = "1";
        event.returnValue = false;
    }
    if (event.target.value === "0" && event.key === "0") {event.returnValue = false; }

}

var customerNameElement = document.getElementById("customer-name");
var customerAddressElement = document.getElementById("customer-address");
var customerPhoneElement = document.getElementById("customer-phone");
var customerEmailElement = document.getElementById("customper-email");
var customerOrderNoteElement = document.getElementById("customer-order-note");


function onOrderSubmit(event) {
    event.preventDefault();

    var orderObject = {};
    orderObject.note = customerOrderNoteElement.value;
    orderObject.basketComputers = basketComputers;
    var customer = {};
    customer.name = customerNameElement.value;
    customer.address = customerAddressElement.value;
    customer.phone = customerPhoneElement.value;
    customer.email = customerEmailElement.value;
    orderObject.customer = customer;
    orderObject.register = new Date();
    var orders = [];
    var orderString = localStorage.getItem("orders");
    if (orderString == null) {
        localStorage.setItem("orders", "[]")
    }else{
        orders = JSON.parse(ordersString);
    }

    var orderId = 0;
    for (let index = 0; index < orders.length; index++) {
        const order = orders[index];
        if (userIdList.includes(b.computer.userId)) { } else {
            userIdList.push(b.computer.userId);
        }
    }
    for (let index = 0; index < userIdList.length; index++) {
        var orderObjectLocal = {};
        orderId++;
        orderObjectLocal.id = orderId;
        orderObjectLocal.note = orderObject.note;
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    customer.orderNote = orderObject.note;
    endOrderRegistration(customer);
}



function endOrderRegistration(customer){
    basketComputers.splice(0, basketComputers.length);

    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    
    hideAndShowBasketButton();
    localStorage.setItem('order-customer', JSON.stringify(customer));
    closeConfirmOrder();
    setTimeout(() => {
        showAlertMessage("your order is taken!", 2000);
    }, 1000);

}

function fillCustomerInformation() {
    var customerString = localStorage.getItem("order-customer");
    var orderCustomer = {};
    if (customElements == null) {

    } else {
        orderCustomer = JSON.parse(customerString);

        customerNameElement.value = orderCustomer.name;
        customerAddressElement.value = orderCustomer.address;
        customerPhoneElement.value = orderCustomer.phone;
        customerEmailElement.value = orderCustomer.email;
        customerOrderNoteElement.value = orderCustomer.orderNote;
    }




}



function calculateOrderTotalPrice(order) {
    var totalPrice = 0;

    for (let index = 0; index < order.basketComputer.length; index++) {
        const b = order.basketComputers[index];
        totalPrice += b.count * b.computer.price;

    }

    return totalPrice;
}

function showAlertMessage(message, duration) {
    var messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('alert-message');

    var fixedElements = document.getElementById('fixed-elements');
    fixedElements.appendChild(messageElement);
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
        messageElement.remove();
    }, duration);
}

var computerSearchInputElement = document.getElementById('computer-search-input');

function onSearchInput(inputElement) {

}
function onSearchChange(inputElement) {

}

var computersElementHTML="";

function addComputersToPage(computersLocal){
      
    for (var i = 0; i < computersLocal.length; i++) {
        const c = computersLocal[i];
        computersElementHTML += "<div class = 'computer-card-container' >" +
        "<div class='computer-card' >" +
        "<div class='computer-image' onclick='onComputerSelected(" + c.id + ")' style = 'background-image:url(" + c.imagePath
        "<div class='computer-data'><div class='computer-name' title='"+
        c.name + "'>" + c.name + "</div>" +
        "<div class='computer-description' title='" + 
        c.description + "'>" + c.description + "</div>" +
        "<div class='computer-price' title='" + c.price + " AZN'>"+
        c.price + "AZN</div>" +
        "<div class='computer-new'>" + (c.isNew ? 'Yes' : 'No') + "</div>" +
        "<div class='user-phone' title='" + c.phone + "'>" + c.phone + "</div>" +
        "<div class='add-to-basket-div'><button class='btn btn-primary' " +
        "onclick='onComputerSelected(" + c.id + ")'>Add to basket</button></div>" +
        "</div></div></div>";
    }
    computersElement.innerHTML = computersElementHTML;
}

function onSearchKeyDown(event) {
    if (event.keyCode == 13) {
        begin = 0;
        allComputersLoaded = true;
        computersElement.innerHTML = '';
        computersElement.style.display = 'none';
        computersElement.style.display = 'block';
        setTimeout(function () {
            computersLoading.style.display = 'none';

            computersElementHTML = "";
            let searchValue = event.target.value.toLowerCase();
            searchValue = searchValue.trim();
            let findedComputers = [];

            computersSelectedGlobal = computers.slice();

            for (let index = 0; index < computersSelectedGlobal.length; index++) {
                const c = computersSelectedGlobal[index];
                if (c.name.toLowerCase().includes(searchValue)) {
                    findedComputers.push(c);
                }
            }

            if (findedComputers.length <= length) {allComputersLoaded = true;} else{

            }
            console.log(findedComputers.length);
            computersSelectedGlobal = findedComputers.slice();
            findedComputers = findedComputers.slice(begin, length);
            console.log(findedComputers.length);
            addComputersToPage(findedComputers);
            computersElement.style.display = 'block';
            if (findedComputers.length == 0) {computersElement.innerHTML = "<h2 class'not-found'>there is no computers found for your search</h2>"}
            allComputersLoaded = false;
        }, 500);
    }
}

let computerModalImageContainer = document.getElementById('computer-modal-image-container');


function searchCategory(onSearchInput) {
    let searchText = onSearchInput.value.trim();
    searchText = searchText.toLowerCase();
    categories = [];
    for (let index = 0; index < categoriesGlobal.length; index++) {
        const c = categoriesGlobal[index];
        if (c.name.toLowerCase().includes(searchText)) {
            categories.push(c);
        }
    }
    loadComputerCategories();
    
}

let allComputersLoaded = false;
let begin = 0;
let length = 25;
let allowSrcoll = false;
let computersLoadingNext = document.getElementById('computers-loading-next');

window.addEventListener('scroll', () => {
    if (allComputersLoaded) {
        console.log('all computers loaded!');
    } else {
        if (allowSrcoll) {
            const distanceToBottom = document.body.getBoundingClientRect().bottom;
            const clientHeigth = document.documentElement.clientHeight;
            if (distanceToBottom < clientHeigth + 150) {
                allowSrcoll = false;
                computersLoadingNext.style.display = 'block';
                setTimeout(function () {

                    if(computersSelectedGlobal.length <= (begin + length)) {
                        allComputersLoaded = true; computersLoadingNext.style.display = 'none';
                    } else {
                        begin += length;
                        let nextComputers = computersSelectedGlobal.slice(begin, begin + length);
                        addComputersToPage(nextComputers);

                        computersLoadingNext.style.display = 'none';

                    }
                    allowSrcoll = true;
                },800);
            }
        }
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        allowSrcoll = true;
    }, 500);
});