import useFetch from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import { Box, background, Text } from "@chakra-ui/react";
import film_backgroundFirst from "../../assets/film-backgroundFirst.png"

const API_URL = `${process.env.REACT_APP_API_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const HomePage = () => {
  const [filmsData] = useFetch(API_URL + "trending/movie/day?api_key=" + API_KEY);
  const [resultsData] = usePagination(filmsData?.results);

  console.log(resultsData);

  return (
    <div className="home">
      <Box bgImage={film_backgroundFirst} w="100%" maxW="1440px" h="365px"  bgPosition="center" p={4} color="white">
        <Text fontWeight="bold" fontSize="36px" textAlign="justify" pl="32px">Bienvenidos.</Text>
        <Text fontWeight="bold" fontSize="20px" textAlign="justify" pl="32px" pr="51px">Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</Text>
      </Box>
    </div>
  );
};
export default HomePage;
