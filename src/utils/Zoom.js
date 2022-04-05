import React from 'react';
import {ZoomMtg} from "@zoomus/websdk";


// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var signatureEndpoint = 'https://zoomsignaturegeneratorsdmay27.herokuapp.com/'
var apiKey = 'e5YnXJxrRyuFRsR7Mn7whg'
var meetingNumber = '2907749360'
var role = 0
var leaveUrl = 'http://localhost:3000'
var userName = 'React'
var userEmail = ''
var passWord = 'password'
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
var registrantToken = ''

const zoomMeetingSDK = document.getElementById('zmmtg-root');
zoomMeetingSDK.style.display = 'none';

export function getSignature(e) {
    e.preventDefault();

    fetch(signatureEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            meetingNumber: meetingNumber,
            role: role
        })
    }).then(res => res.json())
        .then(response => {
            startMeeting(response.signature)
        }).catch(error => {
        console.error(error)
    })
}

export function startMeeting(signature) {
    zoomMeetingSDK.style.display = 'block';

    ZoomMtg.init({
        leaveUrl: leaveUrl,
        success: (success) => {
            console.log(success)

            ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: userName,
                apiKey: apiKey,
                userEmail: userEmail,
                passWord: passWord,
                tk: registrantToken,
                success: (success) => {
                    console.log(success)
                },
                error: (error) => {
                    console.log(error)
                }
            })

        },
        error: (error) => {
            console.log(error)
        }
    })
}