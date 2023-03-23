import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dust() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc', {
        params: {
          api_key: '4oBYShqHn5%2F9ehBE8kv9azBXa5Rh0yvGNQXAmzR4j%2BQjt4H%2BvUEjMqiyxEFII%2BFLfYQ635SH5q8wbKctF28ykg%3D%3D',
        },
      });
      setData(response.data);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading data...</p>;

  return (
    <div>
      <h1>미세먼지 정보</h1>
      <p>도시: {data.city}</p>
      <p>PM 2.5: {data.pm25}</p>
      <p>PM 10: {data.pm10}</p>
    </div>
  );
}

export default Dust;