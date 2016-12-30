$(document).ready(function(){                            //rafraichissement de la page
    $('#refresh').on('click', function() {
        location.reload();
    });
    $('#touch').show();
    $('#loose').hide();
    $('#win').hide();
});

var title = choisirTitre();                             //Choix du titre
var splitTitle = title.split('');                       //Titre eclaté en array de lettres
var hideTitle = [];
var hideLetter = cacherTitre(splitTitle);               //Masquage des lettres par une fonction
var error = 0;


$('#result').text(hideLetter);                          //Affichage du titre masqué


/**Tirage aléatoire du titre à deviner */

function choisirTitre() {
    let liste = ['THE END',
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
    let index = Math.floor(Math.random() * liste.length);   //Calcul du nombre aléatoire * nbr titres 
    return liste[index];                                    //arrondi infèrieur
}

/*Fonction pour cacher les lettres du titre*/
function cacherTitre(titre) {
    for (let i = 0; i < titre.length; i++) {            //Pour chaque lettre de l'array
        if (titre[i]===' '){
            hideTitle.splice(i, 1, ' ');                //Les espaces du titre sont remplacer par des espaces
        }
        else {
            hideTitle.splice(i, 1, '_');                //Les lettres sont remplacées par des tirets
        }
    }
    return hideTitle.join('');                          //retour du resultat en string
}

/*Fonction pour controler les lettres par click*/
function appuyerTouche(letter) {
    let count = 0;
    for (let i = 0; i < splitTitle.length; i++) {
                if (letter === splitTitle[i]) {         //Vérification de la lettre dans un mot
                    hideTitle.splice(i, 1, letter);     //Si oui, remplacement du tiret par la lettre correspondante
                    count++;                            //Compteur servant à vérifier les erreurs
                    continue;                           //Vérification de toutes les lettres
                }
            }

    $('#result').text(hideTitle.join(''));              //Affichage du nouveau résultat
    $('button#'+letter).attr('class','btn-lg btn-danger').removeAttr('onclick');    //désactivation de la touche correspondante

    if(hideTitle.join('') === title){                   //Modification en cas de victoire
        $('#pendu').attr('src','img/pendu/win.gif');
        $('#touch').hide();
        $('#win').show();
    }


    if (count===0) {                                    //Si compteur = 0 alors aucune lettre n'a été trouvée
        error++;                                        //Incrémentation du compteur d'erreurs
        $('#pendu').attr('src','img/pendu/image'+error+'.gif');//Changement de l'image
    }

    if (error>6) {                                      //Si 6 erreurs, affichage de la défaite
        $('#pendu').attr('src','img/pendu/lose.gif');
        $('#touch').hide();
        $('#loose').show();
        $('#result').text(title);
    }
    
}