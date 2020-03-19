var number1 = 2, number2 = 2, number3 = 4, result;
result = number1 == number2;

alert(result); // la condition est donc vérifiée car les deux variables contiennent bien la même valeur

result = number1 == number3;
alert(result); // la condition n'est pas vérifiée car 2 est différent de 4
result = number1 < number3;
alert(result); // la condition est vérifiée car 2 est bien inférieur à 4