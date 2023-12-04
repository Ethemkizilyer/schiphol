import { useEffect, useState } from "react";
import { ImClock } from "react-icons/im";
import styled from "styled-components";

const Time = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
     const interval = setInterval(() => {
       setTime(new Date());
     }, 1000);

     return () => {
       clearInterval(interval);
     };
   }, []);

   const formatTime = (value) => {
     return value < 10 ? `0${value}` : value;
   };

   const hours = formatTime(time.getHours());
   const minutes = formatTime(time.getMinutes());
   const seconds = formatTime(time.getSeconds());
  return (
    <Clock>
      <ImClock/>{hours}:{minutes}:{seconds}
    </Clock>
  );
};

export default Time;

const Clock = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #141251;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
