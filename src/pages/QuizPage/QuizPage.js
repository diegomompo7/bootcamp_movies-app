import { FormattedMessage, useIntl } from "react-intl";
import useFecth from "../../hooks/useFetch";
import React from "react";
import { Box, Square, Text } from "@chakra-ui/react"

const QuizPage = () => {
  const min = 1;
  const max = 100;

  const [pageRandom, setPageRandom] = React.useState(Math.random() * (max - min) + min);

  const intl = useIntl();
  const TOP_RATED_URL = process.env.REACT_APP_API_URL + "movie/top_rated?api_key=" + process.env.REACT_APP_API_KEY + intl.formatMessage({ id: "lang:api" }) + "&page=" + pageRandom;

  const [ratedData] = useFecth(TOP_RATED_URL);

  console.log(ratedData);

  return (
    <div>
      <Box bg="#052641" fontFamily="Poppins" color="white">
        <Square bg="#C2D0DB" w="255px" ml="26px" h="378px" borderRadius="10px"></Square>
        <Text fontSize="20px" fontWeight="bold" ml="20px">???</Text>
        <Text fontSize="12px" ml="20px">???</Text>
        <Text fontSize="12px" fontWeight="bold" ml="20px">???</Text>
        <Text fontSize="12px" ml="20px" pb="35px">???</Text>
      </Box>
      <Text color="2D2D2D" fontWeight="bold" fontFamily="Poppins" fontSize="24px" ml="20px" mt="43px">Opciones</Text>
      <Box display="flex">

      </Box>
    </div>
  );
};
export default QuizPage;
