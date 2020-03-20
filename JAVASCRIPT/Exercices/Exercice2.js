var tabPrenom=[] ,prenom;
while (prenom=prompt('Entrez un prénom :')){
    tabPrenom.push(prenom);
}
if (tabPrenom.length>0){
    alert(tabPrenom.join(' '));
}else{
    alert('erreur : pas de prénom');
}
