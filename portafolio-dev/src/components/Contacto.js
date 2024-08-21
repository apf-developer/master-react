import React from 'react'

export const Contacto = () => {
    return (
        <div className='container'>
            <div className="row">

                <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className='section-title'>
                                <span>Contacto</span>
                                <h1>Contacto</h1>
                                <p className="text-muted">Sit sint consectetur velit quisquam cupiditate impedit suscipit aliasLorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="d-flex flex-column">
                                    <div><i className="bi bi-telephone text-primary"></i> <small><b>+569*******</b></small></div>
                                    <div><i className="bi bi-envelope-at text-danger"></i> <small><b>correo-electronico@outlook.com</b></small></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <img id="avatar" src="../../img/avatar.png" alt="avatar" />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <form className="p-4">
                        <div className="form-floating mb-3">
                            <input id="nombre" type="text" className="form-control" placeholder="Nombre" />
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input id="apellidos" type="text" className="form-control" placeholder="Apellidos" />
                            <label htmlFor="apellidos">Apellido</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input id="correo" type="email" className="form-control" aria-describedby="correoEmpresa" placeholder="Correo" />
                            <label htmlFor="correo">Correo electrónico</label>
                        </div>
                        <button type="submit" className="btn btn-outline-primary btn-md">Enviar</button>
                    </form>
                </div>
            </div>

        </div >
    )
}
