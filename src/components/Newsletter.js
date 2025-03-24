import { useState, useEffect } from "react";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])



  const clearFields = () => {
    setEmail('');
  }

}
