import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Input, Button } from 'antd'
import { Logo } from 'components/Logo'
import { Auth } from 'aws-amplify'

const SignIn = () => {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    Auth.signIn(data.email, data.password)
      .then(() => {
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <section className="px-4">
      <div className="bg-secondary h-screen flex justify-between px-52 py-16 ">
        <div className="w-1/2 bg-white rounded-l-lg py-16 px-10">
          <Logo />
          <h1 className="text-3xl mt-8 text-black text-bold">
            Log in
          </h1>
          <span>
            or
            <Link href="/signup">
              <span className="text-btn-primary ml-2 cursor-pointer hover:text-blue-500">
                Dont have a login? Sign Up
              </span>
            </Link>
          </span>
          <form
            className="flex flex-col mt-5 h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input placeholder="Basic usage" size="large" />
            <Input placeholder="Basic usage" size="large" />
            <p className="text-sm mt-4 ">
              <span className="text-btn-primary ml-1 cursor-pointer hover:text-blue-500">
                Forgot your password?
              </span>
            </p>
            <div className="flex justify-between items-center mt-2">
              <div className="items-center ml-1">
                <input type="checkbox" />
                <span className="text-sm text-gray-600 ml-1">
                  Remember
                </span>
              </div>
              <Button type="primary">Sign in</Button>
            </div>
          </form>
        </div>
        <div className="flex w-1/2 bg-white rounded-r-lg object-contain">
          <div
            style={{ color: '#3e3465' }}
            className="absolute top-44 right-80 flex flex-col text-3xl"
          >
            <span>Own the roadmap </span>
            <span>to our future</span>
          </div>
          <img
            src="/login-signup.png"
            alt="login"
            className="self-center h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default SignIn
