import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import SearchForm from './components/SearchForm'
import MainLayout from './layouts/MainLayout'

function App() {

  const [search, setSearch] = useState("");
  type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    // add other fields as needed
  };

  const [meals, setMeals] = useState<Meal[]>([]);

  function handleSearch(query: string): void {
    console.log('Search query:', query);

    // Fetch data from API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
      .then(res => res.json()).then(data => {
        console.log('Search results:', data);
        setMeals(data.meals || []);
      }).catch(err => {
    console.error('Error fetching search results:', err);
  });

}

  return (
    <>
      <MainLayout>
        <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />

        {meals.length === 0 && <p className='text-center py-8 text-gray-400'>No meals found.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {meals.map(meal => (
            <Card
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      </MainLayout>
    </>
  )
}

export default App
