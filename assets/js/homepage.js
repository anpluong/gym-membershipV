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
      //  location.reload();
    })
}


$(document).ready(function() {    
    addMember();
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