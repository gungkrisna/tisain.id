import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
    // Check if the rating is within the valid range of 0 to 5
    if (rating < 0 || rating > 5) {
        throw new Error('Rating value must be between 0 and 5.');
    }

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const starIcons = Array.from({ length: filledStars }, (_, i) => (
        <FaStar key={i} className="text-yellow-500 w-4 h-4" />
    ));

    if (hasHalfStar) {
        starIcons.push(<FaStarHalfAlt key="half-star" className="text-yellow-500 w-4 h-4" />);
    }

    starIcons.push(
        ...Array.from({ length: emptyStars }, (_, i) => (
            <FaRegStar key={`empty-star-${i}`} className="text-gray-400 w-4 h-4" />
        ))
    );

    return <div className="flex items-center gap-1">{starIcons}</div>;
};

export default RatingStars;
