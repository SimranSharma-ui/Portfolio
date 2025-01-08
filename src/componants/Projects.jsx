import React from 'react';

const Projects = () => {
  const posts = [
   
    {
      category: "PokéPal",
      title: "Pokemon Website",
      link: "https://pokemon-website-esogut67k-simrans-projects-dee52ad7.vercel.app/", 
      image: "https://assets.pokemon.com/assets/cms2/img/misc/_tiles/generic/pokemon-169.jpg",
      alt: "Pokemon App",
      github:"https://github.com/SimranSharma-ui/Pokemon-website",
    },
    {
      category: "WeatherSphere",
      title: "Weather App",
      link: "https://weather-6cfwfvieg-simrans-projects-dee52ad7.vercel.app/", 
      image: "https://miro.medium.com/v2/resize:fit:1400/0*GJqID-iVs0NDF35M",
      alt: "Weather App",
      github:"https://github.com/SimranSharma-ui/Weather-app",
    },
    {
        category: "CoinSphere",
        title: "Crypto App",
        link: "https://crypto-cbgfphjpq-simrans-projects-dee52ad7.vercel.app/", 
        image: "https://rates.fm/static/content/thumbs/1600x900/6/96/hlts5b---c16x9x50px50p--101fac02e7076c1c28fc68e5d8852966.webp",
        alt: "CryptoCurrency App",
        github:"https://github.com/SimranSharma-ui/Crypto-App",
      },
      {
        category: "Delicious Hub",
        title: "Recipe App",
        link: "https://recipe-8zx3tw8pn-simrans-projects-dee52ad7.vercel.app/", 
        image: "https://img.freepik.com/premium-vector/green-blue-logo-with-dollar-sign-middle_1205884-1730.jpg?w=740",
        alt: "Recipe App",
        github:"https://github.com/SimranSharma-ui/RecipeApp",
      },
      {
        category: "MovieMania",
        title: "Movie App",
        link: "https://movie-app-sooty-eta.vercel.app/", 
        image: "https://marketplace.canva.com/EAFwIYYGYSo/1/0/1600w/canva-colorful-retro-illustrative-tasty-popcorn-logo-orfOhmyQqEI.jpg",
        alt: "Movie App",
        github:"https://github.com/SimranSharma-ui/Movie-App",
      },
      {
        category: "Mystery Digits",
        title: "NumberGussing Game",
        link: "https://number-gussing-alpha.vercel.app/", 
        image: "https://r2.erweima.ai/i/D_Fdq0IkQmKfRe4e43OgsA.png",
        alt: "NumberGussing Game",
        github:"https://github.com/SimranSharma-ui/NumberGussing",
      },
      {
        category: "Tic-Tac-Toe",
        title: "Tic-Tac-Toe Game",
        link: "https://tic-tac-toe-seven-mu-48.vercel.app/", 
        image: "https://cdn-icons-png.flaticon.com/512/806/806131.png",
        alt: "Tic-Tac-Toe",
        github:"https://github.com/SimranSharma-ui/Tic-Tac-Toe", 
      },
      {
        category: "Blogify",
        title: "Blog Posts",
        link: "https://blog-7rsxeb0ck-simrans-projects-dee52ad7.vercel.app/", 
        image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Blog Posts",
        github:"https://github.com/SimranSharma-ui/blog-app",
      },
  ];

  return (
    <div className="bg-slate-700 min-h-screen"> 
      <div className="container mx-auto py-8">
        <h2 className="text-4xl text-white text-center font-bold my-3 font-serif">Projects</h2>
        <div className="border-b-2 border-blue-500 w-16 mx-auto mt-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 font-serif">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-xl animate-fadeInFromBottom">
              <img src={post.image} alt={post.alt} className="w-full h-64 object-cover rounded-xl"/>
              <div className="p-4">
                <h2 className="text-blue-400 text-sm font-bold">{post.category}</h2>
                <h3 className="text-2xl font-bold mt-2">
                  <a 
                    href={post.link} 
                    target="_blank"
                    className="hover:text-blue-300"
                  >
                    {post.title}
                  </a>
                  </h3>
                  <a href={post.github} target='_blank'> <h4>GitHub Link</h4></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
