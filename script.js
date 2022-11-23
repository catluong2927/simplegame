/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, sizex, sizey){
  this.image = image;
  this.top = top;
  this.left = left;
  this.sizex = sizex;
  this.sizey = sizey;

  this.getHeroElement = function(){
    return '<img width="'+ this.sizex + '"' +
      ' height="'+ this.sizey + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    if(Math.floor(Math.random()*2) ==0) this.left += Math.floor(Math.random()*20);
    else this.left -= Math.floor(Math.random()*20);
  }
  this.moveDown = function (){
    if(Math.floor(Math.random()*2) ==0) this.top += Math.floor(Math.random()*20);
    else this.top -= Math.floor(Math.random()*20);
  }


}

var hero = new Hero('kakashi.png', 20, 30, 150, 340);

function start(){
  if(hero.left < window.innerWidth - hero.sizex){
    hero.moveRight();
  }
  if(hero.top < window.innerWidth - hero.sizey){
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();