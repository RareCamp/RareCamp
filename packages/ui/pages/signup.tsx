import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
import { AS_REQUIRED, AS_EMAIL } from 'constants/validations';
import { APP_NAME } from 'constants/application';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };
  return (
    <section className="px-4">
      <div className="bg-secondary h-screen flex justify-between px-52 py-16">
        <div className="w-1/2 bg-white rounded-l-lg py-16 px-10">
          <span className="px-5 text-3xl mt-4 text-red-600 uppercase my-auto">
            {APP_NAME.slice(0, 4)}
            <span className="inline text-4xl text-blue-900">
              {APP_NAME.slice(4, 6)}
            </span>
          </span>
          <h1 className="text-3xl mt-8">Sign Up</h1>
          <span>
            or
            <Link href="/signin">
              <span className="text-btn-primary ml-2 cursor-pointer">
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
              onClick={() => {}}
              size="lg"
              color="primary"
              label="Sign Up"
              className="mt-4 text-white"
            />
            <div className="flex items-center justify-evenly mt-4">
              <p className="border-b-2  border-gray-300 w-2/5" />
              Or
              <p className="border-b-2 border-gray-300 w-2/5" />
            </div>
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
              label="Sign up with Google"
              className="text-sm text-gray-500 mt-4  border-gray-300"
            />
            <p className="text-sm mt-4 ">
              <span className="text-gray-400">
                By signing up, you acknowledge you have read and
                understood OpenGT
              </span>
              <span className="text-btn-primary ml-1">
                Privacy policy
              </span>
              &
              <span className="text-btn-primary ml-1">
                Terms of service
              </span>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-white rounded-r-lg object-contain">
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
