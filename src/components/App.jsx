import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    name: "Nombre del proyecto",
    slogan: "Slogan",
    repo: "Repositorio",
    demo: "Demo",
    technologies: "Tecnologías",
    desc: "Descripción",
    autor: "Nombre",
    job: "Profesión",
    image: "",
    photo: "",
  });
  const [url, setUrl] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const changeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      name: value,
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
      technologies: value,
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
      autor: value,
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
      image: value,
    });
  };

  const onChangeUserImage = (value) => {
    setProjectInfo({
      ...projectInfo,
      photo: value,
    });
  };

  const handleSubmitProject = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.cardURL);
      });
    setIsHidden(false);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="" target="_blank">
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
          onSaveProject={handleSubmitProject}
          url={url}
          isHidden={isHidden}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
