

function searchFood(){
	//console.log('clicked');
	const searchFild = document.getElementById('searchField');
	const searchText = searchField.value;
	//console.log(searchText);

	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
	.then(res => res.json())
	.then(data => displayResult(data.meals))
}


const displayResult = (meals) => {
	//console.log(meals)
	const result = document.getElementById('result');
	meals.forEach(meal => {
		const div = document.createElement('div');
		//console.log(meal)
		div.innerHTML =`
		<div onclick="loadDetail(${meal.idMeal})" class="col-lg-4 mb-5 food-item">
			<div class="card old" style="width: 18rem;">
				<img src="${meal.strMealThumb}" alt="Edli" class="card-img-top">
				<div class="card-body">
					<h5>${meal.strMeal}</h5>
					<p>${meal.strInstructions.slice(0,100)}</p>
					<p>Price: Tk.220</p>
					<a href="#" class="btn btn-primary">Order Now</a>
				</div>
			</div>
		</div>

		`;
		result.appendChild(div);

	})
}

const loadDetail = (mealId) => {
	console.log(mealId);
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
	.then(res => res.json())
	.then(data => displayDetail(data.meals[0]))
}





const displayDetail= (meal) =>{
	const mealDetail = document.getElementById('meal-details');

	const div = document.createElement('div');
		//console.log(meal)
		div.innerHTML =`
		
		<div class="card old" style="width: 18rem;">
			<img src="${meal.strMealThumb}" alt="Edli" class="card-img-top">
			<div class="card-body">
				<h5>${meal.strMeal}</h5>
				<p>${meal.strInstructions.slice(0,100)}</p>
				<p>Price: Tk.220</p>
				<a href="#" class="btn btn-primary">Order Now</a>
			</div>
		</div>
		
		`;

		mealDetail.appendChild(div);

}