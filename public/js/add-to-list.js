function addToList() {
    $('.item-checkbox').on('click', function() {
        if($(this).is(':checked')) {
            $(this).siblings().filter(document.getElementsByClassName('hidden-item-input')).attr('name', 'item')
        } else {
            $(this).siblings().filter(document.getElementsByClassName('hidden-item-input')).attr('name', '')
        }   
    })  
}

function listSelector() {
    $('.list-checkbox').on('click', function() {
        if($(this).is(':checked')) {
            $(this).siblings().filter(document.getElementsByClassName('hidden-list-input')).attr('name', 'list')
        } else {
            $(this).siblings().filter(document.getElementsByClassName('hidden-list-input')).attr('name', '')
        }  
    })
}

$(function(){
    addToList();
    listSelector();
})