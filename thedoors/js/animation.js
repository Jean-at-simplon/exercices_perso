$(document).ready(function(){
    $('#biographie').hide();
    $('#jim, #ray, #robby, #john').hide();
    $('#doors, #strange, #waiting, #parade').hide();

/** ANIMATION BIO DU GROUPE **/

    $('#boutonBio').click(function(){
        $('#biographie').show(800);
        $(this).hide();
    });

    $('#boutonBio1').click(function(){
        $('#biographie').hide(800);
        $('#boutonBio').show();
    });

/** ANIMATION MEMBRES DU GROUPE **/

    $('#boutonJim').click(function(){
        $('#jim').show(800);
        $('#boutonJim').hide();
        $('#titreJim').fadeTo(400, 1);
        $('#ray, #robby, #john').hide();
        $('#boutonRay, #boutonRobby, #boutonJohn').show();
        $('#titreRay, #titreRobby, #titreJohn').fadeTo(400, 0.5);
    });

    $('#boutonJim1').click(function(){
        $('#jim').hide(800);
        $('#boutonJim').show();
        $('#titreRay, #titreRobby, #titreJohn').fadeTo(400, 1);
    });

    $('#boutonRay').click(function(){
        $('#ray').show(800);
        $('#boutonRay').hide();
        $('#titreRay').fadeTo(400, 1);
        $('#jim, #robby, #john').hide();
        $('#boutonJim, #boutonRobby, #boutonJohn').show();
        $('#titreJim, #titreRobby, #titreJohn').fadeTo(400, 0.5);
    });

    $('#boutonRay1').click(function(){
        $('#ray').hide(800);
        $('#boutonRay').show();
        $('#titreJim, #titreRobby, #titreJohn').fadeTo(400, 1);
    });

    $('#boutonRobby').click(function(){
        $('#robby').show(800);
        $('#boutonRobby').hide();
        $('#titreRobby').fadeTo(400, 1);
        $('#jim, #ray, #john').hide();
        $('#boutonJim, #boutonRay, #boutonJohn').show();
        $('#titreJim, #titreRay, #titreJohn').fadeTo(400, 0.5);
    });

    $('#boutonRobby1').click(function(){
        $('#robby').hide(800);
        $('#boutonRobby').show();
        $('#titreJim, #titreRay, #titreJohn').fadeTo(400, 1);
    });

    $('#boutonJohn').click(function(){
        $('#john').show(800);
        $('#boutonJohn').hide();
        $('#titreJohn').fadeTo(400, 1);
        $('#jim, #ray, #robby').hide();
        $('#boutonJim, #boutonRay, #boutonRobby').show();
        $('#titreJim, #titreRay, #titreRobby').fadeTo(400, 0.5);
    });

    $('#boutonJohn1').click(function(){
        $('#john').hide(800);
        $('#boutonJohn').show();
        $('#titreJim, #titreRay, #titreRobby').fadeTo(400, 1);
    });

/** ANIMATION POCHETTES DE DISQUES **/

    $('#discUn').mouseover(function(){
        $(this).attr('src','img/albums/theDoorsBack.jpg');
    });
    $('#discUn').mouseout(function(){
        $(this).attr('src','img/albums/theDoors.jpg');
    });
    
    $('#discDeux').mouseover(function(){
        $(this).attr('src','img/albums/strangeBack.jpg');
    });
    $('#discDeux').mouseout(function(){
        $(this).attr('src','img/albums/strangeDays.jpg');
    });

    $('#discTrois').mouseover(function(){
        $(this).attr('src','img/albums/waitingBack.jpg');
    });
    $('#discTrois').mouseout(function(){
        $(this).attr('src','img/albums/waitingForTheSun.jpg');
    });

    $('#discQuatre').mouseover(function(){
        $(this).attr('src','img/albums/paradeBack.jpg');
    });
    $('#discQuatre').mouseout(function(){
        $(this).attr('src','img/albums/theSoftParade.jpg');
    });

/** ANIMATION DETAIL ALBUMS **/

    $('#boutonDoors').click(function(){
        $('#doors').slideDown(800);
        $('#boutonDoors').hide();
        $('#discUn').fadeTo(400, 1);
        $('#strange, #waiting, #parade').hide();
        $('#boutonStrange, #boutonWaiting, #boutonParade').show();
        $('#discDeux, #discTrois, #discQuatre').fadeTo(400, 0.5);
    });

    $('#boutonDoors1').click(function(){
        $('#doors').slideUp(800);
        $('#boutonDoors').show();
        $('#discDeux, #discTrois, #discQuatre').fadeTo(400, 1);
    });

    $('#boutonStrange').click(function(){
        $('#strange').slideDown(800);
        $('#boutonStrange').hide();
        $('#discDeux').fadeTo(400, 1);
        $('#doors, #waiting, #parade').hide();
        $('#boutonDoors, #boutonWaiting, #boutonParade').show();
        $('#discUn, #discTrois, #discQuatre').fadeTo(400, 0.5);
    });

    $('#boutonStrange1').click(function(){
        $('#strange').slideUp(800);
        $('#boutonStrange').show();
        $('#discUn, #discTrois, #discQuatre').fadeTo(400, 1);
    });

    $('#boutonWaiting').click(function(){
        $('#waiting').slideDown(800);
        $('#boutonWaiting').hide();
        $('#discTrois').fadeTo(400, 1);
        $('#doors, #strange, #parade').hide();
        $('#boutonDoors, #boutonStrange, #boutonParade').show();
        $('#discUn, #discDeux, #discQuatre').fadeTo(400, 0.5);
    });

    $('#boutonWaiting1').click(function(){
        $('#waiting').slideUp(800);
        $('#boutonWaiting').show();
        $('#discUn, #discDeux, #discQuatre').fadeTo(400, 1);
    });

    $('#boutonParade').click(function(){
        $('#parade').slideDown(800);
        $('#boutonParade').hide();
        $('#discQuatre').fadeTo(400, 1);
        $('#doors, #strange, #waiting').hide();
        $('#boutonDoors, #boutonStrange, #boutonWaiting').show();
        $('#discUn, #discDeux, #discTrois').fadeTo(400, 0.5);
    });

    $('#boutonParade1').click(function(){
        $('#parade').slideUp(800);
        $('#boutonParade').show();
        $('#discUn, #discDeux, #discTrois').fadeTo(400, 1);
    });
});