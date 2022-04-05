import {getSignature} from "../Zoom";
import {Link} from "react-router-dom";
import {React, useEffect, useState} from "react";

export function Home() {

    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const grabDataFromBackend = async() => {
            try {
                const response = await fetch(url);
                await response.json().then((data) => {
                    // I've assigned the data within .then in order to assure promise resolution
                    setAdvice(data.slip.advice);
                });
            } catch (error) {
                console.log("error", error);
            }
        }

        console.log(grabDataFromBackend());
    }, []);

    return (
        <>
            <main>
                <h1>Zoom Meeting SDK Sample React</h1>
                <p>You can do this, I believe in you.</p>

                <div>
                    <div className="card" onClick={getSignature}>
                        Join Meeting
                    </div>
                    <div>
                        <p>Here is some data from a JSON!</p>
                        <p>
                            This is some advice queried from a website!
                        </p>
                        <p>
                            {/*We can just query the object like normal since JSON is natively supported by javscript*/}
                            {advice}
                        </p>
                    </div>
                </div>
            </main>
            <nav>
                <Link to="/calendar">Calendar</Link>
            </nav>
        </>
    );
}