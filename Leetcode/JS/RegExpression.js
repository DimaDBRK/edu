let enemies = [
  { name: "Гоблин", health: 10 },
  { name: "Скелет", health: 20 },
  { name: "Орк", health: 30 }
];

let lowHealthEnemies = enemies.filter(enemy => enemy.health < 30);

console.log(lowHealthEnemies[1].name[1]);