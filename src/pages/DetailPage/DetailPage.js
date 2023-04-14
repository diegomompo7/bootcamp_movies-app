import { useParams } from "react-router-dom";
import { usePagination } from "../../hooks/usePagination";
import useFecth from "../../hooks/useFetch";
import { Box, Circle, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const IMAGE_URL = "https://www.themoviedb.org/t/p/original/";

const DetailPage = () => {
  const intl = useIntl();
  const { detailId } = useParams();

  const MOVIE_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({ id: "lang:api" });
  const CHARACTERS_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "/credits?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({ id: "lang:api" });
  const RECOMENDATIONS_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "/recommendations?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({ id: "lang:api" });

  const [detailData] = useFecth(MOVIE_URL);
  const [characterData] = useFecth(CHARACTERS_URL);
  const [recomendationsData] = useFecth(RECOMENDATIONS_URL);

  const[genresData] = usePagination(detailData?.genres)
  const [firstCharacters, showMoreCharacters, theAreMoreCharacters] = usePagination(characterData?.cast);
  const [firstRecomendations, showMoreRecomendations, theAreMoreRecomendations] = usePagination(recomendationsData?.results);

  let hor = Math.floor(detailData.runtime / 60);
  let min_res = detailData.runtime - hor * 60;

  console.log(firstCharacters);
  console.log(genresData);

  return (
    <div>
      <Box bg="#052641" color="white" fontFamily="Poppins">
        <Box>
          <Image src={IMAGE_URL + detailData.poster_path} w="250px" h="375px" borderRadius="10px" ml="35px"></Image>
        </Box>
        <Box ml="20px">
          <Text fontSize="20px" fontWeight="bold">
            {detailData.title}
          </Text>
          <Text fontSize="12px">
            {detailData.title} ({detailData.original_language}) | {genresData.map((gen) => {
              return (
                <Text>{gen.name}</Text>
              )})}| {hor}h {min_res}m
          </Text>
          <Box display="flex">
            <Circle w="54px" h="54px" fontWeight="bold">
              {Math.trunc(detailData.popularity / 100)}%
            </Circle>
            <Text fontWeight="bold" fontSize="12px" pt="8px" pl="20px">
              <FormattedMessage id="detail:rating"></FormattedMessage>
            </Text>
          </Box>
          <Text fontSize="12px">{detailData.tagline}</Text>
          <Text fontSize="16px" fontWeight="bold">
            <FormattedMessage id="detail:overview"></FormattedMessage>
          </Text>
          <Text fontSize="12px">{detailData.overview}</Text>
        </Box>
      </Box>
      <Text fontSize="24px" fontFamily="Poppins" fontWeight="bold" color="#2D2D2D" ml="18px" mt="46px">
        <FormattedMessage id="detail:characters"></FormattedMessage>
      </Text>
      <Box display="flex" flexWrap="wrap">
        {firstCharacters.map((char) => {
          return (
            <Box w="40%" ml="16px">
              <Image src={IMAGE_URL + char.profile_path} w="130px" borderRadius="10px"></Image>
              <Text fontSize="16px" fontWeight="bold">
                {char.original_name}
              </Text>
              <Text fontSize="14px">{char.character}</Text>
            </Box>
          );
        })}
        {theAreMoreCharacters && (
          <Button borderRadius="50px" bg="#052641" color="white" fontSize="14px" h="30px" w="103px" onClick={showMoreCharacters}>
            <FormattedMessage id="home:mas"></FormattedMessage>
          </Button>
        )}
      </Box>
      <Text fontSize="24px" fontFamily="Poppins" fontWeight="bold" color="#2D2D2D" ml="18px" mt="46px">
        <FormattedMessage id="detail:recomendations"></FormattedMessage>
      </Text>
      <Box display="flex" flexWrap="wrap" flexDirection="column" ml="16px">
        {firstRecomendations.map((reco) => {
          return <Box>
            <Image src={IMAGE_URL + reco.poster_path} w="287px" h="162px" borderRadius="10px"></Image>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="16px">{reco.title}</Text>
              <Text fontSize="16px" mr="16px">{Math.trunc(reco.popularity)}%</Text>
            </Box>
          </Box>;
        })}
        {theAreMoreRecomendations && (
          <Button borderRadius="50px" bg="#052641" color="white" fontSize="14px" h="30px" w="103px" onClick={showMoreRecomendations} mb="167px">
            <FormattedMessage id="home:mas"></FormattedMessage>
          </Button>
        )}
      </Box>
    </div>
  );
};
export default DetailPage;
