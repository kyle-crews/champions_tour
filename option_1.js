const weightedSample = (items) => {
    // cache if necessary; in Chrome, seems to make little difference
    const total = Object.values(items).reduce((sum, weight) => sum + weight, 0)

    const rnd = Math.random() * total
    let accumulator = 0

    for (const [item, weight] of Object.entries(items)) {
        accumulator += weight

        if (rnd < accumulator) {
            return item
        }
    }
}

// check frequencies of each result

const prizes = { flower: 50, book: 30, mobile: 20 }
const results = Object.fromEntries(Object.keys(prizes).map(k => [k, 0]))

for (let i = 0; i < 1e6; ++i) {
    const prize = weightedSample(prizes)
    
    ++results[prize]
}

// sample results: { flower: 500287, book: 299478, mobile: 200235 }
console.log(results)