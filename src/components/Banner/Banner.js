import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {

        imgPath:
            'https://files.fm/thumb_show.php?i=6btqdfjyy',
    },
    {
        imgPath:
            'https://files.fm/thumb_show.php?i=z8ybus5u8',
    },
    {
        imgPath:
            'https://files.fm/thumb_show.php?i=xzru4mcrv',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom:'30px'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 500,
        display: 'block',

        overflow: 'hidden',
        width: '100%',
    },
}));
const Banner = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



    return (
        <div>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                
            </div>
        </div>
    );
};

export default Banner;