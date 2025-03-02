/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const costByCategory = {};
    for (let record of transactions) {
        const { category, price } = record;
        if (costByCategory[category]) {
            costByCategory[category] += price;
        } else {
            costByCategory[category] = price;
        }
    }
    console.log(costByCategory);

    const ans = [];
    for (const [key, value] of Object.entries(costByCategory)) {
        if (costByCategory.hasOwnProperty(key)) {
            ans.push({ category: key, totalSpent: value });
        }
    }
    return ans;
}

module.exports = calculateTotalSpentByCategory;
