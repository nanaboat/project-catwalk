import {
  emptyStar, fullStar, quarterStar, halfStar, threeQuarterStar,
} from './starRatings';

import { postInteractions } from './api';

export const getStarRatings = (ratings) => {
  const stars = [];
  for (let i = 0; i < Math.floor(ratings); i++) {
    stars.push(fullStar);
  }
  const halfStars = (ratings * 10) % 10;

  if (stars.length < 5) {
    if (halfStars < 2) {
      stars.push(emptyStar);
    } else if (halfStars < 5) {
      stars.push(quarterStar);
    } else if (halfStars < 7) {
      stars.push(halfStar);
    } else if (halfStars < 9) {
      stars.push(threeQuarterStar);
    } else {
      stars.push(fullStar);
    }
  }

  while (stars.length < 5) {
    stars.push(emptyStar);
  }

  return stars;
};

export const getCharacters = (words, length) => {
  const summary = words.trim();
  if (summary.length > length) {
    return `${summary.slice(0, length - 3)}...`;
  }

  return summary;
};

export const getAverageRatings = (ratings) => {
  let numRatings = 0;
  let totalRatings = 0;
  for (const key in ratings) {
    const rating = parseInt(key);
    const numRating = parseInt(ratings[key]);
    totalRatings += (rating * numRating);
    numRatings += numRating;
  }

  const averageRatings = totalRatings / numRatings;
  // return Math.round(averageRatings * 10) / 10;
  return parseFloat(averageRatings).toFixed(1);
};

export const getReviewsBreakdown = (reviews) => {
  const reviewsBreakdown = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  for (const review of reviews) {
    const key = review.rating;
    reviewsBreakdown[key].push(review);
  }
  return reviewsBreakdown;
};

export const getPercentageRecommend = (recommended) => {
  const trueValue = parseInt(recommended.true);
  const falseValue = parseInt(recommended.false);
  const percent = (trueValue / (trueValue + falseValue));
  return Math.round((percent * 100) * 10) / 10;
};

export const getCharacteristicOptions = (option) => {
  const characteristics = {
    Size: ['Too Small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Short', 'Perfect', 'Long'],
    Fit: ['tight', 'Perfect', 'long'],
  };

  return characteristics[option];
};

const getElementById = (element) => {
  let node = element;

  while (node) {
    if (node.id === 'ratings-reviews' || node.id === 'qacontainer' || node.id === 'overview' || node.id === 'banner' || node.id === 'widgets' || node.id === 'app') {
      return node.id;
    }
    node = node.parentNode;
  }
};

export const parseDOM = (event) => {
  // find which widget this event happened in.
  const widget = getElementById(event.target);

  // create data object with element, widget and timestamp
  const data = {
    element: event.target.outerHTML,
    widget,
    time: `${event.timeStamp}`,
  };

  postInteractions(data);
};
