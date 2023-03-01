import React from 'react';
import makeRequest from '../../utils/makeRequest';
import FontAwesome from 'react-fontawesome';

import { GET_ALL_EVENTS, 
  GET_EVENT,
  UPDATE_EVENT_REGISTRATION,
  UPDATE_EVENT_BOOKMARK,
  GET_THEMES,
  SAVE_THEME
} from '../../constants/apiEndPoints';

import './Card.css';

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

  const [Bookmarked, setBookmarked] = React.useState<boolean>();
  // like button

  //   React.useEffect(() => {
  //     setBookmarked(isBookmarked);
  //   }, []);

  const handleBookmark = () => {
    handlePatch({
      liked: !Bookmarked
    });
    setBookmarked(!Bookmarked);
  };

  const handlePatch = (obj: any) => {
    makeRequest(UPDATE_EVENT_BOOKMARK(id), {
      data : JSON.stringify({
        'like': obj.liked
      })
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
      <div className='card-body'>
        <div className='cover'>
          {/* image tag */}
          <img src={imgUrl} alt='cover' width={180} height={180} style={{borderRadius: '50%'}}/>
        </div>
        <div className='event-name'>
          <h5>{name}</h5>
        </div>
        <h6 className='description'>{description}</h6>
        <div>
          <h6 className='venue'>{venue}</h6>
        </div>
        <h6 className='date'>{datetime}</h6>
        <div className='registered'>
          <h5>{name}</h5>
        </div>

        <div className='bookmark' onClick={handleBookmark}> 
          {
            Bookmarked?
              <img src='/assets/heart-red.svg' alt='heart' width={20} height={20} style={{marginRight: '5px'}}/>
              :<img src='/assets/heart-gray.svg' alt='heart' width={20} height={20} style={{marginRight: '5px'}}/>
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