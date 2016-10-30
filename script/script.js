//HOPE YOU ENJOY THE GAME!!!

var start = new Date().getTime();

    var randomNum = '';

    function makeShapeAppear() {

    document.getElementById('shape').style.display = 'block';

    start = new Date().getTime();

}


function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

    var shape = document.getElementById('shape').style;

    shape.top = Math.random() * 80 + 10 + '%';

    shape.left = Math.random() * 80 + 10 + '%';

    shape.backgroundColor = '#'+Math.random().toString(16).substr(-6);

    randomNum = Math.random();

    if (randomNum < 0.5) {

        shape.borderRadius = '50%';
    } else {

        shape.borderRadius = '0%';
    }

    shape.height = 300 * randomNum + 50 + 'px';

    shape.width = 300 * randomNum + 50 + 'px';
}




document.getElementById('shape').onclick = function() {

    document.getElementById('shape').style.display = 'none';

    var end = new Date().getTime();

    var time = end - start;

    time = (time / 1000);

    document.getElementById('text').innerHTML = 'Reaction time = ' + time + ' s'

    start = new Date().getTime();

    appearAfterDelay();

}
