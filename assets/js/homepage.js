const addMember = () => {
    $("#main").on("submit", (e) => {
        e.preventDefault();
        const data = {
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val(),
            dob: $('#inputDOB').val(),
            memberid: $('#inputFirstName').val() + $('#inputLastName').val() + $('#inputDOB').val().replace(/-/gi,''),
            sex: $("input[name='sex']:checked").val(),
            address: $("#address").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            zipcode: $("#zipcode").val(),
            membershipType: $("#membershipType").val(),
            status: $("#status").val(),
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
        $("#main").remove();
        let main = $(
            `<div id="main">
                <form class="form-inline">
                    <label class="col-2" for="inputFirstName">First Name</label>
                    <input class="col-4" type="firstname" class="form-control" id="inputFirstName" placeholder="Your First Name">
                </form>
                <br>
                <form class="form-inline">
                    <label class="col-2" for="inputLastName">Last Name</label>
                    <input class="col-4" type="lastname" class="form-control" id="inputLastName" placeholder="Your Last Name">
                </form>
            </div>
            `
        );
        $(".container").append(main);
    });

    $.ajax({
        url: "/searchMembership",
        type: "GET"
    })
    .done((members) => {
        members.forEach((member) => {
            console.log(member);
        })
    })
}

function create() {
    window.location.href = '/';
}

$(document).ready(function() {    
    addMember();
    searchMember();
    $("#create").on("click", create);      
});












// $("#main").on("submit", (e) => {
//     e.preventDefault();
//     console.log("Hello")
// })

// $("#search").on("click", (e) => {
//     var s = $("#main").contents()
//     $("#main").remove();
//     setTimeout(function() {
//         $(".container").append(s)
//     }, 1000)
    
// })