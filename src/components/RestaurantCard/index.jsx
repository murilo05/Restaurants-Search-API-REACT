import React, {useState} from 'react';
import ReactStars from "react-rating-stars-component";
import {Restaurant, RestaurantInfo, RestaurantPhoto , Title, Address} from './styles'
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';
const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState (false);
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} value={restaurant.rating} isHalf edit={false} activeColor="#e7711c"/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto imageLoaded={imageLoaded} onLoad={() => setImageLoaded(true)} src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon} alt ="Foto do Restaurante"/>
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    )
};

export default RestaurantCard;