import useFetch  from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";
import { Box, Text, Link, Image, Button } from "@chakra-ui/react";
import film_backgroundFirst from "../../assets/film-backgroundFirst.png";
import film_backgroundSecond from "../../assets/film-backgroundSecond.png";
import "../../styles/variables.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import Films from "../../components/Films/Films";
import icon_play from "../../assets/icon-play.png";

const API_URL = `${process.env.REACT_APP_API_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const HomePage = () => {
  //HomePage
  const [chooseFilm, setChooseFilm] = React.useState(null);
  const [filmsData] = useFetch(API_URL + chooseFilm + API_KEY);
  const [firstFilms, showMoreFilms, theAreMoreFilms] = usePagination(filmsData?.results);

  const [chooseDiscover, setChooseDiscover] = React.useState("discover/movie?api_key=");
  const [chooseFiltrerDiscover, setChooseFiltrerDisocver] = React.useState("&sort_by=release_date.desc&language=en-US&page=1&vote_count.gte=1000&vote_average.gte=5");
  const [discoverData] = useFetch(API_URL + chooseDiscover + API_KEY + chooseFiltrerDiscover);
  const [firstDiscover, showMoreDiscover, theAreMoreDisocver] = usePagination(discoverData?.results);

  const [choosePopular, setChoosePopular] = React.useState(null);
  const [popularData] = useFetch(API_URL + choosePopular + API_KEY);
  const [firstPopular, showMorePopular, theAreMorePopular] = usePagination(popularData?.results);

  const [chooseFree, setChooseFree] = React.useState(null);
  const [chooseFiltrer, setChooseFiltrer] = React.useState(null);
  const [freeData] = useFetch(API_URL + chooseFree + API_KEY + chooseFiltrer);
  const [firstFree, showMoreFree, theAreMoreFree] = usePagination(freeData?.results);

  console.log(firstDiscover);

  return (
    <div className="home">
      <Box bgImage={film_backgroundFirst} w="100%" maxW="1440px" h="365px" bgPosition="center" p={4} color="white">
        <Text fontWeight="bold" fontSize="36px" textAlign="justify" pl="32px" fontFamily="Poppins">
          <FormattedMessage id="home:bienvenido"></FormattedMessage>
        </Text>
        <Text fontWeight="bold" fontSize="20px" textAlign="justify" pl="32px" pr="51px" fontFamily="Poppins">
          <FormattedMessage id="home:descripcion"></FormattedMessage>
        </Text>
      </Box>
      <Films textTitle={<FormattedMessage id="home:tendencias"></FormattedMessage>} textHoy={<FormattedMessage id="home:hoy"></FormattedMessage>} textEstaSemana={<FormattedMessage id="home:estaSemana"></FormattedMessage>} linkFirst="trending/movie/day?api_key=" linkSecond="trending/movie/week?api_key=" setChoose={setChooseFilm} printFilms={firstFilms} moreText={<FormattedMessage id="home:mas"></FormattedMessage>} theAreMore={theAreMoreFilms} showMore={showMoreFilms}></Films>

      <Box bg="#052641" mt="48px" color="white" fontFamily="Poppins">
        <Text fontSize="24px" fontWeight="bold" pt="28px" ml="18px" pb="48px">
          <FormattedMessage id="home:avances"></FormattedMessage>
        </Text>
        <Box display="flex" flexWrap="wrap" flexDirection="column">
          {firstDiscover.map((discover) => {
            return (
              <div>
                {discover?.video && (
                  <Link href={discover.video} bg="#DD5757" target="_blank" ml="18px" w="288px" fontSize="18px" fontWeight="bold" h="73px" borderRadius="10px">
                    <Text>
                      <Image src={icon_play} maxW="48px" ml="45px"></Image>
                      <FormattedMessage id="home:youtube"></FormattedMessage>
                    </Text>
                  </Link>
                )}
                <Text textAlign="center" fontSize="18px" fontWeight="bold" pt="102px">
                  {" "}
                  {discover.title}
                </Text>
                <Text fontSize="14px" textAlign="center">
                  <FormattedMessage id="home:trailer"></FormattedMessage>
                </Text>
              </div>
            );
          })}
          {theAreMoreDisocver && (
            <Button borderRadius="50px" bg="white" color="#052641" fontSize="14px" h="30px" w="103px" mt="48px" onClick={showMoreDiscover}>
              <FormattedMessage id="home:mas"></FormattedMessage>
            </Button>
          )}
        </Box>
      </Box>

      <Films textTitle={<FormattedMessage id="home:popular"></FormattedMessage>} textHoy={<FormattedMessage id="home:peliculas"></FormattedMessage>} textEstaSemana={<FormattedMessage id="home:television"></FormattedMessage>} linkFirst="movie/popular?api_key=" linkSecond="tv/popular?api_key=" setChoose={setChoosePopular} printFilms={firstPopular} moreText={<FormattedMessage id="home:mas"></FormattedMessage>} theAreMore={theAreMorePopular} showMore={showMorePopular}></Films>

      <Box bgImage={film_backgroundSecond} w="100%" maxW="1440px" bgPosition="center" p={4} color="white">
        <Text fontWeight="bold" fontSize="32px" textAlign="justify" pl="32px" fontFamily="Poppins">
          <FormattedMessage id="home:unete"></FormattedMessage>
        </Text>
        <Text fontSize="16px" textAlign="justify" pl="32px" pr="51px" fontFamily="Poppins">
          <FormattedMessage id="home:descripcion_unete"></FormattedMessage>
        </Text>
      </Box>

      <Films
        textTitle={<FormattedMessage id="home:gratis"></FormattedMessage>}
        textHoy={<FormattedMessage id="home:peliculas"></FormattedMessage>}
        textEstaSemana={<FormattedMessage id="home:television"></FormattedMessage>}
        linkFirst="/discover/movie?api_key="
        linkSecond="/discover/tv?api_key="
        setChoose={setChooseFree}
        linkFiltrerFirst="&sort_by=release_date.desc&language=es-ES&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free"
        linkFiltrerSecond="&sort_by=release_date.desc&language=es-ES&page=1&vote_average.gte=5&vote_count.gte=1000&watch_region=ES&with_watch_monetization_types=free"
        setChooseFiltrer={setChooseFiltrer}
        printFilms={firstFree}
        moreText={<FormattedMessage id="home:mas"></FormattedMessage>}
        theAreMore={theAreMoreFree}
        showMore={showMoreFree}
      ></Films>
    </div>
  );
  //trending/movie/day?api_key=
};
export default HomePage;
