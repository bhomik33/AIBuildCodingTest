import fetch from "node-fetch";
import {AbortController} from "node-abort-controller";
import {performance} from 'perf_hooks';

async function checkInternetSpeed(URI) {
    // controller is used to abort a fetch request
    const controller = new AbortController();
    const timeout = 5000;
    // abort function runs after 5 secs
    setTimeout(() => controller.abort(), timeout);
    const startTime = performance.now();
    try {
        // making a fetch request to the URI
        // connecting controller to the fetch request
        await fetch(URI, {
            "signal": controller.signal
        });
        const finishTime = performance.now();

        // calculating response time and converting milliseconds into seconds
        const responseTime = (finishTime - startTime) / 1000;

        // returning good if response time is less than half a second
        if (responseTime < 0.5) {
            return 'good';
        }

        // the else block would run if the response time is more than half second but less than 5 seconds
        else {
            return 'fine';
        }
    }
    // the catch block would be executed if fetch request gets aborted or takes more than 5 sec
    catch {
        return 'terrible';
    }
}
console.log(await checkInternetSpeed('https://deelay.me/5000/https://picsum.photos/200/300'));
