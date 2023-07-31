import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [errorCelular, setErrorCelular] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleConfirm = (event) => {
    event.preventDefault();

    // Validación del número de teléfono
    const celularRegex = /^[0-9]{10}$/;
    const isValidCelular = celular.match(celularRegex);
    setErrorCelular(!isValidCelular);

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = email.match(emailRegex);
    setErrorEmail(!isValidEmail);

    if (isValidCelular && isValidEmail) {
      const userData = {
        nombre,
        celular,
        email,
      };

      onConfirm(userData);
    }
  };

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleConfirm} className="Form">
        <div className="FormItem" style={{marginBottom: "10px", width: "100%" }}>
          <label className="Label"  style={{ display: "block", position: "relative" }}>
            Nombre
            <input className="Input" type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} style={{ width: "100%" }} />
          </label>
        </div>
        <div className="FormItem" style={{ marginBottom: "20px", width: "100%" }}>
          <label className="Label" style={{ display: "block", position: "relative" }}>
            Celular
            <input className={`Input ${errorCelular ? "error" : ""}`} type="text" value={celular} onChange={({ target }) => { setCelular(target.value); setErrorCelular(false) }} style={{ width: "100%" }} />
            {errorCelular && <span className="Error" style={{ position: "absolute", top: "0", right: "0", color: "red" }}>Celular inválido</span>}
          </label>
        </div>
        <div className="FormItem" style={{ marginBottom: "20px", width: "100%" }}>
          <label className="Label" style={{ display: "block", position: "relative" }}>
            Email
            <input className={`Input ${errorEmail ? "error" : ""}`} type="text" value={email} onChange={({ target }) => { setEmail(target.value); setErrorEmail(false) }} style={{ width: "100%" }} />
            {errorEmail && <span className="Error" style={{ position: "absolute", top: "0", right: "0", color: "red" }}>Email inválido</span>}
          </label>
        </div>
        <div style={{ width: "100%" }}>
          <button type="submit" className="Button btn btn-dark" style={{ width: "100%" ,marginTop: "30px" }}>Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
