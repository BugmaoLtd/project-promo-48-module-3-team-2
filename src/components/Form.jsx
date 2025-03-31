import GetAvatar from "./GetAvatar";

function Form(props) {
  const handleChangeProjectName = (ev) => {
    const projectNameValue = ev.target.value;
    props.onChangeProjectName(projectNameValue);
  };

  const handleChangeSlogan = (ev) => {
    const sloganValue = ev.target.value;
    props.onChangeSlogan(sloganValue);
  };

  const handleChangeRepo = (ev) => {
    const repoValue = ev.target.value;
    props.onChangeRepo(repoValue);
  };

  const handleChangeDemo = (ev) => {
    const demoValue = ev.target.value;
    props.onChangeDemo(demoValue);
  };

  const handleChangeTech = (ev) => {
    const techValue = ev.target.value;
    props.onChangeTech(techValue);
  };

  const handleChangeDesc = (ev) => {
    const descValue = ev.target.value;
    props.onChangeDesc(descValue);
  };

  const handleChangeName = (ev) => {
    const nameValue = ev.target.value;
    props.onChangeName(nameValue);
  };

  const handleChangeJob = (ev) => {
    const jobValue = ev.target.value;
    props.onChangeJob(jobValue);
  };

  const updateAvatar = (avatar) => {
    setprojectInfo({
      ...projectInfo,
      props.project.imageUrl: avatar
    })
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
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
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
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
        {/* <label htmlFor="image" className="button">
          Subir foto del proyecto
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        /> */}

        <GetAvatar updateAvatar={updateAvatar} text="Subir foto del proyecto" />

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
  );
}

export default Form;
