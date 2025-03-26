import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  const [projectName, setProjectName] = useState("Nombre del proyecto");
  const [slogan, setSlogan] = useState("Slogan");
  const [repo, setRepo] = useState("Repositorio");
  const [demo, setDemo] = useState("Demo");
  const [tech, setTech] = useState("Tecnologías");
  const [desc, setDesc] = useState("Descripción");
  const [name, setName] = useState("Nombre");
  const [job, setJob] = useState("Profesión");
  
  const changeProjectName = (value) => {
    setProjectName(value);
  }
  const changeSlogan = (value) => {
    setSlogan(value);
  }
  const changeRepo = (value) => {
    setRepo(value);
  }
  const changeDemo = (value) => {
    setDemo(value);
  }
  const changeTech = (value) => {
    setTech(value);
  }
  const changeDesc = (value) => {
    setDesc(value);
  }
  const changeName = (value) => {
    setName(value);
  }
  const changeJob = (value) => {
    setJob(value);
  }

  return (
    <div className="container">
      <Header/>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>
        <Preview job={job} name={name} slogan={slogan} projectName={projectName} desc={desc} tech={tech} demo={demo} repo={repo} />
        <Form onChangeProjectName={changeProjectName} onChangeSlogan={changeSlogan} onChangeRepo={changeRepo} onChangeDemo={changeDemo} onChangeTech={changeTech} onChangeDesc={changeDesc} onChangeName={changeName} onChangeJob={changeJob} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
