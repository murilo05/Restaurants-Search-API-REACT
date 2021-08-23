import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Restaurant, RestaurantInfo, RestaurantPhoto , Title, Address} from './styles'
import restaurante from '../../assets/restaurante-fake.png';
const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} value="4" isHalf edit={false} activeColor="#e7711c"/>
            <Address>Rua benjamin constantr, 2323</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt ="Foto do Restaurante"/>
    </Restaurant>
);

export default RestaurantCard;