import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [projectName, setProjectName] = useState("Nombre del proyecto");
  const [slogan, setSlogan] = useState("Slogan");
  const [repo, setRepo] = useState("Repositorio");
  const [demo, setDemo] = useState("Demo");
  const [tech, setTech] = useState("Tecnologías");
  const [desc, setDesc] = useState("Descripción");
  const [name, setName] = useState("Nombre");
  const [job, setJob] = useState("Profesión");
  
  const handleChangeProjectName = (event) => {
    setProjectName(event.target.value);
  }
  const handleChangeSlogan = (event) => {
    setSlogan(event.target.value);
  }
  const handleChangeRepo = (event) => {
    setRepo(event.target.value);
  }
  const handleChangeDemo = (event) => {
    setDemo(event.target.value);
  }
  const handleChangeTech = (event) => {
    setTech(event.target.value);
  }
  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  }
  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeJob = (event) => {
    setJob(event.target.value);
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

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{job}</p>
              <h3 className="card__name">{name}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{projectName}</h3>
              <p className="card__slogan">{slogan}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{tech}</p>

                <a
                  className="icon icon__www"
                  href={demo}
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={repo}
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              onChange={handleChangeProjectName}
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
            />
            <input
              onChange={handleChangeSlogan}
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <div className="addForm__2col">
              <input
                onChange={handleChangeRepo}
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
              />
              <input
                onChange={handleChangeDemo}
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
              />
            </div>
            <input
              onChange={handleChangeTech}
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
            />
            <textarea
              onChange={handleChangeDesc}
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              onChange={handleChangeName}
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
            />
            <input
              onChange={handleChangeJob}
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">
              Subir foto del proyecto
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="image"
              id="image"
            />
            <label htmlFor="photo" className="button">
              Subir foto de la autora
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="photo"
              id="photo"
            />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
