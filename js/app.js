// Enemies our player must avoid
class Enemy {
    constructor() {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.resetPosition();
    }

    update() {
        // if player reaches last block reset to starting position
        this.y < 0 ? this.resetPosition() : null;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(e) {
        this.pressedKey = e;

        //column widht is the same as image 101px
        (this.pressedKey === 'left' && this.x > 0) ? this.x = this.x - 101 : null;
        (this.pressedKey === 'right' && this.x < 404) ? this.x = this.x + 101 : null;

        // row height = 83px, ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
        (this.pressedKey === 'up' && this.y > 0) ? this.y = this.y - 83 : null;
        (this.pressedKey === 'down' && this.y < 390) ? this.y = this.y + 83 : null;
    }

    // resetPosition to starting position
    resetPosition() {
        // 505 is width, 101 is one block, so 202 will be center
        this.x = 202;
        // 606 is height, 171 is one block, so 435 will be center, but we need to be be off a bit,
        // so it will be 435 - 45px
        this.y = 390;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
