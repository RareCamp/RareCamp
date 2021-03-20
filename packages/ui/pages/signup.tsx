import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { Button, Input } from 'antd';
import { InputField } from 'components/InputField';
import {
  AS_REQUIRED,
  AS_EMAIL,
  AS_PASSWORD,
} from 'constants/validations';
import { Logo } from 'components/Logo';

const SignUp = () => {
  const router = useRouter();

  const [isOtp, setIsOtp] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEmail(data.email);
    Auth.signUp(data.email, data.password)
      .then(() => {
        setIsOtp(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateOtp = (data) => {
    console.log(data.otp, console.log('email'));
    Auth.confirmSignUp(email, `${data.otp}`).then((data) => {
      router.push('/');
    });
  };

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
          {!isOtp ? (
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
                name="email"
                placeholder="Email"
                error={errors.email && errors.email.message}
              />
              <InputField
                reference={register({
                  ...AS_REQUIRED,
                  ...AS_PASSWORD,
                })}
                type="password"
                name="password"
                placeholder="password"
                error={errors.password && errors.password.message}
              />
              <Button
                type="submit"
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
          ) : (
            <form
              className="flex flex-col mt-5"
              onSubmit={handleSubmit(validateOtp)}
            >
              <InputField
                key={otp}
                reference={register({
                  ...AS_REQUIRED,
                })}
                type="number"
                name="otp"
                placeholder="Enter OTP"
                error={errors.otp && errors.otp.message}
              />
              <Button
                type="submit"
                size="lg"
                color="primary"
                label="OTP"
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
          )}
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
