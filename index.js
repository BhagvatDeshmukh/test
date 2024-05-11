let add = document.getElementById("add");
let list = document.getElementById("list");
let text = document.getElementById("textfield");
let cross=document.getElementsByClassName("cross");

add.addEventListener("click", function () {
    if (text.value != "") {
        let note = document.createElement("li");
        note.innerHTML = `<img src="./images/unchecked.png" alt="">
                          <div class="content"></div>
                          <button class="cross">&#x2716;</button>`;
        note.querySelector(".content").innerHTML = text.value;
        text.value = "";
        list.appendChild(note);
        note.addEventListener("click",function(e){
            this.querySelector("img").classList.toggle("checked");
            this.querySelector(".content").classList.toggle("delete_text");
            storedata();
        },false)

        note.querySelector(".cross").addEventListener("click",function(e){
            list.removeChild(e.target.parentElement);
            storedata();
        })
        storedata();
        
    }
})
function storedata(){
    localStorage.setItem("data",list.innerHTML);
}
function loaddata(){
    list.innerHTML=localStorage.getItem("data");
    $("#list>li").on("click",function(e){
        $(this).children("img").toggleClass("checked");
        $(this).children(".content").toggleClass("delete_text");
        storedata();
    })
    $("#list>li>.cross").on("click",function(e){
        $(e.target).parent().remove();
        storedata();
    })
}
loaddata();
// localStorage.clear();