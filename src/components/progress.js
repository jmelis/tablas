

function Progress({ data }) {
    const totalTime = (data[data.length - 1] - data[0]) / 1e3;
    const numItems = (data.length - 1) / 2;

    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime - minutes * 60);

    return (<div className="progress">
        <div>total time: {minutes}m{seconds}s</div>
        <div>average time: {(totalTime/numItems).toFixed(2)}</div>
    </div>)
}

export default Progress;
