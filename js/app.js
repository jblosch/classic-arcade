/**
  @description Constructor function to create enemies players must avoid
*/
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    //x and y describe the position of the enemy on screen

    //speed determines the rate of movement of the enemy

    this.sprite = 'images/enemy-bug.png';
    this.x = -120;
    this.y = this.enemyStart();
    this.speed = this.enemySpeed();
};

/**
  @description Updates the enemy's position and speed
  @param {number} dt
*/
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if(this.x > 600) {
      this.x = -50;
      this.y = this.enemyStart();
      this.speed = this.enemySpeed();
    }
};

/**
@description Draws the enemy on the screen
*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
@description Randomizes which lane the enemy shows up in
*/
Enemy.prototype.enemyStart = function(type) {
  var rand = Math.floor(Math.random() * 3);
  if(rand === 0) {
    return 65;
  } else if (rand === 1) {
    return 150;
  } else {
    return 235;
  }
}

/**
@description Randomizes how fast the enemy moves
*/
Enemy.prototype.enemySpeed = function() {
  var rand = Math.floor(Math.random() * 3);
  if(rand === 0) {
    return 300;
  } else if (rand === 1) {
    return 400;
  } else {
    return 500;
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/**
@description Constructor function to create a player
*/
var Player = function(x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
}

/**
@description Used to update player position
@param {number} dt
*/
Player.prototype.update = function(dt) {

}

/**
@description Draws the player to the screen
*/
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
@description Binds key presses to player movement
@param {object} direction
*/
Player.prototype.handleInput = function(direction) {

    if(direction == 'left') {
      if(this.x > 2) { this.x -= 101; }
    }
    if (direction == 'up') {
      this.y -= 83;
    }
    if (direction == 'right') {
      if(this.x < 406) { this.x += 101; }
    }
    if (direction == 'down') {
      if(this.y < 375) { this.y += 83; }
    }
    console.log(this.x, this.y);

    if(this.y < 43) {
      this.x = 204;
      this.y = 375;
    }
}

var player = new Player(204, 375); //204, 375

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy());
allEnemies.push(new Enemy());
allEnemies.push(new Enemy());


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
