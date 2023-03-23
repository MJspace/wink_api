import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8e392721ebb3c75459ddf4852902f412")
        if (response) setData(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    if (!data) return <div> Loading ... </div>
    return(
        <div>
            <h1>오늘 서울의 날씨</h1>
            <p>서울의 온도는 {Math.floor(data.main.temp - 273.15)}도 입니다!</p>
            <p>서울의 최고온도는 {Math.floor(data.main.temp_max - 273.15)}도 입니다!</p>
            <p>서울의 최저온도는 {Math.floor(data.main.temp_min - 273.15)}도 입니다!</p>
            <p>서울의 습도는 {data.main.humidity}% 입니다!</p>
        </div>
    );
};

export default Weather;