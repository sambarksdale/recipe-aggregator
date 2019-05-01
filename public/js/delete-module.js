function deleteListModule() {
    $('.delete-item').on('click', function() {
        $(this).parent().remove();
    })
}

function addListItem() {
    $('#new-list-item').on('click', function() {
        console.log("asdfasdfas")
        $('#new-list-item').before('<div class="list-item"></div>')
        $('.list-item').last().append('<input type="text" name="list" value="" class="form-text-input"/>')
        $('.list-item').last().append('<input type="button" value="X" class="delete-item" />')
    })
}

$(function(){
    deleteListModule();
    addListItem();
})