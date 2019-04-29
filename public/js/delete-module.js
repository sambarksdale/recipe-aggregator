function deleteListModule() {
    $('.delete-item').on('click', function() {
        $(this).parent().remove();
    })
}

$(function(){
    deleteListModule();
})