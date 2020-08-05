//procurar o botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
    //duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean: true or false


    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //paga cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
