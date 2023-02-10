import './EditProfile.css'

function EditProfile() {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div id="edit-profile">
      <h2>Edite seus dados.</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você.
      </p>
      {/* Preview da image add depois */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" disabled />
        <label>
          <span>Imagem do perfil:</span>
          <input type="file" />
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder="Descrição do perfil" />
        </label>
        <label>
          <span>Quer alterar a sua senha?</span>
          <input type="password" placeholder="Digite a sua nova senha" />
        </label>
        <input type="sumbit" value="Atualizar" />
      </form>
    </div>
  )
}

export default EditProfile
