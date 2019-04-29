let count = 1

function newModule(){
    let name = $('label').filter(document.getElementById('set-name')).attr('for')
    $('#addInput').before(`<div class="new-recipe-form-module" id="input-module-${count}"></div>`)
    $(`#input-module-${count}`).append(`<input type="text" name="${name}" value="" id="ingredient-${count}"/>`)
    $(`#input-module-${count}`).append(`<input type="button" value="X" id="delete-${count}" />`)
    $(`#delete-${count}`).on('click', function(){
        $(this).parent().remove();
    })
}

function createNewModule() {
    $('#addInput').on('click', function(){
        newModule();
        count = count + 1
    })
}

$(function(){
     createNewModule();
})



