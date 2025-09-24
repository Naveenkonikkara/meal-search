import { useState, useEffect } from 'react';
import './App.css'
import Card from './components/Card'
import SearchForm from './components/SearchForm'
import MainLayout from './layouts/MainLayout'

function App() {

  type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    // add other fields as needed
  };

  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [heading, setHeading] = useState("Random Meals");

  function handleSearch(query: string): void {
    setError(null);
    // Fetch data from API
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch meals.');
          return res.json();
        })
        .then(data => {
          setHeading(`Search results for "${query}"`);
          setMeals(data.meals || []);
        })
        .catch(err => {
          setMeals([]);
          setError(err.message || 'Error fetching search results.');
        });
    } catch (error: any) {
      setMeals([]);
      setError(error.message || 'Error fetching search results.');
    }
  }

  async function fetchRandomMeals() {
    setError(null);
    try {
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const requests = Array.from({ length: 6 }, () =>
        fetch(url).then(res => {
          if (!res.ok) throw new Error('Failed to fetch random meal.');
          return res.json();
        })
      );
      const results = await Promise.all(requests);
      // Flatten and filter out any nulls
      const randomMeals = results
        .map(result => result.meals && result.meals[0])
        .filter(Boolean);
      setMeals(randomMeals);
    } catch (error: any) {
      setMeals([]);
      setError(error.message || 'Error fetching random meals.');
    }
  }

  // Fetch 6 random meals on mount
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <>
      <MainLayout>
        <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />

        <h2 className=" text-left text-2xl font-bold mt-4">{heading}</h2>

        {error && (
          <p className="text-center py-4 text-red-600 font-semibold">{error}</p>
        )}

        {meals.length === 0 && !error && (
          <p className='text-center py-8 text-gray-400'>No meals found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
