let count = 1

function newRecipeModule(){
    let name = $('label').filter(document.getElementById('set-name')).attr('for')
    $('#addInput').before(`<div class="new-recipe-form-module" id="input-module-${count}"></div>`)
    $(`#input-module-${count}`).append(`<input type="text" name="${name}" value="" id="ingredient-${count}" class="form-text-input"/>`)
    $(`#input-module-${count}`).append(`<input type="button" value="X" id="delete-${count}" class="delete-item"/>`)
    $(`#delete-${count}`).on('click', function(){
        $(this).parent().remove();
    })
}

function createNewRecipeModule() {
    $('#addInput').on('click', function(){
        newRecipeModule();
        count = count + 1
    })
}

$(function(){
     createNewRecipeModule();
})



