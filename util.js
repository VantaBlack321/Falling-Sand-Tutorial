/**
 * Gets a random number within the range [min, max]
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if (getRandomInt(0, 4)) { 
    // 75% Chance to run
}

if (!getRandomInt(0, 3)) { 
    // 33% Chance to run
}
