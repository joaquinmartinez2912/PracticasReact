import ContactForm from "../components/ContactForm";
import LMain from "../layouts/Lmain";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../contexts/ModeContext";

export default function Contacto() {
  const { user } = useContext(ModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === "") {
      navigate("/");
    }
  }, [navigate, user]);

  return  (
    <LMain>
      <ContactForm />
    </LMain>
  ) 
}
