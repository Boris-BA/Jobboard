import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header name={"The job board"}></Header>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"yellow"}
        ></Jobs>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"blue"}
        ></Jobs>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"red"}
        ></Jobs>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"blue"}
        ></Jobs>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"red"}
        ></Jobs>
        <Jobs
          title={"Full Time Sales"}
          className={"description"}
          contractType={"CDI"}
          country={"France"}
          city={"Paris"}
          color={"yellow"}
        ></Jobs>
      </div>
      <footer className="footer">Made with REACT at le Réacteur</footer>
    </div>
  );
}

export default App;
