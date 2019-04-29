
 
 $(function(){
    $('.addIngredient').on('click', function(){
        $('.addIngredient').before('<input type="text" name="ingredients" value="" />')
        $('.addIngredient').before('<br>')
        $('.addIngredient').before('<br>')
    })   
})



