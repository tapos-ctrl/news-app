import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));







const Home = () => {
    const classes = useStyles();


    const [article, setArticle] = useState([])

    useEffect(() => {
        const url = ('https://newsapi.org/v2/everything?q=tesla&from=2021-11-25&sortBy=publishedAt&apiKey=8125379350ee4cb5a04e73ec68fc06f0');
        axios(url)
            .then(data => setArticle(data.data.articles))
    }, [])


    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            article.map(articles => <NewsCard article={articles}></NewsCard>)
                        }
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Home;