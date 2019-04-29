let count = 1

function newModule(){
    $('#addIngredient').before(`<div class="new-recipe-form-module" id="ingredient-module-${count}"></div>`)
    $(`#ingredient-module-${count}`).append(`<input type="text" name="ingredients" value="" id="ingredient-${count}"/>`)
    $(`#ingredient-module-${count}`).append(`<input type="button" value="X" id="delete-${count}" />`)
    $(`#delete-${count}`).on('click', function(){
        $(this).parent().remove();
    })
}

function createNewModule() {
    $('#addIngredient').on('click', function(){
        newModule();
        count = count + 1
    })
}

$(function(){
     createNewModule();
})



