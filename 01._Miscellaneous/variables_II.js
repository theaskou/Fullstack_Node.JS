totalGloablVariable = "Don't do this";
// Husk at give den en variabeltype (deklarere). Det kan give problemer.
// Hvis man bruger "use strict" i toppen, kan man ikke få lov at køre det.

var globalvariabel2 = "Also ddon't do this";

{
    console.log("What is this?")
    // et block scope. Hvor har vvii set det henne? i et if-statement fx
}

// Rules;
// Always use const if you can 
// otherwise use let, if you need to change the declaration.

function myFynction(){
    // function scope
}

{  // block scope
    var myValue = true;
    {
        var myValue = false;
    }
    console.log(myValue)
    // Den bliver false fordi var "bløder ind" in andre scopes.
}

{
    // block scope
    let myValue = true;
    {
        let myValue = false;
    }
    console.log(myValue)
    // hvad bliver værdien? Det bliver true, fordi den anden værdi ikke er tilgængelig.
}
// ............guard statement, incrementer

for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)

    }, 1000);
} // den printer 6 gange 6. Problemer med scope igen, fordi den incrementer inden den tjekker?