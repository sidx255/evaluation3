
import React from 'react';
import makeRequest from '../../utils/makeRequest';

import { GET_ALL_EVENTS, 
  GET_EVENT,
  UPDATE_EVENT_REGISTRATION,
  UPDATE_EVENT_BOOKMARK,
  GET_THEMES,
  SAVE_THEME
} from '../../constants/apiEndPoints';

import './HomePage.css';

import Card from '../../components/Card';

const HomePage = () => {

  const [Events, setEvents] = React.useState<Array<[]>>([]);

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS)
      .then((res: any) => {
        // console.log(res);
        setEvents(res);
        console.log(Events);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='body'>
      <div className='util-bar'>
        <div className='filter-button'>
          <p>FILTER</p>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Event Name'/>
        </div>
        <div className='button-registered-events'>
          <p>REGISTERED</p>
        </div>
        <div className='button-show-all-events'>
          <p>ALL</p>
        </div>
        <div className='button-show-bookmarked'>
          <p>BOOKMARKED</p>
        </div>
        <div className='button-show-available-seats'>
          <p>SEATS AVAILABLE</p>
        </div>

      </div>

      <div className='cards'>
        {Events.map((event: any, idx: number) => (
          <Card key={idx} {...event}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
