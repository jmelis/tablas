function Home({ handleGameStart, levels}) {
    const inputs = Object.keys(levels).map(l => <input key={l} type='button' value={l} onClick={handleGameStart} />);
    return (<div>{inputs}</div>);
}
export default Home;
