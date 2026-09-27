"use strict";

const totalTasks = 20;
const completedTasks = 11;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks
) {
  if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
    console.log("Ошибка: вместо числа передана строка или иного типа значение.");
  } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: дробное количество задач.");
  } else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество задач.");
  } else if (totalTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница задач (максимум 1000).");
  } else if (completedTasks > totalTasks) {
    console.log("Ошибка: выполнено больше задач, чем существует.");
  } else {
    console.log("Ошибка: некорректные входные данные.");
  }
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remaining = totalTasks - completedTasks;
  const progress = (completedTasks / totalTasks) * 100;

  let status = "";
  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remaining}`);
  console.log(`Прогресс: ${progress.toFixed(1)}%`);
  console.log(`Статус: ${status}`);
}