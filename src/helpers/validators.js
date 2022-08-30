/**
 * @file Домашка по FP ч. 1
 *
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если какие либо функции написаны руками (без использования библиотек) это не является ошибкой
 */
import {allPass, compose, count, equals, lte, not, prop, values} from "ramda";

const getStar = prop('star')
const getSquare = prop('square')
const getTriangle = prop('triangle')
const getCircle = prop('circle')

const isGreen = equals('green')
const isWhite = equals('white')
const isRed = equals('red')
const isOrange = equals('orange')
const isBlue = equals('blue')

const isGreenSquare = compose(
    isGreen,
    getSquare
)
const isRedStar = compose(
    isRed,
    getStar
)
const isWhiteTriangle = compose(
    isWhite,
    getTriangle
)
const isWhiteCircle = compose(
    isWhite,
    getCircle
)
const isNotRedStar = compose(
    not,
    isRedStar
)
const isNotWhiteStar = compose(
    not,
    isWhite,
    getStar
)

const countRedFigures = compose(
    count(isRed),
    values
)
const countBlueFigures = compose(
    count(isBlue),
    values
)

// 1. Красная звезда, зеленый квадрат, все остальные белые.
export const validateFieldN1 = allPass([
    isRedStar,
    isGreenSquare,
    isWhiteTriangle,
    isWhiteCircle
])

// 2. Как минимум две фигуры зеленые.
export const validateFieldN2 = compose(
    lte(2),
    count(isGreen),
    values
)

// 3. Количество красных фигур равно кол-ву синих.
export const validateFieldN3 = event => equals(countRedFigures(event), countBlueFigures(event))

// 4. Синий круг, красная звезда, оранжевый квадрат треугольник любого цвета
export const validateFieldN4 = (c) => {
    console.log(c)
    return false
}

// 5. Три фигуры одного любого цвета кроме белого (четыре фигуры одного цвета – это тоже true).
export const validateFieldN5 = () => false;

// 6. Ровно две зеленые фигуры (одна из зелёных – это треугольник), плюс одна красная. Четвёртая оставшаяся любого доступного цвета, но не нарушающая первые два условия
export const validateFieldN6 = () => false;

// 7. Все фигуры оранжевые.
export const validateFieldN7 = compose(
    equals(4),
    count(isOrange),
    values
);

// 8. Не красная и не белая звезда, остальные – любого цвета.
export const validateFieldN8 = allPass([isNotRedStar, isNotWhiteStar]);

// 9. Все фигуры зеленые.
export const validateFieldN9 = compose(
    equals(4),
    count(isGreen),
    values
);

// 10. Треугольник и квадрат одного цвета (не белого), остальные – любого цвета
export const validateFieldN10 = () => false;
