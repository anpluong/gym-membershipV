const getMemberInfo = () => {
    let text = window.location.hash.substring(1);
    const data = {
        memberid: text
    }

    $.ajax({
        url: "/display",
        type: "POST",
        data
    })
    .done((result) => {             
         $('#inputFirstName').val(result[0].firstName);
         $('#inputLastName').val(result[0].lastName);
         let dateMember = result[0].dob.split('T');
         $('#inputDOB').val(dateMember[0]);
         $('#ssn').val(result[0].ssn),
         $("input[name='sex'][value=" + result[0].sex + "]").prop('checked', true);
         $('#address').val(result[0].address);
         $('#city').val(result[0].city);
         $("#state").val(result[0].state)
         $("#zipcode").val(result[0].zipCode)
         $("#membershipType").val(result[0].membershipType);
         $("#description").val(result[0].description);     
     })
};
    
function create() {
    window.location.href = '/';
}

function search() {    
    window.location.href = '/search';
}

const update = () => {    
    let text = window.location.hash.substring(1);
    $('#submit-update').on("click", (e) => {  
        e.preventDefault();      
        const data1 = {           
           firstName: $('#inputFirstName').val(),
           lastName: $('#inputLastName').val(),
           dob: $('#inputDOB').val(),
           ssn: $('#ssn').val(),
           memberid: text,
           sex: $("input[name='sex']:checked").val(),
           address: $("#address").val(),
           city: $("#city").val(),
           state: $("#state").val(),
           zipcode: $("#zipcode").val(),
           membershipType: $("#membershipType").val(),
           description: $("#description").val(),
       }
   
       $.ajax({
           url: "/update",
           type: "PUT",
           data: data1
       })
       .done((result) => {
           $('#data-update').empty();
           $('#data-update').append(document.createTextNode("Data is updated"))
        })
    })
}    


const deleteMember = () => {    
    $('#submit-delete').on("click", (e) => {  
        e.preventDefault();  
        const data = {                       
            ssn: $('#ssn').val()
        }

        $.ajax({
            url: '/delete', 
            type: 'DELETE',
            data
        })
        .done((result) => {
            $('#data-update').empty();
            $('#data-update').append(document.createTextNode("Data is deleted"))
            setTimeout(function() {
                window.location.href = '/';
            }, 3000)
         })
    })
}

$(document).ready(() => {
    getMemberInfo();
    $("#create").on("click", create);      
    $("#search").on("click", search);      
    update();
    deleteMember();
 });

