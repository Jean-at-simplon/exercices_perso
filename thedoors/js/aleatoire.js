var titre = choisirTitre();
console.log("titre : "+titre);

var titreEclater = titre.split(' ');
console.log("titreEclater : "+titreEclater);

var titreCacher = cacherTitre(titreEclater);
console.log("titreCacher : "+titreCacher);

var lettre = ['E', 'T', 'D', 'H', 'N', 'A', 'v', 'p', 's', 'c', 'r', 'm', 'f'];
var sousTitre = [];
var transfert = [];
var resultat = '';

for (var k = 0; k < titreEclater.length; k++) {
    transfert = [];
    for (var x = 0; x < titreEclater[k].length; x++) {
        transfert.push('_');
    }

    console.log("transfert : "+transfert);

    for (var j = 0; j < lettre.length; j++) {

        console.log('lettre : '+lettre[j])

        sousTitre = titreEclater[k].split('');
        console.log("sousTitre : "+sousTitre);




        for (var i = 0; i < sousTitre.length; i++) {
            if (lettre[j] === sousTitre[i]) {
                transfert.splice(i, 1, lettre[j]);
                console.log(transfert);
                continue;
            }
        }

    }
    resultat += transfert.join('') + ' ';
    console.log('resultat :'+resultat);
}



function choisirTitre() {
    var liste = ['THE END',
        'BREAK ON THROUGH',
        'THE CRYSTAL SHIP',
        'LIGHT MY FIRE',
        'STRANGE DAYS',
        'HORSES LATTITUDES',
        'PEOPLE ARE STRANGE',
        'WHEN THE MUSIC S OVER',
        'HELLO I LOVE YOU',
        'SPANISH CARAVAN',
        'THE UNKOWN SOLDIER',
        'SHAMAN S BLUES',
        'THE SOFT PARADE',
        'TELL ALL THE PEOPLE',
        'TOUCH ME'
    ];
    var index = Math.round(Math.random() * liste.length); //Calcul du nom aléatoire * nbr titres 
    return liste[index];
}

function cacherTitre(titre) {
    var resultat = '';
    for (var k = 0; k < titre.length; k++) { //On prend chaque mot de l'array
        var transfert = []; //La variable sera initialise pour chaque mot 
        for (var x = 0; x < titre[k].length; x++) { //A chaque mot, on remplace les lettres
            transfert.push('_'); //Par des tirets
        }
        resultat += transfert.join('') + ' '; //Rassemblement des morceaux dans une string
    }
    return resultat;
}