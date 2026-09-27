"use strict";

const totalTasks = 20;
const completedTasks = 11;
const dailyLimit = 6;
if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  typeof dailyLimit !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isInteger(dailyLimit) ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks ||
  dailyLimit < 1 ||
  dailyLimit > 1000
) {
  if (typeof dailyLimit !== "number" || !Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дневная норма должна быть целым числом.");
  } else if (dailyLimit < 1 || dailyLimit > 1000) {
    console.log("Ошибка: дневная норма выходит за пределы допустимого диапазона (1...1000).");
  } else {
    console.log("Ошибка: некорректные параметры задач.");
  }
} else {
  let remaining = totalTasks - completedTasks;
  console.log(`Осталось задач: ${remaining}`);

  if (remaining === 0) {
    console.log("Все задачи уже выполнены!");
    console.log("Потребуется дней: 0");
  } else {
    let day = 0;
    while (remaining > 0) {
      day += 1;
      const tasksToday = Math.min(dailyLimit, remaining);
      remaining -= tasksToday;
      console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remaining}`);
    }
    console.log(`Потребуется дней: ${day}`);
  }
}