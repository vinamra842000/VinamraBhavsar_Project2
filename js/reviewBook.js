const $ = (selector) => document.querySelector(selector);
var nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearData() {
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#email").value = "";
    $("#review").value = "";
    $("#star").value = "0";
}

function processData() {
    if ($("#first_name").value == undefined || $("#first_name").value == null || $("#first_name").value == '') {
        alert("First Name: Can not be blank.");
        return;
    }
    else if (!nameRegex.test($("#first_name").value)) {
        alert("First Name: Invalid Entry. Only Alphbet and Hyphen(-) are allowed.");
        return;
    }
    else if ($("#last_name").value == undefined || $("#last_name").value == null || $("#last_name").value == '') {
        alert("Last Name: Can not be blank.");
        return;
    }
    else if (!nameRegex.test($("#last_name").value)) {
        alert("Last Name: Invalid Entry. Only Alphbet and Hyphen(-) are allowed.");
        return;
    }
    else if ($("#email").value == undefined || $("#email").value == null || $("#email").value == '') {
        alert("Email: Can not be blank.");
        return;
    }
    else if (!emailRegex.test($("#email").value)) {
        alert("Email: Invalid Entry.");
        return;
    }
    else if ($("#review").value == undefined || $("#review").value == null || $("#review").value == '') {
        alert("Review: Can not be blank.");
        return;
    }
    else if (parseInt(countWordsOfReview($("#review").value)) > 300) {
        alert("Review: Can not be more than 300 words.");
        return;
    }
    else{
        addReviewToList($("#first_name").value + " " + $("#last_name").value, $("#star").value, $("#review").value);
    }

}

function addReviewToList(name, star, review) {

    var starHtml = "";
    switch (parseInt(star)) {
        case 0:
            starHtml = "";
            break;
        case 1:
            starHtml = "★";
            break;
        case 2:
            starHtml = "★ ★";
            break;
        case 3:
            starHtml = "★ ★ ★";
            break;
        case 4:
            starHtml = "★ ★ ★ ★";
            break;
        case 5:
            starHtml = "★ ★ ★ ★ ★";
            break;
        default:
            starHtml = "";
            break;
    }


    var html = `<hr>
                <div class="review-user-detail">
                    <div class="user">
                        <img src="../../media/user.png" alt="user" height="50px" width="50px">
                        <p>${name}</p>
                    </div>
                    <div class="review">
                        <p class="star"> ${starHtml} </p>
                        <p>${review}</p>
                    </div>
                </div>`;

    var tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    var parenDiv = $("#review-list-box");

    while (tempElement.firstChild) {
        parenDiv.appendChild(tempElement.firstChild);
    }

    clearData();
    changeButtonHtml();
}


function changeButtonHtml(){
    $("#review-button").innerHTML = "Want To Give Another Review?"
}

function countWordsOfReview(review) {
    return review.trim().split(/\s+/).length;
}

document.addEventListener("DOMContentLoaded", () => {
    $("#first_name").focus();
    $("#first_name").select();
    $("#review-button").addEventListener("click", processData);
});