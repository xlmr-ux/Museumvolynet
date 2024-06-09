export const HexToRGBA = (hex, a) => {
  // Убедимся, что hex начинается с '#'
  if (!hex.startsWith("#")) {
    throw new Error(
      "Шестнадцатеричное значение цвета должно начинаться с символа #"
    );
  }

  // Удалим символ # и разделим шестнадцатеричное значение на каналы
  hex = hex.substring(1);
  let r,
    g,
    b,
    alpha = 1;

  // Если длина hex равна 6, значит, у нас нет альфа-канала
  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  // Если длина hex равна 8, значит, у нас есть альфа-канал
  else if (hex.length === 8) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    alpha = parseInt(hex.substring(6, 8), 16) / 255; // Преобразуем значение альфа-канала в диапазоне 0-1
  }
  // Если длина hex неверна, выбросим ошибку
  else {
    throw new Error("Неверный формат шестнадцатеричного значения цвета");
  }

  // Убедимся, что прозрачность находится в допустимом диапазоне 0-1
  if (a < 0 || a > 1) {
    throw new Error(
      "Значение прозрачности должно находиться в диапазоне от 0 до 1"
    );
  }

  // Вернем строку RGBA
  return `rgba(${r}, ${g}, ${b}, ${alpha * a})`;
};
