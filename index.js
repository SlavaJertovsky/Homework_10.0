function removeChar(string) {  //Обьявляем функцию
    if (string.length > 2){      //Задаём условие. Если символов больше 2-х, то выполняется текущий код
    return string.slice(1, -1);  // Метод, позволяющий обрезать необходимые символы (первая с начала и первая с конца строки)
  } else {
    return string;              // В иных случаях, возвращается целая строка
  }
  }
  console.log(removeChar('eloquent')); // loquen
  console.log(removeChar('country')); // ountr
  console.log(removeChar('person')); // erso
  console.log(removeChar('op'));    // op
  