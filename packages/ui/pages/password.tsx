import { Button, Input } from 'antd'
import { useForm } from 'react-hook-form'
import { Logo } from 'components/Logo'

const Password = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = () => {}
  return (
    <section className="px-4">
      <div className="bg-secondary flex justify-between h-screen px-52 py-16">
        <div className="w-1/2 bg-white rounded-l-lg h-full py-16 px-10">
          <Logo />
          <h1 className="text-3xl mt-8 font-normal">
            Set up your Account
          </h1>
          <form
            className="flex flex-col mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-column justify-between mt-2">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input placeholder="Password" />
            <Button type="primary">Continue</Button>
          </form>
        </div>
        <div className="w-1/2 bg-white rounded-r-lg object-contain">
          <div
            style={{ color: '#3e3465' }}
            className="absolute top-36 right-80 flex flex-col text-2xl"
          >
            <span>Own the roadmap </span>
            <span>to our future</span>
          </div>
          <img
            src="/womenImage.png"
            alt="signup"
            className="self-center h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Password
