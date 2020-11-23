import React from 'react'
import './home.css'
import vonage from './Images/vonage.png';
import twilio from './Images/twilio.png';
import infobip from './Images/infobip.png';
import messagebird from './Images/messagebird.png';
import plivo from './Images/plivo.png';
import sinch from './Images/sinch.png';
import kaleyra from './Images/kaleyra.png';
import soprano from './Images/soprano.png';
import telesign from './Images/telesign.png';
import zenvia from './Images/zenvia.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root1: {
       
    },
}));
function Home() {
    const classes = useStyles();
    return (
        <div className="home_page">
            <h2>Top 10 CPaaS Vendors</h2>
            <br />
            <div className="grid-container">
                <a href="/vonage" ><img alt="logo" className="image" src={vonage} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={twilio} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={infobip} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={messagebird} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={plivo} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={kaleyra} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={telesign} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={zenvia} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={soprano} /></a>
                <a href="/vonage" ><img alt="logo" className="image" src={sinch} /></a>
            </div>
            <br /><br /><br />
            <h2>Top 10 CPaaS APIs</h2>
            <div className="grid-container center">
                <div className="grid-item"><a href="/vonage">Video</a></div>
                <div className="grid-item"><a href="/vonage">Messages</a></div>
                <div className="grid-item"><a href="/vonage">SMS</a></div>
                <div className="grid-item"><a href="/vonage">Voice</a></div>
                <div className="grid-item"><a href="/vonage">In-App Voice</a></div>
                <div className="grid-item"><a href="/vonage">SIP Trunking</a></div>
                <div className="grid-item"><a href="/vonage">In-App Messaging</a></div>
                <div className="grid-item"><a href="/vonage">Conversation</a></div>
                <div className="grid-item"><a href="/vonage">Email</a></div>
                <div className="grid-item"><a href="/vonage">Verify</a></div>
            </div>
            <br /><br /><br />
            <h2>Top 10 Use Cases</h2>
            <div className="grid-container">
                <div className="grid-item"><a href="/vonage">800 number replacement</a></div>
                <div className="grid-item"><a href="/vonage">Accessible healthcare service</a></div>
                <div className="grid-item"><a href="/vonage">AI-enabled contact center</a></div>
                <div className="grid-item"><a href="/vonage">Anticipate shopper intent</a></div>
                <div className="grid-item"><a href="/vonage">Booking management through social media</a></div>
                <div className="grid-item"><a href="/vonage">Call tracking</a></div>
                <div className="grid-item"><a href="/vonage">Call transcription</a></div>
                <div className="grid-item"><a href="/vonage">Campaign tracking</a></div>
                <div className="grid-item"><a href="/vonage">Customer notification and engagement</a></div>
                <div className="grid-item"><a href="/vonage">Customer service through social media</a></div>
            </div>
            <br /><br /><br />
            <h2>Top 10 Success Stories</h2>
            <div className="grid-container">
       {/*         <Card className={classes.root1}> */}
                    <div className="grid-item"><a href="/vonage">Roadmap Helps Business Travelers Stay Connected with the Vonage SMS API</a></div>
        {/*        </Card>       */}
                <div className="grid-item"><a href="/vonage">Disruptive Fintech Startup Revolut Verifies Genuine Users with Vonage SMS API</a></div>
                <div className="grid-item"><a href="/vonage">ConceptBoard</a></div>
                <div className="grid-item"><a href="/vonage">RogerVoice Enables Deaf to Make Voice Calls Using Vonage SMS API</a></div>
                <div className="grid-item"><a href="/vonage">Grab hits the road in Asia with international SMS and voice</a></div>
                <div className="grid-item"><a href="/vonage">Kickstarter Uses Vonage to Bring Real-time Community Engagement to Crowdfunding</a></div>
                <div className="grid-item"><a href="/vonage">Vonage Video API-Enabled grandPad Allows Seniors to Stay in Touch with grid-itemmily and Friends</a></div>
                <div className="grid-item"><a href="/vonage">SalonIQ: Innovation and Style with the Vonage SMS API</a></div>
                <div className="grid-item"><a href="/vonage">With Vonage Voice API, Opearlo Slashes User Verification Costs in Half</a></div>
                <div className="grid-item"><a href="/vonage">Vonage SMS API and Two-grid-itemctor Authentication Bolster BlaBlaCar’s Passenger and Driver Confidence</a></div>
            </div>
        </div>
    )
}

export default Home
