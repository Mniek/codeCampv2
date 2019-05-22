function newExercise( descTxt,  codeTxt)
{   
    let start = document.getElementById("start");
    let art = document.createElement("article");
    let asDesc = document.createElement("aside");
    let asCode = document.createElement("aside");



    
    asDesc.innerHTML= descTxt
    asCode.innerHTML = codeTxt
    art.classList.add("exercise");
    document.body.insertBefore(art, start);
    asDesc.classList.add("descEx")
    asCode.classList.add("codeEx")
    art.appendChild(asDesc)
    art.appendChild(asCode)

}

