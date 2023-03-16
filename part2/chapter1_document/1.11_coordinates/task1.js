// координаты точек относительно окна браузера
const coords = field.getBoundingClientRect();
const point1 = [coords.left, coords.top];
const point2 = [coords.right, coords.bottom];
const point3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
const point4 = [coords.left + field.clientLeft + field.clientWidth,
    coords.top + field.clientTop + field.clientHeight];