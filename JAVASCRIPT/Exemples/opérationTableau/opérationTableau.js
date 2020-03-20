/*var myArray = ['Rafael', 'Mathilde'];
myArray.push('Ahmed'); // Ajoute « Ahmed » à la fin du tableau
myArray.push('Jérôme', 'Guillaume'); // Ajoute « Jérôme » et « Guillaume » à la fin du tableau

var myArray = ['Rafael', 'Mathilde', 'Ahmed', 'Jérôme', 'Guillaume'];
myArray.shift(); // Retire « Rafael »
myArray.pop(); // Retire « Guillaume »
alert(myArray); // Affiche « Mathilde,Ahmed,Jérôme »*/

var cousinsString = 'Jérôme Guillaume Paul',
cousinsArray = cousinsString.split(' '); // Avec les espaces, on a trois items
alert(cousinsString);
alert(cousinsArray);

var cousinsString_2 = cousinsArray.join('-');
alert(cousinsString_2); 