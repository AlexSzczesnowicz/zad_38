funktion dwie_liczby (var1, var2){
    let rez_1 = var1 + var2;
    let rez_2 = var1 - var2;
    let rez_3 = var1 * var2;
    if (rez_1 >= 0) {

        console.log("Wynik dodawania wynosi "+rez_1);
        
    } else {
        err_or();
    }
    if (rez_2 >= 0) {
        
        console.log("Wynik odejmowania  wynosi "+rez_2);
        
    } else {
        err_or();
    }
    if (rez_3 >= 0) {
        
        console.log("Wynik mnożenia wynosi "+rez_3;
        
    } else {
        err_or();
    }

}
function err_or(){
    console.log("Wynik jest nieprawidłowy");

}

//dwie_liczby (1,4);