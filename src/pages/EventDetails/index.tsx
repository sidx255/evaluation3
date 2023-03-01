import React from 'react';

import { useNavigate } from 'react-router-dom';

import './EventDetails.css';

import { GET_EVENT } from '../../constants/apiEndPoints';

import makeRequest from '../../utils/makeRequest';

import Card from '../../components/Card';

// display event details
const EventDetails = () => {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    const path = '/'; 
    navigate(path);
  };

  const [Event, setEvent] = React.useState<any>([]);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id:any = urlParams.get('q');
    makeRequest(GET_EVENT(id))
      .then((res: any) => {
        setEvent(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  console.log(Event);


  return (
    <div className='body'>
      <div className='card' onClick={routeChange}>
        {/* {Event.map((event: any, idx: number) => ( */}
        {/* // <Card setIsClicked={setIsClicked} key={idx} {...event} /> */}
        <Card {...Event} />
        {/* ))} */}
      </div>
    </div>
  );};

export default EventDetails;