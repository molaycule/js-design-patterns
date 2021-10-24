class EnemyManager {
  static enemies = [];

  // method to hide the complexity of spawning an enemy at random position
  spawnEnemy(type, gameArea) {
    let enemy;
    let enemyId = EnemyManager.enemies.length; // generate enemy id
    // create enemy type
    if (type === 'boss') {
      enemy = new Enemy(enemyId).setHealth(300).setSpeed(100).setDamage(50);
    } else if (type === 'minion') {
      enemy = new Enemy(enemyId).setHealth(100).setSpeed(50).setDamage(20);
    }
    // add enemy to enemies array
    EnemyManager.enemies.push(enemy);
    // spawn created enemy at random location referencing enemy id
    gameArea.addEnemyToPos(
      enemyId,
      Math.floor(Math.random() * gameArea.getWidth()) + 1,
      Math.floor(Math.random() * gameArea.getHeight()) + 1
    );
  }
}

class Enemy {
  constructor(id) {
    this.id = id;
  }

  setHealth(health) {
    this.health = health;
    return this;
  }

  setSpeed(speed) {
    this.speed = speed;
    return this;
  }

  setDamage(damage) {
    this.damage = damage;
    return this;
  }
}

class GameArea {
  constructor() {
    if (!GameArea.instance) {
      this.width = 1000;
      this.height = 1000;
      this.enemiesPos = [];
      GameArea.instance = this;
    }
    return GameArea.instance;
  }

  addEnemyToPos(id, x, y) {
    this.enemiesPos.push({ id, x, y });
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  logAllEnemiesPos() {
    this.enemiesPos.forEach(enemy =>
      console.log(
        `Enemy ${enemy.id} is at position: x = ${enemy.x}, y = ${enemy.y}`
      )
    );
  }
}

const enemyManager = new EnemyManager();
const gameArea = new GameArea();
enemyManager.spawnEnemy('minion', gameArea);
enemyManager.spawnEnemy('boss', gameArea);
gameArea.logAllEnemiesPos();
