

$("#add_user").submit(function(event){
    alert("Data inderted Succesfully.")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url": `http://localhost:3030/api/users/${data.id}`,
        "method": 'PUT',
        "data": data
    }

    // $.ajax(request).done(function(response){
    //     alert("Data Update Successfully");
    // })
})