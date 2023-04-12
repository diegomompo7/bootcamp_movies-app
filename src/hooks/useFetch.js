import { useEffect, useState } from "react";

const useFecth = (apiUrl) => {
    console.log(apiUrl);
    const [result, setResult] = useState([]);

    useEffect(() => {
      if (apiUrl) {
        fetch(apiUrl)
          .then((data) => data.json())
          .then((dataParsed) => setResult(dataParsed));
      }
    }, [apiUrl]);

    console.log(result)
    return [result];
};

export default useFecth;
