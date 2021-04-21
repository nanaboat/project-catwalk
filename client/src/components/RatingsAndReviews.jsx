import React, {useState} from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData.js';

const RatingsAndReviews = (props) => {
  const [reviewData, setReviewData] = useState(sampleData.reviewMetaData);
  const [reviewList, setReviewList] = useState(sampleData.reviewList)
  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings reviewData={reviewData}/>
        <Reviews />
      </div>
    </div>
  );
}

export default RatingsAndReviews;