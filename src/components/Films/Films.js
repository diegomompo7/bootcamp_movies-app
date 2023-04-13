import { Box, Text, Button, Image, Circle } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const IMAGE_URL = "https://www.themoviedb.org/t/p/original/";

const Films = ({ textTitle, textHoy, textEstaSemana, printFilms, linkFirst, linkSecond, setChoose, setChooseFiltrer, linkFiltrerFirst, linkFiltrerSecond, moreText, theAreMore, showMore }) => {
  console.log(linkFirst);
  return (
    printFilms && (
      <Box ml="15px" mt="21px" display="flex" flexWrap="wrap" flexDirection="column">
        <Text fontSize="24px" fontFamily="Poppins" fontWeight="bold">
          {textTitle}
        </Text>
        <Box>
          <Button
            borderRadius="50px"
            border="1px solid"
            borderColor="#052641"
            w="66px"
            fontSize="14px"
            textAlign="center"
            h="30px"
            bg="white"
            color="#052641"
            onClick={() => {
              setChoose(linkFirst), linkFiltrerFirst && setChooseFiltrer(linkFiltrerFirst);
            }}
          >
            {textHoy}
          </Button>
          <Button
            borderRadius="50px"
            border="1px solid"
            borderColor="#052641"
            w="117px"
            fontSize="14px"
            h="30px"
            ml="12px"
            bg="white"
            color="#052641"
            onClick={() => {
              setChoose(linkSecond), linkFiltrerSecond && setChooseFiltrer(linkFiltrerSecond);
            }}
          >
            {textEstaSemana}
          </Button>
        </Box>
        <Box
          display="flex"
          maxWidth="320px
        "
          flexWrap="wrap"
          mt="22px"
        >
          {printFilms.map((film) => {
            return (
              <Box w="45%" mb="47px">
                {linkFirst.includes("movie") ? (
                  <NavLink to={`/movie/${film.id}`}>
                    <Image w="75%" h="75%" borderRadius="10px" src={IMAGE_URL + film.poster_path}></Image>
                  </NavLink>
                ) : (
                  <NavLink to={`/tv/${film.id}`}>
                    <Image w="75%" h="75%" borderRadius="10px" src={IMAGE_URL + film.poster_path}></Image>
                  </NavLink>
                )}
                <Circle bg="#052641" w="40px" h="40px" color="white">
                  {Math.trunc(film.popularity/100)}%
                </Circle>
                <Text w="80%" fontSize="12px" fontWeight="bold">
                  {film.title}
                  {film.name}
                </Text>
                <Text w="80%" fontSize="12px" pt="0px">
                  {film.release_date}
                  {film.first_air_date}
                </Text>
              </Box>
            );
          })}
          {theAreMore && (
            <Button borderRadius="50px" bg="#052641" color="white" fontSize="14px" h="30px" w="103px" onClick={showMore}>
              {moreText}
            </Button>
          )}
        </Box>
      </Box>
    )
  );
};
export default Films;
