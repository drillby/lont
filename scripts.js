function zpracovat() {
    alert("Rezervace proběhla úspěšně!")
}

function checkDate() {
    var date1 = document.getElementById("date1").value
    var date2 = document.getElementById("date2").value

    if (date1.length == 0 || date2.length == 0)
        alert("Vyberte datum")
    var pickedDate1 = date1.split("-")
    var pickedDate2 = date2.split("-")
    
    var today = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]

    if (pickedDate1[0] - today[0] < 0 || pickedDate1[1] - today[1] < 0 || pickedDate1[2] - today[2] < 0)
        alert("Datum příjezdu je nižší než dnešní datum!")

    else if (pickedDate2[0] - today[0] < 0 || pickedDate2[1] - today[1] < 0 || pickedDate2[2] - today[2] < 0)
        alert("Datum odjezdu je nižší než dnešní datum!")

    else if (pickedDate2[0] - pickedDate1[0] < 0 || pickedDate2[1] - pickedDate1[1] < 0 || pickedDate2[2] - pickedDate1[2] < 0)
        alert("Datum odjezdu je nižší než datum příjezdu!")

    else
        alert("Rezervace úspěšně vytvořena.")
}

function fiktivniFirma(){
    alert("Jsme fiktivní firma.")
}