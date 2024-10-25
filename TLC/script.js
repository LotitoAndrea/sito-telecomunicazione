function mostra()
{
    let card = document.getElementById("cardNascosta");
    let bottone = document.getElementById("bottone");
    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none");
        bottone.innerHTML = "Nascondi";
    }
    else
    {
        card.classList.add("d-none");
        bottone.innerHTML = "Mostra";
    }
}

function mostra1()
{
    let card = document.getElementById("cardNascosta1");
    let bottone1 = document.getElementById("bottone1");
    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none");
        bottone1.innerHTML = "Nascondi";
    }
    else
    {
        card.classList.add("d-none");
        bottone1.innerHTML = "Mostra";
    }
}

function mostra2()
{
    let card = document.getElementById("cardNascosta2");
    let bottone2 = document.getElementById("bottone2");
    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none");
        bottone2.innerHTML = "Nascondi";
    }
    else
    {
        card.classList.add("d-none");
        bottone2.innerHTML = "Mostra";
    }
}