import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
import { AS_REQUIRED, AS_EMAIL } from 'constants/validations';
import { Logo } from 'components/Logo';

// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };

  async function signup () {
      try {
          // const { user } = await Auth.signUp({
          //     username,
          //     password,
          //     attributes: {
          //         email,          // optional
          //         phone_number,   // optional - E.164 number convention
          //         // other custom attributes 
          //     }
          // });
          // console.log(user);
      } catch (error) {
          console.log('error signing up:', error);
      }
  }
  return (
    <section className="px-4">
      <div className="bg-secondary h-screen flex justify-between px-52 py-16">
        <div className="w-1/2 bg-white rounded-l-lg py-16 px-10">
          <Logo />
          <h1 className="text-3xl mt-8">Sign Up</h1>
          <span>
            or
            <Link href="/signin">
              <span className="text-btn-primary ml-2 cursor-pointer hover:text-blue-500">
                log in to your account
              </span>
            </Link>
          </span>
          <form
            className="flex flex-col mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              reference={register({
                ...AS_REQUIRED,
                ...AS_EMAIL,
              })}
              type="email"
              name="EMAIL"
              placeholder="Email"
              error={errors.EMAIL && errors.EMAIL.message}
            />
            <Button
              type="submit"
              onClick={signup}
              size="lg"
              color="primary"
              label="Sign Up"
              className="mt-4 text-white text-sm"
            />

            <p className="text-xs mt-4 flex flex-col justify-between h-9">
              <span className="text-gray-400 text-extralight">
                By signing up, you acknowledge you have read and
              </span>
              <span className="text-gray-400 text-extralight">
                understood OpenGT
                <span className="text-btn-primary ml-1 mr-1 cursor-pointer hover:text-blue-500">
                  Privacy policy
                </span>
                &
                <span className="text-btn-primary ml-1 cursor-pointer hover:text-blue-500">
                  Terms of service
                </span>
              </span>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-white rounded-r-lg object-contain">
          <div
            style={{ color: '#3e3465' }}
            className="absolute top-44 right-80 flex flex-col text-3xl"
          >
            <span>Own the roadmap </span>
            <span>to our future</span>
          </div>
          <img
            src="/login-signup.png"
            alt="signup"
            className="self-center h-full w-full"
          />
          {/* <Icon name="form" className="object-contain  w-full..." /> */}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
