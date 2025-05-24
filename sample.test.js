

// dateUtils.test.js
import { getMonth, getDate, getDay } from './sample.js';

describe('Перевірка функцій роботи з датами (dateUtils)', () => {
  const testDate = new Date(2025, 4, 24); // 24 травня 2025 локально

  test('getMonth() має повернути 4 для дати 24.05.2025', () => {
    expect(getMonth(testDate)).toBe(4);
  });

  test('getDate() має повернути 24 для дати 24.05.2025', () => {
    expect(getDate(testDate)).toBe(24);
  });

  test('getDay() має повернути 6 (субота) для дати 24.05.2025', () => {
    expect(getDay(testDate)).toBe(6);
  });
});
