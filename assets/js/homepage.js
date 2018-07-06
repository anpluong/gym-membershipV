const addMember = () => {
    $("#main").on("submit", (e) => {
         e.preventDefault();
         $('#result').empty();
        const data = {
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val(),
            dob: $('#inputDOB').val(),
            memberid: 'lc' + Math.random().toString(36).substring(2, 10),
            ssn: $('#ssn').val(),
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
            if (result == 'pass') {
                $('#result').append("Data is inserted")
                setTimeout(function() {
                    window.location.href = '/';
                }, 3000)
            }
        })
        .fail(function(error) {   
            $('#result').append(error.responseText + " OR " + " wrong data input")          
            console.log(error.responseText);
          })
          
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











