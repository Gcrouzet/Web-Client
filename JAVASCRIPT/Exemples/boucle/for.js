/*for (var iter = 1; iter <= 5; iter++) { // On initialise une variable, et tant qu'elle est inférieure ou égale à 5 on l'incrémente de 1.
    alert('Itération n°' + iter); // A chaque fois on affiche une boîte de dialogue (5 fois)
    }*/

    for (var i = 0, prenoms = '', prenom; true; i++) {
        prenom = prompt('Entrez un prénom :');
        if (prenom) { prenoms += prenom + ' '; }
        else { break; } }
        alert('Il y a ' + i + ' prénoms :\n\n' + prenoms); // Les \n servent à faire des sauts de ligne
        