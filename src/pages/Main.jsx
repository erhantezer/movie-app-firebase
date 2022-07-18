import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";


//? https://www.themoviedb.org/settings/api den API KEY ALINDI

const API_KEY = "a9a90e58da935e5528540782b69aa0cf";
// const API_KEY = process.env.REACT_APP_TMDB_KEY;
//? ÖZELLİK (FEATURED) ve ARAMA (SEARCH) api dosya yolu alındı
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  //? filimleri api olarak alma ve güncelleme işlemi için state yazdık
  const [movies, setMovies] = useState([]);

  //? Ana sayfadaki arama formu  bölmesindeki arama için state yazdık searchTerm (arama terimi)
  const [searchTerm, setSearchTerm] = useState("");
 
  //? AuthContext yani doğrulama için ortak state yaptık AuthContext.jsx içinde currentUser ve setCurrentUser kullandık state için
  const { currentUser } = useContext(AuthContext);

 
//? API ile verileri datanın içindeki results ın içindeki 20 tane veriyi çektik
  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  //? Useeffect marifetiyle getMovies fonksiyonunu çağırdık
 useEffect(() => {
    getMovies(FEATURED_API);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    //? arama true ise  ve currentUser (login olduysak) apiden verileri getir
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } 
    //? Yada kayıt yoksa bu toastify yazddır
    else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("Please log in to search a movie");
    } 
    //? Diğer durumlarda 
    else {
      toastWarnNotify("Please enter a text");
      // alert("Please enter a text");
    }
  };



  //? JSX içinde form ögesiyle handlesubmitle verileri aldık setSearchTermle alındı ve searchTerm e aktarıldı handlesubmitte searchTerm karşılaştırılarak gerekli işlem yapıldı

  //? Apı den aldığımız verileri maincard componentinde olşturmak için propsla movies map ile alınarak parçalandı burada spread metoduyla moviecard lara id verileri ile gönderdikz
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input m-4 p-4"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-warning m-4" type="submit">Search</button>
      </form>

      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
