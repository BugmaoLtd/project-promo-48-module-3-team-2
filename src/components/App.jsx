import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  // const [projectName, setProjectName] = useState("Nombre del proyecto");
  // const [slogan, setSlogan] = useState("Slogan");
  // const [repo, setRepo] = useState("Repositorio");
  // const [demo, setDemo] = useState("Demo");
  // const [tech, setTech] = useState("Tecnologías");
  // const [desc, setDesc] = useState("Descripción");
  // const [name, setName] = useState("Nombre");
  // const [job, setJob] = useState("Profesión");

  const [projectInfo, setProjectInfo] = useState({
    projectName: "Nombre del proyecto",
    slogan: "Slogan",
    repo: "Repositorio",
    demo: "Demo",
    tech: "Tecnologías",
    desc: "Descripción",
    name: "Nombre",
    job: "Profesión",
    imageProject: "",
    imageUser: "",
  });

  const changeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectName: value,
    });
  };
  const changeSlogan = (value) => {
    setProjectInfo({
      ...projectInfo,
      slogan: value,
    });
  };
  const changeRepo = (value) => {
    setProjectInfo({
      ...projectInfo,
      repo: value,
    });
  };
  const changeDemo = (value) => {
    setProjectInfo({
      ...projectInfo,
      demo: value,
    });
  };
  const changeTech = (value) => {
    setProjectInfo({
      ...projectInfo,
      tech: value,
    });
  };
  const changeDesc = (value) => {
    setProjectInfo({
      ...projectInfo,
      desc: value,
    });
  };
  const changeName = (value) => {
    setProjectInfo({
      ...projectInfo,
      name: value,
    });
  };
  const changeJob = (value) => {
    setProjectInfo({
      ...projectInfo,
      job: value,
    });
  };

  const onChangeImage = (value) => {
    setProjectInfo({
      ...projectInfo,
      imageProject: value
    })
  }

  const onChangeUserImage = (value) => {
    setProjectInfo({
      ...projectInfo,
      imageUser: value
    })
  }

  return (
    <div className="container">
      <Header />
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
        <Preview project={projectInfo} />
        <Form
          project={projectInfo}
          onChangeProjectName={changeProjectName}
          onChangeSlogan={changeSlogan}
          onChangeRepo={changeRepo}
          onChangeDemo={changeDemo}
          onChangeTech={changeTech}
          onChangeDesc={changeDesc}
          onChangeName={changeName}
          onChangeJob={changeJob}
          onChangeImageProject={onChangeImage}
          onChangeUserImage={onChangeUserImage}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
