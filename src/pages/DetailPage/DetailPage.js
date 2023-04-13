import { useParams } from "react-router-dom";
import useFecth from "../../hooks/useFetch";
import { Box, Circle, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";


const IMAGE_URL = "https://www.themoviedb.org/t/p/original/";

const DetailPage = () => {
  const intl = useIntl();
  const { detailId } = useParams();

  const MOVIE_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({id: "lang:api"})
  const CHARACTERS_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "/credits?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({id: "lang:api"})
  
  const [detailData] = useFecth(MOVIE_URL);
  const [characterData] = useFecth(CHARACTERS_URL);
  let hor = Math.floor(detailData.runtime / 60)
  let min_res = detailData.runtime - (hor * 60)

  return (
    <div>
      <Box bg="#052641" color="white" fontFamily="Poppins">
        <Box>
          <Image src={IMAGE_URL + detailData.backdrop_path} w="250px" h="375px" borderRadius="10px" ml="35px"></Image>
        </Box>
        <Box ml="20px">
          <Text fontSize="20px" fontWeight="bold">
            {detailData.title}
          </Text>
          <Text fontSize="12px">{detailData.title} ({detailData.original_language}) | | {hor}h {min_res}m</Text>
          <Box display="flex">
            <Circle w="54px" h="54px" fontWeight="bold">{Math.trunc(detailData.popularity/100)}%</Circle>
            <Text fontWeight="bold" fontSize="12px" pt="8px" pl="20px"><FormattedMessage id="detail:rating"></FormattedMessage></Text>
          </Box>
          <Text fontSize="12px">{detailData.tagline}</Text>
          <Text fontSize="16px" fontWeight="bold"><FormattedMessage id="detail:overview"></FormattedMessage></Text>
          <Text fontSize="12px">{detailData.overview}</Text>
        </Box>
      </Box>
      <Text fontSize="24px" fontFamily="Poppins" fontWeight="bold" color="#2D2D2D" ml="18px" mt="46px"><FormattedMessage id="detail:characters"></FormattedMessage></Text>
      <Box display="flex">
        {
          characterData.map((char) => {
            return (
              <Box w="50%">

              </Box>
            )
          })
        }
      </Box>
    </div>
  );
};
export default DetailPage;
