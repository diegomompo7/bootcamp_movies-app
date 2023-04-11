import { useParams } from "react-router-dom";
import useFecth from "../../hooks/useFetch";
import { Box } from "@chakra-ui/react";

const DetailPage = () => {
  const { detailId } = useParams();

  const MOVIE_URL = process.env.REACT_APP_API_URL + "movie/" + detailId + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US";

  const [detailData] = useFecth(MOVIE_URL);

  console.log(detailData);

  return (
    <div>
      {detailData.map((detail) => {
        return (
          <Box bg="#052641">
            <Box>
              <Image src={detail.backdrop_path}></Image>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
export default DetailPage;
