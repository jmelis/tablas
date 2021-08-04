function getStorageKey(key) {
    let data = localStorage.getItem(key);
    if (!data) {
        data = [];
    } else {
        data = JSON.parse(data);
    }
}

function Results({ data, setPage, levelName }) {
    function handleHome(e) {
        e.preventDefault();
        setPage('home');
    }

    const gameTimestamp = data[0] / 1e3;
    const totalTime = (data[data.length - 1] - data[0]) / 1e3;
    const numItems = (data.length - 1) / 2;

    let questionTimes = [];
    for (let i = 0; i < numItems; i++) {
        const tsPrevious = data[2*i];
        const label = data[2*i + 1];
        const tsQuestion = data[2*i + 2];
        const tQuestion = (tsQuestion - tsPrevious) / 1e3;
        questionTimes.push([i+1, label, tQuestion]);
    }

    questionTimes.sort((a, b) => b[2] - a[2]);

    return (<div className="results">
        <div>levelName: {levelName}</div>
        <div>timestamp: {gameTimestamp}</div>
        <div>total time: {totalTime}</div>
        <div>numItems: {numItems}</div>
        <div><ul>{questionTimes.map(e => <li key={e[0]}><pre>q{e[0]}: {e[1]} time: {e[2]}</pre></li>)}</ul></div>
        <div><input type='button' value='home' onClick={handleHome} /></div>
    </div>)
}

export default Results;
