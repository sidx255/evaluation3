import React from 'react';
import makeRequest from '../../utils/makeRequest';
import FontAwesome from 'react-fontawesome';
import { getFormattedDateFromUtcDate } from '../../utils/utcDateTime';

import { GET_ALL_EVENTS, 
  GET_EVENT,
  UPDATE_EVENT_REGISTRATION,
  UPDATE_EVENT_BOOKMARK,
  GET_THEMES,
  SAVE_THEME
} from '../../constants/apiEndPoints';

import './Card.css';
import { useNavigate } from 'react-router-dom';


// import EventDetails from '../../pages/EventDetails';


const Card = ({
  id,
  name,
  description,
  venue,
  datetime,
  timezone,
  areSeatsAvailable,
  isRegistered,
  isBookmarked,
  imgUrl
}
    : { 
        id: number,
        name: string,
        description: string,
        venue: string,
        datetime: any,
        timezone: any,
        areSeatsAvailable: boolean,
        isRegistered: boolean,
        isBookmarked: boolean,
        imgUrl: string
    }
) => {

  const navigate = useNavigate(); 
  const routeChange = (id:any) =>{ 
    const path = `event-details?q=${id}`; 
    navigate(path);
  };

  const [Bookmarked, setBookmarked] = React.useState<boolean>();
  const [Registered, setRegistered] = React.useState<boolean>();
  const [Seats, setSeats] = React.useState<boolean>();
  

  React.useEffect(() => {
    makeRequest(GET_EVENT(id)).then((res: any) => {
      setRegistered(res.isRegistered);
      setBookmarked(res.isBookmarked);
      setSeats(res.areSeatsAvailable);
    }).catch((err: any) => {
      console.log(err);
    });
  }, []);
  // like button

  //   React.useEffect(() => {
  //     setBookmarked(isBookmarked);
  //   }, []);

  const handleBookmark = async () => {
    await handlePatch({
      bookmarked: !Bookmarked
    });
    setBookmarked(!Bookmarked);
  };

  const handlePatch = async (obj: any) => {
    await makeRequest(UPDATE_EVENT_BOOKMARK(id), {
      data : 
        {
          'isBookmarked': obj.bookmarked
        }
    })
      .then((res: any) => {
        console.log(res);
      }).catch((err: any) => {
        console.log(err);
      }
      );
  };

  return (
    <div className='card' data-testid='card'>
      <div className='card-body' >
        <div className='cover' onClick={() => { 
        // setIsClicked(true); 
          routeChange(id);}}>
          {/* image tag */}
          <img src={imgUrl} alt='cover' width={180} height={180}/>
        </div>
        <div className='event-name'>
          <p>{name}</p>
        </div>
        <p className='description'>{description}</p>
        <p className='venue'>VENUE: {venue}</p>
        <p className='date'>DATE: {getFormattedDateFromUtcDate(datetime)}</p>
        <div className='registered'>
          {
            !Registered?
              <p>REGISTERED</p>
              :
              !Seats?
                <p>No Seats Available</p>
                :<p> </p>
          }
        </div>

        <div className='bookmark' onClick={handleBookmark}> 
          {
            Bookmarked?
              <img src='/assets/b-solid.png' alt='bookmark-yes' width={40} height={40} style={{marginRight: '5px'}}/>
              :<img src='/assets/b-light.png' alt='bookmark-no' width={40} height={40} style={{marginRight: '5px'}}/>
          }
                    
        </div>
      </div>
    </div>
        
  // <div>
  //     {JSON.stringify({id, name, genre, artist, album, imageUrl})}
  // </div>
  );
};

export default Card;