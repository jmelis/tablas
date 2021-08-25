import { useEffect } from "react";

function getStorageKey(key) {
    let data = localStorage.getItem(key);
    if (!data) {
        data = [];
    } else {
        data = JSON.parse(data);
    }
    return data;
}

function appendToLocalStorageKey(key, data) {
    const storedData = getStorageKey(key);
    localStorage.setItem(key, JSON.stringify(storedData.concat(data)));
}

function Results({ data, setPage, levelName }) {
    function handleHome(e) {
        e.preventDefault();
        setPage('home');
    }

    const gameTimestamp = data[0] / 1e3;
    const totalTime = (data[data.length - 1] - data[0]) / 1e3;
    const numItems = (data.length - 1) / 2;

    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime - minutes * 60);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let questionTimes = [];
    for (let i = 0; i < numItems; i++) {
        const tsPrevious = data[2*i];
        const label = data[2*i + 1];
        const tsQuestion = data[2*i + 2];
        const tQuestion = (tsQuestion - tsPrevious) / 1e3;
        questionTimes.push([i+1, label, tQuestion]);
    }

    questionTimes.sort((a, b) => b[2] - a[2]);

    useEffect(() => {
        appendToLocalStorageKey('questions', questionTimes.map(qt => [gameTimestamp, levelName, qt[1], qt[2]]));
        appendToLocalStorageKey('games', [[gameTimestamp, levelName, numItems, totalTime]]);
    }, [gameTimestamp, levelName, numItems, questionTimes, totalTime]);

    return (<div className="results">
        <div>levelName: {levelName}</div>
        <div>timestamp: {gameTimestamp}</div>
        <div>total time: {minutes}m{seconds}s</div>
        <div>numItems: {numItems}</div>
        <div><ul>{questionTimes.map(e => <li key={e[0]}><pre>({e[0]}) {e[1]} time {e[2]}s</pre></li>)}</ul></div>
        <div><input type='button' value='home' onClick={handleHome} /></div>
    </div>)
}

export default Results;
