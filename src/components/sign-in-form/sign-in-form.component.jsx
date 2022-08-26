import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password } = formFeilds;

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFeilds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
