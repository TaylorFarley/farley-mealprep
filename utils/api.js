const unirest = require('unirest')
function fetchData() {
    return new Promise((resolve, reject) => {
        var req = unirest(
            'GET',
            'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate'
        );

        req.query({
            timeFrame: 'day',
            targetCalories: '2000',        
            exclude: 'shellfish%2C olives',
        });

        req.headers({
           "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	       "x-rapidapi-key": process.env.RECAPI,
            useQueryString: true,
        });

        req.end(async (res) => {
            if (res.error) {
                reject(new Error(res.error));
            } else {
                resolve(res.body.meals[1]);
            }
        });
    });
}

// (async function main() {
//     const meals = await fetchData();
//     console.log(meals);
// })();


module.exports = {
	fetchData
}