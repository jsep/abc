// https://adventofcode.com/2022/day/1/
const input = Bun.file("./input.txt");
const calories = (await input.text()).split("\n");
const totalCaloriesByElf: number[] = [];
calories.reduce((sumCalories, value,) => {
    // Elf are separated by empty lines
    if (value === "") {
        totalCaloriesByElf.push(sumCalories);
        return 0;
    }
    const num = parseInt(value, 10);
    return sumCalories + num;
}, 0);

const byAsc = (a: number, b: number) => b - a;
totalCaloriesByElf.sort(byAsc);

const maxCalories = totalCaloriesByElf[0];
const topThreeCaloriesSum = maxCalories + totalCaloriesByElf[1] + totalCaloriesByElf[2];

console.log(`The maximum carried calories ${maxCalories}`);
console.log(`The sum of the top three calories  ${topThreeCaloriesSum}`);

