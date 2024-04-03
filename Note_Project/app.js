const Input = document.getElementById("Text-Input");
const InputButton = document.querySelector(".Input-Button");
const ButtonDel = document.querySelector(".Delete-Button");
const Item = document.querySelector(".content");



var sayac = 0;
InputButton.addEventListener("click",action);



function action (){
    if (Input.value != ""){
        sayac++;
        var listItem = document.createElement("p");
        var DeleteButton= document.createElement("button");
        var SuccesBtn = document.createElement("button");
        SuccesBtn.className="Succes";
        DeleteButton.className = "DeleteButton";
        DeleteButton.innerHTML ="Sil";
        SuccesBtn.innerHTML = "OK"
        listItem.innerText = sayac + ": "+  Input.value;
        Item.appendChild(listItem);
        Item.appendChild(DeleteButton);
        Item.appendChild(SuccesBtn);
        listItem.className = "List-Item";
        Input.value = "";
        DeleteButton.addEventListener("click",() => {
            sayac--;
            Item.removeChild(listItem);
            DeleteButton.remove();
            SuccesBtn.remove();
            
        })
        SuccesBtn.addEventListener("click",() =>{
            listItem.innerHTML = "BU İŞLEM TAMAMLANDI...";
        })
    }
};
ButtonDel.addEventListener("click", () => {Item.remove();})

