const arr = ['A', 'B', 'C'];

// Probability map
const weight = {
	A: 0.5,
	B: 0.3,
	C: 0.2
};

const find = input =>
	arr.find((el, i) => {
    	const sum = arr.slice(0, i + 1).reduce((acc, el) => {
            return acc + weight[el];
        }, 0);

        if (input < sum) {
            return true;
        }

        return false;
    });

console.log(find(0.45)); // A <0, 0.5)
console.log(find(0.6)); // B <0.5, 0.8)
console.log(find(0.85)); // C <0.8, 1) - 1 is exclusive, same as Math.random()

console.log(find(Math.random())); // Random