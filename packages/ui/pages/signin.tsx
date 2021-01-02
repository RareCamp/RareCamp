import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
import {
  AS_REQUIRED,
  AS_EMAIL,
  AS_PASSWORD,
} from 'constants/validations';
import { APP_NAME } from 'constants/application';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };
  return (
    <section className="px-4">
      <div className="bg-secondary h-screen flex justify-between px-52 py-16 ">
        <div className="w-1/2 bg-white rounded-l-lg py-16 px-10">
          <span className="px-5 text-3xl mt-4 text-red-600 uppercase my-auto">
            {APP_NAME.slice(0, 4)}
            <span className="inline text-4xl text-blue-900">
              {APP_NAME.slice(4, 6)}
            </span>
          </span>
          <h1 className="text-3xl mt-8 text-black text-bold">
            Log in
          </h1>
          <span>
            or
            <Link href="/signup">
              <span className="text-btn-primary ml-2 cursor-pointer">
                Dont have a login? Sign Up
              </span>
            </Link>
          </span>
          <form
            className="flex flex-col mt-5 h-full "
            onSubmit={handleSubmit(onSubmit)}
          >
            <Button
              icon={
                <img
                  src="/google-20.png"
                  alt="Google auth"
                  height={20}
                  width={20}
                />
              }
              size="lg"
              color="tertiary"
              onClick={() => {}}
              label="Sign in with Google"
              className="mt-4 text-gray-600 border-gray-300"
            />
            <div className="flex items-center justify-evenly mt-4">
              <p className="border-b-2  border-gray-300 w-2/5" />
              Or
              <p className="border-b-2 border-gray-300 w-2/5" />
            </div>
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
            <InputField
              reference={register({ ...AS_PASSWORD })}
              type="password"
              name="PASSWORD"
              placeholder="Password"
              error={errors.PASSWORD && errors.PASSWORD.message}
            />
            <p className="text-sm mt-4 ">
              <span className="text-btn-primary ml-1">
                Forgot your password?
              </span>
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="items-center">
                <input type="checkbox" />
                <span className="text-sm text-gray-600 ml-1">
                  Remember
                </span>
              </div>
              <Button
                label="Sign in"
                color="primary"
                size="md"
                className="text-white"
                onClick={() => {}}
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 bg-white rounded-r-lg object-contain">
          <img
            src="/login-signup.png"
            alt="login"
            className="self-center h-full w-full"
          />
          {/* <Icon name="form" className="object-contain  w-full..." /> */}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
