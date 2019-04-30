function addToList() {
    $('.checkbox').on('click', function() {
        if($(this).is(':checked')) {
            $(this).siblings().filter(document.getElementsByClassName('hidden-input')).attr('name', 'changed')
        } else {
            $(this).siblings().filter(document.getElementsByClassName('hidden-input')).attr('name', '')
        }   
    })  
}

$(function(){
    addToList();
})