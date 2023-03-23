// const Home = () => {
//     return (
//         <div>
//             <h1>민주의 미세먼지 알림이*^^*</h1>
//             <p>~~~오늘의 미세먼지가 알고 싶으신가요~~~</p>
//         </div>
//     );
// };

// export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>민주의 날씨와 미세먼지 알림이*^^*</h1>
      <p><b>~~~오늘의 날씨와 미세먼지가 알고 싶으신가요~~~</b></p>
      <ul>
        <li>
            <Link to="/weather">날씨 보러가기</Link>
        </li>
        <li>
            <Link to="/about">미세먼지 보러가기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;