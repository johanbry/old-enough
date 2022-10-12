
const inputBtn = document.getElementById("inputBtn");

inputBtn.addEventListener("click", function(){
    const age = document.getElementById("inputAge").value;
    let result = "";

    if(!isNaN(age) && age.length > 0){
        if(age < 18)
            result = "Du är för ung! (under 18)";
        else if(age > 17 && age < 65)
            result = "Du är i perfekt ålder! (18-64)";
        else result = "Du är för gammal! (65 eller äldre)";
    } else {
        result = "Du måste ange en ålder (tal)";
    }

    document.querySelector("#result p").innerHTML = result;
});