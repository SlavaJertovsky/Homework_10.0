const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
const coll2 = [2, 0, 17, 3, 9, 15, 4]; 

function calculateSum (items) {  // Объявлем функцию
    let sum = 0;                    // Создаём точку отсчёта
    items.forEach(function (item) { // Используеи метод для forEach для перебора всех элементов.
      if (item % 3 === 0)  {        // Условие при котором элементы будут принимать функцию сложения.
      sum = sum + item;
    }
    })
    return sum;
  }
  
  console.log(calculateSum(coll1)); // 48
  console.log(calculateSum(coll2)); // 27