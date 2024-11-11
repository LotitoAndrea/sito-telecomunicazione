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
        bottone.innerHTML = "Mostra Calcolatore Intensità";
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
        bottone1.innerHTML = "Mostra Calcolatore Tensione";
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
        bottone2.innerHTML = "Mostra Calcolatore Resistenza";
    }
}

function calcolaTensione()
{
    const resistenza = parseFloat(document.getElementById("resistenzaB").value);
    const intensita = parseFloat(document.getElementById("intensitaB").value);
    
    const tensione = resistenza * intensita;
    document.getElementById("risultatoB").innerText = "tensione: " + tensione + " volt";

    if (resistenza === 0 || intensita === 0)
        {
            alert("Inserisci dei valori validi.");
            return;
        }
}

function calcolaIntensita()
{
    const resistenza = parseFloat(document.getElementById("resistenzaA").value)
    const tensione = parseFloat(document.getElementById("tensioneA").value)

    const intensita = tensione / resistenza;
    document.getElementById("risultatoA").innerText = "Intesita: " + intensita + " A";

    if (resistenza === 0 || tensione === 0)
        {
            alert("Inserisci dei valori validi.");
            return;
        }
}

function calcolaResistenza()
{
    const tensione = parseFloat(document.getElementById("tensioneC").value)
    const intesita = parseFloat(document.getElementById("intensitaC").value)

    const resistenza = tensione / intesita;
    document.getElementById("risultatoC").innerText = "Intesita: " + resistenza + " A";

    if (tensione === 0 || intesita === 0)
        {
            alert("Inserisci dei valori validi.");
            return;
        }
}
