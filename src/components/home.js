function Home({ handleGameStart, levels}) {
    const inputs = levels.map(l => <input key={l['name']} type='button' value={l['name']} onClick={handleGameStart} />);
    return (<div>{inputs}</div>);
}
export default Home;
