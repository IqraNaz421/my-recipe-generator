
'use client'
import { useState } from 'react';
import Image from 'next/image';
// Define a Recipe type to describe the structure of each recipe
type Recipe = {
  name: string;
  ingredients: string[];
  instructions: string;
  image: string; // Added an image field for each recipe
};

const recipes: Record<string, Recipe> = {
  biryani: {
    name: "Biryani",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken cut into pieces",
      "2 large onions thinly sliced",
      "1/2 cup yogurt",
      "2 tomatoes chopped",
      "1 tablespoon ginger-garlic paste",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "2 teaspoons garam masala",
      "1/2 cup fresh coriander leaves, chopped",
      "1/2 cup fresh mint leaves chopped",
      "4 cups water",
      "Salt to taste",
      "4 tablespoons cooking oil",
      "Spices for boiling rice (bay leaf cloves cinnamon stick green cardamom)"
    ],
    instructions: `
1. Wash and soak the basmati rice for 30 minutes
2. Heat 2 tablespoons of oil in a large pot add the whole spices for boiling rice, and fry for a minute. Add the soaked rice water and salt then cook until 80% done Drain and set aside.
3. In another pan, heat 2 tablespoons of oil and fry the sliced onions until golden brown. Remove half for garnish.
4. In the same pan, add ginger-garlic paste, chicken pieces, turmeric, red chili powder, and salt. Cook until the chicken is lightly browned.
5. Add yogurt, tomatoes, mint, coriander, and garam masala. Cook until the chicken is tender and the masala thickens.
6. In a large pot, layer the rice and chicken masala alternately. Garnish with fried onions, coriander, and mint.
7. Cover tightly and cook on low heat (dum) for 20-25 minutes.
8. Serve hot with raita and salad.
    `,
    image: "/images/biryani.jpg"
  },
  pizza: {
    name: "Pizza",
    ingredients: [
      "2 cups all-purpose flour",
      "1/2 teaspoon salt",
      "1 teaspoon sugar",
      "1 teaspoon dry yeast",
      "3/4 cup warm water",
      "2 tablespoons olive oil",
      "1/2 cup pizza sauce",
      "1 cup shredded mozzarella cheese",
      "Toppings of choice (pepperoni, olives, bell peppers, onions)"
    ],
    instructions: `
1. Activate the yeast by mixing it with warm water and sugar. Let it sit for 10 minutes until frothy.
2. In a mixing bowl, combine flour, salt, olive oil, and the activated yeast mixture. Knead into a soft dough.
3. Cover the dough and let it rise for 1-2 hours until doubled in size.
4. Preheat the oven to 220°C (425°F). Roll out the dough into a pizza base.
5. Spread pizza sauce evenly over the base. Add cheese and desired toppings.
6. Bake in the preheated oven for 12-15 minutes until the crust is golden and the cheese is melted.
7. Slice and serve hot.
    `,
    image: "/images/pizza.jpg"
  },
  korma: {
    name: "Korma",
    ingredients: [
      "500g mutton or chicken",
      "2 large onions, finely sliced",
      "1/2 cup yogurt",
      "2 tablespoons ginger-garlic paste",
      "1 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "2 teaspoons coriander powder",
      "1/2 teaspoon garam masala",
      "1/4 cup cooking oil",
      "1/2 cup water",
      "Salt to taste",
      "Chopped coriander and green chilies for garnish"
    ],
    instructions: `
1. Heat oil in a pot and fry the onions until golden brown. Remove half for garnish.
2. Add ginger-garlic paste and mutton/chicken pieces. Cook until lightly browned.
3. Add turmeric, red chili powder, coriander powder, and salt. Cook for a few minutes.
4. Add yogurt and mix well. Cover and cook until the meat is tender.
5. Add water to adjust the consistency of the gravy and let it simmer for 5-7 minutes.
6. Sprinkle garam masala and garnish with fried onions, coriander, and green chilies.
7. Serve hot with naan or rice.
    `,
    image: "/images/korma.png"
  },
  burger: {
    name: "Burger",
    ingredients: [
      "4 burger buns",
      "4 beef or chicken patties",
      "4 lettuce leaves",
      "4 slices of tomato",
      "4 slices of cheese",
      "4 tablespoons mayonnaise",
      "4 tablespoons ketchup",
      "Salt and pepper to taste",
      "2 tablespoons butter"
    ],
    instructions: `
1. Heat a grill or pan and cook the patties until fully done. Season with salt and pepper.
2. Toast the burger buns with butter on a heated pan.
3. Spread mayonnaise and ketchup on the bottom bun.
4. Layer with lettuce, patty, cheese, and tomato slice. Cover with the top bun.
5. Serve immediately with fries or a side of choice.
    `,
    image: "/images/image.png"
  },
  pasta: {
    name: "Pasta",
    ingredients: [
      "200g pasta (penne, spaghetti, or any type)",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1 cup tomato sauce",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh basil for garnish"
    ],
    instructions: `
1. Boil the pasta in salted water until al dente. Drain and set aside.
2. Heat olive oil in a pan and sauté minced garlic until fragrant.
3. Add tomato sauce, salt, and pepper. Simmer for 5 minutes.
4. Toss the cooked pasta in the sauce until well coated.
5. Garnish with parmesan cheese and fresh basil. Serve hot.
    `,
    image: "/images/pasta.jpg"
  },
  custard: {
    name: "Custard",
    ingredients: [
      "1 liter milk",
      "4 tablespoons custard powder",
      "6 tablespoons sugar",
      "1/2 teaspoon vanilla essence",
      "Chopped fruits (banana, apple, grapes) for garnish"
    ],
    instructions: `
1. Mix custard powder with a little cold milk to make a smooth paste.
2. Heat the remaining milk in a saucepan and bring it to a boil.
3. Add sugar and vanilla essence, then gradually stir in the custard paste.
4. Cook on low heat, stirring continuously, until the mixture thickens.
5. Cool and serve with chopped fruits.
    `,
    image: "/images/custurd.jpeg"
  }
};

const RecipeGenerator = () => {
  const [dishName, setDishName] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Use Recipe type or null
  const [error, setError] = useState('');

  const handleDishInput = () => {
    const dish = dishName.trim().toLowerCase(); // Convert the input to lowercase

    if (recipes[dish]) { // Check if the dish exists in recipes
      setRecipe(recipes[dish]);
      setError('');
    } else {
      setRecipe(null);
      setError('Recipe not found for this dish.');
    }

    setDishName(''); // Clear the input field after processing
  };

  return (
    <div className="p-5 max-w-4xl mx-auto bg-gradient-to-b from-orange-100 to-orange-300">
      <h2 className="text-3xl text-center font-semibold mb-6 text-gray-900">🍴 <span className='text-orange-600'>Rec</span>ipe <span className='text-orange-600'>Gene</span>rator 🍴</h2>

<div className="mb-8">
  <h4 className="text-2xl font-bold text-orange-700 mb-4 text-center underline decoration-orange-400 decoration-wavy">
    ✨ Available Dishes
  </h4>

  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
    {Object.keys(recipes).map((dish) => {
      let emoji;
      switch (dish) {
        case 'biryani':
          emoji = '🍚'; break;
        case 'pizza':
          emoji = '🍕'; break;
        case 'korma':
          emoji = '🍖'; break;
        case 'burger':
          emoji = '🍔'; break;
        case 'pasta':
          emoji = '🍝'; break;
        case 'custard':
          emoji = '🍮'; break;
        default:
          emoji = '🍴'; break;
      }
      return (
        <li
          key={dish}
          className="flex items-center justify-center bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-200 shadow-md hover:shadow-lg hover:scale-105 transition-all rounded-lg p-4 text-lg font-medium hover:text-black hover:bg-orange-600"
        >
          <span className="mr-3 text-2xl">{emoji}</span>
          {dish.charAt(0).toUpperCase() + dish.slice(1)}
        </li>
      );
    })}
  </ul>
</div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          placeholder="Enter dish name (e.g., Biryani, Pizza)"
          className="border-2 p-3 rounded-md w-2/3 sm:w-1/2 text-white bg-black focus:ring-2 focus:ring-orange-400 transition-all"
        />
        <button
          onClick={handleDishInput}
          className="ml-2 bg-orange-700 text-white p-3 rounded-md hover:bg-orange-600 transition-all"
        >
          🔍 Get Recipe
        </button>
      </div>

     
      {error && <p className="text-red-500 text-center text-lg">{error}</p>}

      
{recipe && (
  <div className="mt-8 bg-gradient-to-tr from-yellow-50 via-orange-100 to-orange-200 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto transition-transform transform  hover:shadow-orange-400">
    <Image                                     
      src={recipe.image}
      alt={recipe.name}
      height={500}
      width={500}
      
      className="w-full h-64 object-cover rounded-t-lg shadow-md"
    />
    <h3 className="text-3xl font-bold text-orange-800 mt-6 text-center">{recipe.name}</h3>
    <div className="mt-6">
      <h4 className="text-2xl text-orange-900 font-semibold">🛒 Ingredients:</h4>
      <ul className="list-disc pl-6 text-orange-800 mt-4 space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg">{ingredient}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6">
      <h4 className="text-2xl text-orange-700 font-semibold">📖 Instructions:</h4>
      <p className="text-orange-600 mt-4 leading-relaxed text-lg whitespace-pre-line">
        {recipe.instructions}
      </p>
    </div>
  </div>
)}






    </div>
  );
};

export default RecipeGenerator;
