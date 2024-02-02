import React from 'react'
// import { Card, CardContent } from '@material-ui/core'
import Data from './Data.json'
// import CardMedia from '@mui/material/CardMedia';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Font.css';
import { useNavigate } from 'react-router-dom'
import Typo from './component/Typo';
import Card from './component/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../store/slices/productSlice';
const useStyles = makeStyles(() => ({

    cardArea: {
        display: 'grid',
        columnGap: '15px',
        gridTemplateColumns: 'auto auto',
        padding: '20px',
        fontSize: '30px',
    },
    
    Container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
    },
    card: {
        flex: '1 0 8rem',
    },
    title: {
        fontSize: 'clamp(30px, 4vw , 50px)',
    },
    textButton: {
        fontSize: 'clamp(8px, 1vw , 25px)',
    },
    CardMedia:{
        // borderRadius: "10px",
        objectFit: "cover",
        height:"200px",
        width: "100%",
        display: "block",
        backgroundSize: "cover",
        verticalAlign: "middle",
      },
    // '@media only screen and (max-width: 600px)': {
    //         cardArea:{
    //             columnGap: '10px',
    //             gridTemplateRows: 'auto auto',
    //             gridTemplateColumns: 'none',
    //         },
    //     },
}));

export const Product = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();

    const addCard= (value) => {
        console.log(value ,"product");
        dispatch(addToCard(value));
        navigate(`/AddCart/${value}`);
    };
    const handleCard = (data) => {
        navigate(`/Product/${data}`);
    }

    return (
        <div className='ObjectSansRegular'>
            <h2 className={classes.title} >Products</h2>
            
            <div className={classes.Container}>
                {Data.map((result, index) => (
                    <Card variant="card" className={classes.card}  >
                        <div onClick={() => handleCard(result.id)}>
                            {/* <CardMedia
                                component="img"
                                height="300"
                                image={result.img[0]}
                                alt="green iguana"
                                style={{ borderRadius: "5px" }}
                            /> */}
                            
                                <img src={result.img[0]} alt="abc" className={classes.CardMedia}/>
                        
                                <Typo variant="title" >
                                    {result.title}
                                </Typo>

                                {/* <Typo variant="tp01">Test Dat for Common component</Typo> */}
                                <Typo variant= " description">
                                    {result.des}
                                </Typo>
                          
                        </div>
                        <div className={classes.cardArea}>
                            <Typo variant="price">
                                {result.price}
                            </Typo>
                            <Button className={classes.textButton} variant="outlined" size="medium" onClick={() => addCard(result.id)}>Add to Card</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
       
    )
}
