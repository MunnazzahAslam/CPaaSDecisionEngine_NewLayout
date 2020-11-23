import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import vonagebanner from './vonagebanner.png';
import VendorHeaderInfo from './VendorHeaderInfo';
import VendorFeature from './VendorFeatures';
import VendorRating from './VendorRating';
import vonage from '../home/Images/vonage.png';
import VendorUseCaseInfo from './VendorUseCaseInfo';
import VendorAPIInfo from './VendorAPIInfo';
import VendorSuccessStories from './VendorSuccessStories';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
    container: {
        borderRadius: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(0),
    },
    media: {
        width: '100%',
        height: '100%',
        paddingTop: '22.5%', // 16:9
    },
    root1: {
        //width:'70%',
        height: '300px',
        margin: '18px',
        background: '#fff',
        borderRadius: '10px'
    },
    imagelogo: {
        width: '80px',
        height: '80px',
        transform: 'scale(0.4)',
        objectFit: 'cover'
    },
    imgContainer: {
        width: '80px',
        height: '80px',
        overflow: 'hidden',
        borderRadius: '70%',
        cursor: 'pointer',
    },
    root2: {
        //width:'30%',
        height: '700px',
        margin: '18px',
        background: '#fff',
        borderRadius: '10px'
    },
    root3: {
        //width:'70%',
        height: '350px',
        margin: '18px',
        marginTop: '-380px',
        background: '#fff',
        borderRadius: '10px'
    },
    root4: {
        //width:'70%',
        height: '400px',
        margin: '18px',
        background: '#fff',
        borderRadius: '10px'
    },
    root5: {
        //width:'70%',
        height: '400px',
        margin: '18px',
        //marginTop:'-75px',
        background: '#fff',
        borderRadius: '10px'
    },
    root6: {
        //width:'70%',
        height: '1200px',
        margin: '18px',
        //marginTop:'-75px',
        background: '#fff',
        borderRadius: '10px'
    },
    root7: {
        //width:'70%',
        height: '735px',
        margin: '18px',
        marginTop: '-770px',
        background: '#fff',
        borderRadius: '10px'
    },
    title: {
        fontSize: 18,
        color: '#15202B'
    },
    pos: {
        marginBottom: 12,
        color: '#15202B'
    },
}));

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <div className="main">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.root1}>
                        <CardMedia
                            className={classes.media}
                            image={vonagebanner}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={9}>
                    <Card className={classes.root1}>
                        <CardContent className={classes.title} color="textSecondary" >
                            {/*  <div className={classes.imgContainer}><img alt="logo" className={classes.imagelogo} src={vonage} /></div> */}
                            <VendorHeaderInfo />
                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/vonage" >Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Card className={classes.root2}>
                        <CardContent className={classes.title} color="textSecondary" >
                            <VendorFeature />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root3}>
                        <CardContent>
                            <h5 className={classes.title} color="textSecondary" >Ratings (Ease of use) </h5>
                            <br />
                            <VendorRating />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root3}>
                        <CardContent>
                            <h5 className={classes.title} color="textSecondary" >Ratings (Quality of Support) </h5>
                            <br />
                            <VendorRating />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.root3}>
                        <CardContent>
                            <h5 className={classes.title} color="textSecondary" >Ratings (Ease of Setup) </h5>
                            <br />
                            <VendorRating />
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root1}>
                        <CardContent>
                            <div style={{ borderRadius: '10px', margin: '8px' }}>
                                <ReactPlayer height='250px' width='480px' url='https://www.youtube.com/watch?v=rqRPL3IDnb8' />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root1}>
                        <CardContent>
                            <div style={{ borderRadius: '10px', margin: '8px' }}>
                                <ReactPlayer height='250px' width='480px' url='https://www.youtube.com/watch?v=FD_mdU2yLcQ' />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root1}>
                        <CardContent>
                            <div style={{ borderRadius: '10px', margin: '8px' }}>
                                <ReactPlayer height='250px' width='480px' url='https://www.youtube.com/watch?v=0MnzaOoo1Wk&t=33s' />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Card className={classes.root5}>
                        <CardContent className={classes.title} color="textSecondary" >
                            <VendorUseCaseInfo />
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.root6}>
                        <CardContent className={classes.title} color="textSecondary" >
                            <VendorSuccessStories />
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Card className={classes.root7}>
                        <CardContent className={classes.title} color="textSecondary">
                            <VendorAPIInfo />
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Show More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                </Grid>
            </Grid>

        </div>
    );
} 