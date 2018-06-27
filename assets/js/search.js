function create() {
    window.location.href = '/';
}

const search = () => {
    $("#main").on("submit", (e) => {
        $('#member-list').empty();
        e.preventDefault();

        const data = {
            firstName: $('#inputFirstName').val(),
            lastName: $('#inputLastName').val()
        }

        $.ajax({
            url: "/searchMembership",
            type: "POST", 
            data
        })
        .done((result) => {
            result.forEach((member) => {
                const returnedMember = $(
                    `<tr>
                        <td>${member.firstName}</td>
                        <td>${member.lastName}</td>
                    </tr>`
                )
                $('#member-list').append(returnedMember);
            })
        })
    })
}

$(document).ready(function() {    
    $("#create").on("click", create);      
    search();
    
});