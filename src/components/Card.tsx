
// interface CardProps {
//     image: string;
//     title: string;
//     description: string;
// }

function Card({ meal }: { meal: any }) {
  return (
    <div className="max-w-sm mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{meal.strMeal}</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{meal.strInstructions?.slice(0, 100)}...</p>
    </div>
  );
}

export default Card;