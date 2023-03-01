
import React from 'react';
import makeRequest from '../../utils/makeRequest';


// embed logo font


import { GET_ALL_EVENTS, 
} from '../../constants/apiEndPoints';

import './HomePage.css';

import Card from '../../components/Card';
import { BrowserRouter } from 'react-router-dom';
// import EventDetails from '../../pages/EventDetails';

const HomePage = () => {

  const [Events, setEvents] = React.useState<Array<[]>>([]);
  const [Themes, setThemes] = React.useState<Array<[]>>([]);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS)
      .then(async (res: any) => {
        // console.log(res);
        setEvents(res);
        //console.log(Events);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e: any) => {
    makeRequest(GET_ALL_EVENTS).then ((Events: any) => {
      const searchValue = e.target.value;
      const filteredEvents = Events.filter((event: any) => {
        return event.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setEvents(filteredEvents);
    }).catch((err: any) => {
      console.log(err);
    });
  };

  const handleRegistered = () => {
    makeRequest(GET_ALL_EVENTS).then ((Events: any) => {
      const filteredEvents = Events.filter((event: any) => {
        return event.isRegistered === true;
      });
      setEvents(filteredEvents);
    }).catch((err: any) => {
      console.log(err);
    });
  };

  const handleAll = () => {
    makeRequest(GET_ALL_EVENTS)
      .then((res: any) => {
        // console.log(res);
        setEvents(res);
        //console.log(Events);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const handleBookmarked = () => {
    makeRequest(GET_ALL_EVENTS).then ((Events: any) => {
      const filteredEvents = Events.filter((event: any) => {
        return event.isBookmarked === true;
      });
      setEvents(filteredEvents);
    }).catch((err: any) => {
      console.log(err);
    });
  };

  // 
  const handleAvailableSeats = () => {
    makeRequest(GET_ALL_EVENTS).then ((Events: any) => {
      const filteredEvents = Events.filter((event: any) => {
        return event.areSeatsAvailable === true;
      });
      setEvents(filteredEvents);
    }).catch((err: any) => {
      console.log(err);
    });
  };

  return (
    !isClicked ?
      <div className='body'>
        <div className='util-bar'>
          <div className='bar-left'>
            <div className='filter-button'>
              <p>FILTER</p>
            </div>
            <div className='button-registered-events' onClick={handleRegistered}>
              <p>REGISTERED</p>
            </div>
            <div className='button-show-all-events' onClick={handleAll}>
              <p>ALL</p>
            </div>
          </div>
          <div className='bar-right' onClick={handleBookmarked}>
            <div className='search-bar' onClick={handleSearch}>
              <input type='text' placeholder='Event Name'/>
            </div>

            <div className='button-show-bookmarked' onClick={handleBookmarked}>
              <p>BOOKMARKED</p>
            </div>
            <div className='button-show-available-seats' onClick={handleAvailableSeats}>
              <p>SEATS AVAILABLE</p>
            </div>
          </div>

        </div>

        <div className='cards'>
          {Events.map((event: any, idx: number) => (
            // <Card setIsClicked={setIsClicked} key={idx} {...event} />
            <Card setIsClicked={setIsClicked} key={idx} {...event} />
          ))}
        </div>
        <br/>
      </div>
      :
      <div onClick={() => { setIsClicked(false);}}>
        {
          <p>lol</p>
        }

      </div>
        

  );
};

export default HomePage;
