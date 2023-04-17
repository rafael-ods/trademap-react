import { createContext, useState } from "react";

export const NewSletter = createContext();
NewSletter.displayName = "UserNewSletter";

export const NewSletterProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <NewSletter.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </NewSletter.Provider>
  );
};
