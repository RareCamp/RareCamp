import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { Button, Input } from 'antd';
import { AS_REQUIRED, AS_EMAIL } from 'constants/validations';
import { Logo } from 'components/Logo';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  async function signup() {
    try {
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
            <Input placeholder="email" />

            <Button type="primary" onClick={signup}>
              Submit
            </Button>
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
        </div>
      </div>
    </section>
  );
};

export default SignUp;
