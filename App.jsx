// import { useState } from "react";

// const App = () =>{  

//    const [friends , setFriends] = useState (['Alex' , 'Kallal']);
   
//    const addOneFriend = () => setFriends([...friends , "Ritam"]);
//    const removeFriend = () => setFriends(friends.filter(f => f != "Alex")) ;
//    const updateOneFriend = () => {
//       setFriends(friends.map ( f => f = "Kallal" ? "kallal": f))
//    } ;

//     return <section>
//         {friends .map(f =>(
//             <li  key={Math.random()}>{f}</li> 
//         ))}

//         <button onClick={addOneFriend} > Add New Friend</button>
//         <button onClick={removeFriend}> Remove One Friend</button>
//         <button onClick={updateOneFriend}> Update One Friend</button>
//     </section>
// };

// export default App;
 

import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Life Of Pi",
    ratings: 5,
  });

  const handleClick = () => {
    setMovie({ ...movie, ratings: 4 });  
  };

  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <h1>Ratings: {movie.ratings}</h1>
      <button onClick={handleClick}>Change Ratings</button>
    </section>
  );
};

export default App;


// const hendleClick = () =>{
//     setMovies(
//         movies.map((m) => (m.id = 1 ? {...movie, title : "The null"}: m)) 
//     );
// };

