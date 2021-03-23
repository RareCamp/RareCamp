import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { Button, Form, Input } from 'antd';
import { Logo } from 'components/Logo';

const SignUp = () => {
  const router = useRouter();

  const [isOtp, setIsOtp] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

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
            <Form
              className="flex flex-col mt-5"
              onFinish={onSubmit}
            >
            <Form.Item
            label='Email'
            name='email'
          >
            <Input type="email" />
          </Form.Item>
              <Form.Item
              label='Password'
              name='password'
            >
              <Input type="password" />
            </Form.Item>
              <Button
                htmlType="submit"
                type="primary"
              >Sign up</Button>

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
            </Form>
          ) : (
            <Form
              className="flex flex-col mt-5"
              onFinish={validateOtp}
            >
                <Form.Item
                label='Enter One-Time Password'
                name='otp'
              >
                <Input type="number" />
              </Form.Item>
              <Button
                htmlType="submit"
                type="primary"
              >OTP</Button>

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
            </Form>
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
