
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchRandomGreeting } from "../redux/greeting/randomGreeting";
import { useSelector } from 'react-redux';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  const randomGreeting = useSelector((state) => state.randomGreeting.greeting);
  return (<h1>{randomGreeting}</h1>);
}

export default Greeting;