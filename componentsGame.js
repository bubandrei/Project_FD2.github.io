class Bullet {
    constructor(x, y, speed) {
        this.pos = { x, y };
        this.speed = speed;
        //движение пули
        this.update = function () {
            this.pos.y -= this.speed;
            if (this.pos.y < 55 || this.pos.y > canvas.height) { /////////условие уничтожения пули вверху и внизу
                this.destroy();
            }
        };
        //рисуем пули
        this.draw = function () {
            ctx.fillRect(
                this.pos.x - bulletSpeed / 2,
                this.pos.y - bulletSpeed / 2,
                bulletSpeed, bulletSpeed);
        };
        //////уничтожаем пули
        this.destroy = function () {
            this.index = bullets.indexOf(this);
            bullets.splice(this.index, 1);
        };
    }
}
// class Stars {
//     constructor() {
//         this.pos = {
//             x: Math.floor(Math.random() * canvas.width),
//             y: Math.floor(Math.random() * canvas.height)
//         };
//         this.update = function () {
//             this.pos.y += speed;
//             if (this.pos.y > canvas.height + 10) {
//                 this.pos.x = Math.floor(Math.random() * canvas.width);
//                 this.pos.y = -10;
//             }
//         };
//         this.draw = function () {
//             ctx.fillRect(this.pos.x, this.pos.y, 1, 1);
//         };
//     }
// }

class Smoke {
    constructor(x, y) {
        this.pos = { x: x + Math.floor(Math.random() * 8) - 4, y };
        this.lifetime = Math.floor(Math.random() * 30);

        this.update = function () {
            //движение
            this.pos.x += (Math.random() * 2) - 1;
            this.pos.y += speed;

            this.lifetime--;
            if (this.lifetime <= 0) {
                this.index = smoke.indexOf(this);
                smoke.splice(this.index, 1);
            }

        };
        this.draw = function () {
            ctx.fillRect(
                this.pos.x - smokeSize / 2,
                this.pos.y - smokeSize / 2,
                smokeSize, smokeSize);

        };
    }
}