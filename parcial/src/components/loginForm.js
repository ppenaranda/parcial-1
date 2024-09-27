import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      navigate('/robots');
    } else {
      setError('Credenciales incorrectas, intente de nuevo.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4 inicio-de-sesión">Adopta un Robot con Robot Lovers!</h1>

      <div className="text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
          className="img-fluid mb-3"
          alt="robots-banner"
        />
      </div>

      <form onSubmit={handleLogin} className="col-md-6 mx-auto rectangle">
        <h3 className="text-center mb-4 form-element">Inicio de sesión</h3>
        <div className="form-group mb-3">
          <label>Nombre de usuario</label>
          <input
            type="text"
            className="form-control nombre-de-usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary w-45 button-6">Ingresar</button>
          <button type="button" className="btn btn-danger w-45 button-7">Cancelar</button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </div>
    </div>
  );
};

export default LoginForm;
