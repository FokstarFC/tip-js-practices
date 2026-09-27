"use strict";

const rawTotal = " 20 ";
const rawCompleted = "11";

function processTaskInput(totalStr, completedStr) {
  if (typeof totalStr !== "string" || typeof completedStr !== "string") {
    console.log("Ошибка: входные данные должны быть строками.");
    return;
  }

  const trimmedTotal = totalStr.trim();
  const trimmedCompleted = completedStr.trim();

  if (trimmedTotal === "" || trimmedCompleted === "") {
    console.log("Ошибка: передена пустая строка или строка из пробелов.");
    return;
  }

  const total = Number(trimmedTotal);
  const completed = Number(trimmedCompleted);

  if (!Number.isFinite(total) || !Number.isFinite(completed)) {
    console.log("Ошибка: введены некорректные числовые значения (NaN / Infinity).");
    return;
  }

  if (!Number.isInteger(total) || !Number.isInteger(completed)) {
    console.log("Ошибка: количества задач должны быть целыми числами.");
    return;
  }

  if (total < 0 || total > 1000) {
    console.log("Ошибка: общее количество задач должно быть в диапазоне от 0 до 1000.");
    return;
  }

  if (completed < 0 || completed > total) {
    console.log("Ошибка: количество выполненных задач некорректно (меньше 0 или больше total).");
    return;
  }

  if (total === 0) {
    console.log("Задач пока нет");
    return;
  }

  const remaining = total - completed;
  const progress = ((completed / total) * 100).toFixed(1);

  let status = "В работе";
  if (completed === 0) {
    status = "Не начато";
  } else if (completed === total) {
    status = "Завершено";
  }

  console.log(`Всего задач: ${total}`);
  console.log(`Выполнено: ${completed}`);
  console.log(`Осталось: ${remaining}`);
  console.log(`Прогресс: ${progress}%`);
  console.log(`Статус: ${status}`);
}

processTaskInput(rawTotal, rawCompleted);