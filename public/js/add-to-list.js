function addToList() {
    $('.checkbox').on('click', function() {
        if($(this).is(':checked')) {
            $(this).siblings().filter(document.getElementsByClassName('hidden-input')).attr('name', 'item')
        } else {
            $(this).siblings().filter(document.getElementsByClassName('hidden-input')).attr('name', '')
        }   
    })  
}

$(function(){
    addToList();
})