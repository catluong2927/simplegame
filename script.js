function Hero(image, top, left, sizex,sizey) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.sizex = sizex;
    this.sizey = sizey;

    this.getHeroElement = function () {
        return '<img width="' + this.sizex + '"' +
            ' height="' + this.sizey + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 30;
        console.log('left: ' + this.left);
        console.log('top: ' + this.top);
    }
    this.moveDown = function () {
        this.top += 13;
        console.log('leftdown: ' + this.left);
        console.log('topdown: ' + this.top);
        console.log(hero.sizey);
    }
    this.moveLeft = function () {
        this.left -= 13;
        console.log("moveleft:" + this.left);
    }
    this.movetop = function () {
        this.top -= 13;
        console.log('movetop:' + this.top);
    }
}

let hero = new Hero('kakashi.png', 20, 30, 150,340);

function start() {
    if (hero.left < window.innerWidth - hero.sizex && hero.top <= 20) {
        hero.moveRight();
    } else if (hero.left > window.innerWidth - hero.sizex && hero.top < window.innerHeight - hero.sizey) {
        hero.moveDown();
    } else if (hero.top > window.innerHeight - hero.sizey && hero.left > 0) {
        hero.moveLeft();
    } else {
        hero.movetop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}


start();