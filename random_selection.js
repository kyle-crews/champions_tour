const createDistribution = (array, weights, size) => {
    const distribution = [];
    const sum = weights.reduce((a, b) => a + b);
    const quant = size / sum;
  	for (let i = 0; i < array.length; ++i) {
      	const limit = quant * weights[i];
      	for (let j = 0; j < limit; ++j) {
          	distribution.push(i);
        }
    }
  	return distribution;
};

const randomIndex = (distribution) => {
  	const index = Math.floor(distribution.length * Math.random());  // random index
    return distribution[index];  
};


// Usage example:

const array =   ['ID #1', 'ID #2', 'ID #3','ID #4', 'ID #5', 'ID #6', 'ID #7', 'ID #8', 'ID #9','ID #10'  ];  // used values in radomization
const weights = [ 0.1, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.5 ];  // specific items probability (5 + 2 + 3 = 10)

const distribution = createDistribution(array, weights, 10);  // 10 - describes distribution array size (it affects on precision)

for (let i = 0; i < 500; ++i) {
    const index = randomIndex(distribution);
    console.log(array[index]);  // random value located in the array
}