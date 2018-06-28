const addMember = () => {
    $("#main").on("submit", (e) => {
        e.preventDefault();
        const data = {
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val(),
            dob: $('#inputDOB').val(),
            memberid: $('#inputFirstName').val() + $('#inputLastName').val() + $('#inputDOB').val().replace(/-/gi,'') + Math.random().toString(36).substring(2, 6),
            sex: $("input[name='sex']:checked").val(),
            address: $("#address").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            zipcode: $("#zipcode").val(),
            membershipType: $("#membershipType").val(),
            description: $("#description").val()
        }

        $.ajax({
            url: "postMembership", 
            type: "POST", 
            data
        })
        .done(function(result) {
            console.log(result, "has been posted");
        })
        location.reload();
    })
}

const searchMember = () => {
    $("#search").on("click", (e) => {               
         $('body').load('search.html');
    });
}

function create() {
    window.location.href = '/';
}

$(document).ready(function() {    
    addMember();
    searchMember();
    $("#create").on("click", create);      
});











