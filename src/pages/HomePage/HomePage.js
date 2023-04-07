import useFetch from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import { Box, Text, Button } from "@chakra-ui/react";
import film_backgroundFirst from "../../assets/film-backgroundFirst.png"
import "../../styles/variables.scss"
import React from "react";

const API_URL = `${process.env.REACT_APP_API_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const HomePage = () => {
  const [chooseTrending, setChooseTrending] = React.useState("")
  const [filmsData] = (chooseTrending &&  useFetch(API_URL + chooseTrending + API_KEY))
  console.log(API_URL + chooseTrending + API_KEY)
  const [resultsData] = usePagination(filmsData?.results)


  console.log(filmsData);

  return (
    <div className="home">
      <Box bgImage={film_backgroundFirst} w="100%" maxW="1440px" h="365px"  bgPosition="center" p={4} color="white">
        <Text fontWeight="bold" fontSize="36px" textAlign="justify" pl="32px" fontFamily="Poppins">Bienvenidos.</Text>
        <Text fontWeight="bold" fontSize="20px" textAlign="justify" pl="32px" pr="51px" fontFamily="Poppins">Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</Text>
      </Box>
      <Box ml="15px" mt="21px" display="flex" flexWrap="wrap" flexDirection="column">
        <Text fontSize="24px" fontFamily="Poppins" fontWeight="bold">Tendencias</Text>
        <Box>
          <Button borderRadius="50px"  border="1px solid"borderColor="#052641" 
            w="66px" fontSize="14px" textAlign="center" h="30px" bg="white" color="#052641" onClick={() => {setChooseTrending("trending/movie/day?api_key=")}}>Hoy</Button>
          <Button borderRadius="50px" border="1px solid" borderColor="#052641" w="117px" fontSize="14px" h="30px" ml="12px" bg="white" color="#052641">Esta semana</Button>
        </Box>
      </Box>
    </div>
  );
  //trending/movie/day?api_key=
};
export default HomePage;
