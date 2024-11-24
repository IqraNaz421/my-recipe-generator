// // Import RecipeGenerator component
// import RecipeGenerator from '@/components/RecipeGenerator';

// const Home = () => {
//     return (
//         <div>
//             {/* Add RecipeGenerator here */}
//             <header className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-4 text-white text-center"
//             >
//                 <h1 className="text-2xl">Welcome to Recipe Generator App 🍳</h1>
//             </header>

//             <main className="p-5">
//                 <h2 className="text-xl text-center mt-5">Find the perfect recipe based on the dish name!</h2> <br />
                
//                 {/* Here is where you use the RecipeGenerator component */}
//                 <RecipeGenerator />
//             </main>
//         </div>
//     );
// };

// export default Home;




// Import RecipeGenerator component
import RecipeGenerator from '@/components/RecipeGenerator';

const Home = () => {
    return (
        <div>
            {/* Improved Header */}
            <header className="relative bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 text-white py-8 shadow-lg overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-48 h-48 bg-yellow-300 rounded-full blur-3xl absolute top-6 left-6"></div>
                    <div className="w-56 h-56 bg-red-400 rounded-full blur-3xl absolute bottom-8 right-8"></div>
                </div>

                {/* Header Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
                        Welcome to <span className="text-yellow-300">Recipe Generator App</span> 🍳
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl italic text-orange-100">
                        Discover delicious recipes at your fingertips!
                    </p>

                    {/* Decorative Button (Optional) */}
                   
                </div>
            </header>

            {/* Main Content */}
            <main className="p-5">
                <h2 className="text-xl text-center mt-5 text-gray-800 font-semibold">
                    Find the perfect recipe based on the dish name!
                </h2> 
                <br />

                {/* Recipe Generator Component */}
                <RecipeGenerator />
            </main>
        </div>
    );
};

export default Home;


