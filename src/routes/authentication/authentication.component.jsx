import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";

const Authentication = () => {

  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
