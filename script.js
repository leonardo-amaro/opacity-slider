let opacityControl = document.querySelector('#opacityControl');

opacityControl.addEventListener('mousemove', function() {
    let x = Number(opacityControl.value);
    let y = (-1 * Math.pow(x, 2) + 4 * x) / 4;

    return document.querySelector('#title').style.opacity = `${y}`;
});