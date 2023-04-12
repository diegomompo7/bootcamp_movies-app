import { useParams } from "react-router-dom";
import useFecth from "../../hooks/useFetch";
import { Box, Image, Text } from "@chakra-ui/react";

const IMAGE_URL = "https://www.themoviedb.org/t/p/original/";

const DetailPage = () => {
  const { detailId } = useParams();

  const MOVIE_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US";

  const [detailData] = useFecth(MOVIE_URL);

  console.log(detailData);

  return (
    <div>
      <Box bg="#052641" color="white" fontFamily="Poppins">
        <Box>
          <Image src={IMAGE_URL + detailData.backdrop_path} w="250px" h="375px" borderRadius="10px" ml="35px"></Image>
        </Box>
        <Box ml="20px">
          <Text fontSize="20px" fontWeight="bold">{detailData.title}</Text>
          <Text fontSize="12px">{detailData.title} ({detailData.original_language}) | {detailData.genres.nam}</Text>
        </Box>
      </Box>
    </div>
  );
};
export default DetailPage;
