function create() {
    window.location.href = '/';
}

const search = () => {
    $("#main").on("submit", (e) => {
        $('#member-list').empty();
        $('tHead').remove();
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
            
            if (result.length >= 1) {
                   const tHead = $(
                    `<thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </thead>`
                );
                $('#table-list').append(tHead);
            result.forEach((member) => {
                const returnedMember = $(                    
                    `<tr>
                        <td>${member.firstName}</td>
                        <td>${member.lastName}</td>
                    </tr>`
                )
                $('#member-list').append(returnedMember);
                })
            }
        })
    })
}

$(document).ready(function() {    
    $("#create").on("click", create);      
    search();
    
});