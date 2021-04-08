function choix(){   /* Fonction modifier le type/fond */
    let choix = document.getElementById("type");
    let valeur = choix.value
    if (valeur === "base"){
        let fond = document.getElementById("image");
        fond.style.visibility='hidden';
    }
    else{
        let fond = document.getElementById("image");
        fond.style.visibility='visible';
        if (valeur === "eau"){
            fond.src = "Images/fond_eau.png";    //je met l'image correspondant au choix
        }
        if (valeur === "feu"){
            fond.src = "Images/fond_feu.png";
        }
        if (valeur === "plante"){
            fond.src = "Images/fond_plante.png";
        }
        if (valeur === "acier"){
            fond.src = "Images/fond_acier.png";
        }
        if (valeur === "combat"){
            fond.src = "Images/fond_combat.png";
        }
        if (valeur === "dragon"){
            fond.src = "Images/fond_dragon.png";
        }
        if (valeur === "electrique"){
            fond.src = "Images/fond_electrique.png";
        }
        if (valeur === "fee"){
            fond.src = "Images/fond_fee.png";
        }
        if (valeur === "glace"){
            fond.src = "Images/fond_glace.png";
        }
        if (valeur === "normal"){
            fond.src = "Images/fond_normal.png";
        }
        if (valeur === "insecte"){
            fond.src = "Images/fond_insecte.png";
        }
        if (valeur === "poison"){
            fond.src = "Images/fond_poison.png";
        }
        if (valeur === "psy"){
            fond.src = "Images/fond_psy.png";
        }
        if (valeur === "roche"){
            fond.src = "Images/fond_roche.png";
        }
        if (valeur === "sol"){
            fond.src = "Images/fond_sol.png";
        }
        if (valeur === "spectre"){
            fond.src = "Images/fond_spectre.png";
        }
        if (valeur === "tenebre"){
            fond.src = "Images/fond_tenebre.png";
        }
        if (valeur === "vol"){
            fond.src = "Images/fond_vol.png";
        }
    }
}


function nom(){   /* Fonction pour modifier le nom */
    let text=document.getElementById("nomPerso");
    let para=document.getElementById("célayalenom");
    para.innerText = text.value;
}

function choixpv(){   /* Fonction pour modifier les points de vie */
    let text=document.getElementById("pv");
    let para=document.getElementById("PV");
    let affichage=document.getElementById("célépv")
    affichage.style.visibility='visible';
    para.innerText = text.value;
}

function change_image(){   
    let choixphoto = document.getElementById("chpt_img");
    let photovalue = choixphoto.value;      //je récupère le choix fait par l'utilisateur
    if (photovalue === "rien"){
        let photo = document.getElementById("img");
        photo.style.visibility='hidden';
    }
    else{
        let photo = document.getElementById("img");     //je récupère l'emplacement de l'image
        photo.style.visibility='visible';    //je rend l'image visible
        if (photovalue === "donna"){
            photo.src = "Images/donna.png";    //je met l'image correspondant au choix
        }
        if (photovalue === "kabu"){
            photo.src = "Images/kabu.png";
        }
        if (photovalue === "percy"){
            photo.src = "Images/percy.png";
        }
        if (photovalue === "ball"){
            photo.src ="Images/ball-masque.png"
        }
        if (photovalue === "tarak"){
            photo.src ="Images/tarak.png"
        }
        if (photovalue === "alistair"){
            photo.src = "Images/alistair.png";
        }
        if (photovalue === "chaz"){
            photo.src = "Images/chaz.png";
        }
        if (photovalue === "faiza"){
            photo.src ="Images/faiza.png"
        }
        if (photovalue === "lona"){
            photo.src ="Images/lona.png"
        }
        if (photovalue === "nabil"){
            photo.src = "Images/nabil.png";
        }
        if (photovalue === "peterson"){
            photo.src = "Images/peterson.png";
        }
        if (photovalue === "rosemary"){
            photo.src ="Images/rosemary-rare.png"
        }
        if (photovalue === "roy"){
            photo.src ="Images/roy.png"
        }
        if (photovalue === "sally"){
            photo.src = "Images/sally.png";
        }
        if (photovalue === "shehroz"){
            photo.src ="Images/shehroz.png"
        }
        if (photovalue === "travis"){
            photo.src ="Images/travis-rare.png"
        }
    }
}

function capa1_nom() {
    let text=document.getElementById("nom_c1");
    let para=document.getElementById("Cap1");
    para.innerText = text.value;
} 

function capa1_deg() {
    let text=document.getElementById("degat_c1");
    let para=document.getElementById("Deg1");
    para.innerText = text.value;
} 

function capa2_nom() {
    let text=document.getElementById("nom_c2");
    let para=document.getElementById("Cap2");
    para.innerText = text.value;
} 

function capa2_deg() {
    let text=document.getElementById("degat_c2");
    let para=document.getElementById("Deg2");
    para.innerText = text.value;
} 