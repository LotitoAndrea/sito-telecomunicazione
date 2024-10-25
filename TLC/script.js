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