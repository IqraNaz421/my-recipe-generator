// // pages/api/getRecipes.ts
// export default async function handler(req: any, res: any) {
//     const { ingredients } = req.query;

//     // Example API URL (replace with actual recipe API)
//     const apiURL = `https://recipeapi.com/recipes?ingredients=${ingredients}`;

//     try {
//         const response = await fetch(apiURL);
//         const data = await response.json();

//         // Assuming the API returns recipes in "data.recipes"
//         res.status(200).json({ recipes: data.recipes || [] });
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching recipes' });
//     }
// }



import { NextApiRequest, NextApiResponse } from 'next';

type RecipeResponse = {
  recipes: Array<{
    id: number;
    name: string;
    ingredients: string[];
  }>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<RecipeResponse | { error: string }>) {
  const { ingredients } = req.query;
  const apiURL = `https://recipeapi.com/recipes?ingredients=${ingredients}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    res.status(200).json({ recipes: data.recipes || [] });
  } catch {
    // Handle error without using the error variable
    res.status(500).json({ error: 'Error fetching recipes' });
  }
}
