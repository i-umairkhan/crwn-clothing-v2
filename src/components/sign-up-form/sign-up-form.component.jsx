import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFeilds;
  console.log(formFeilds);

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFeilds();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else console.log("user creation error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={handleSubmit}>
        {/*  */}
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        {/*  */}
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        {/*  */}
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        {/*  */}
        <FormInput
          label="Confirm password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {/*  */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
