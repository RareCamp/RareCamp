import { Button } from 'components/Button';
import { APP_NAME } from 'constants/application';
import { InputField } from 'components/InputField';
import { useForm } from 'react-hook-form';
import { AS_PASSWORD, AS_NAME } from 'constants/validations';

const Password = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    // console.log(data);
  };
  return (
    <section className="px-4">
      <div className="bg-secondary flex justify-between h-screen px-52 py-16">
        <div className="w-1/2 bg-white rounded-l-lg h-full py-16 px-10">
          <span className="px-5 text-3xl mt-4 text-red-600 uppercase my-auto">
            {APP_NAME.slice(0, 4)}
            <span className="inline text-4xl text-blue-900">
              {APP_NAME.slice(4, 6)}
            </span>
          </span>
          <h1 className="text-3xl mt-8">Set up your Account</h1>
          <form
            className="flex flex-col mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-column justify-between mt-2">
              <InputField
                reference={register({
                  ...AS_NAME,
                })}
                name="FIRSTNAME"
                placeholder="First name"
                error={errors.FIRSTNAME && errors.FIRSTNAME.message}
                label="First Name"
                className="mr-4"
              />
              <InputField
                reference={register}
                name="LASTNAME"
                placeholder="Last name"
                label="Last Name"
              />
            </div>
            <InputField
              reference={register({
                ...AS_PASSWORD,
              })}
              type="password"
              name="PASSWORD"
              placeholder="Password"
              label="Password"
              error={errors.PASSWORD && errors.PASSWORD.message}
            />
            <Button
              onClick={() => {}}
              color="primary"
              size="lg"
              label="Continue"
              className="mt-4 text-white"
              type="submit"
            />
          </form>
        </div>
        <div className="w-1/2 bg-white rounded-r-lg object-contain">
          <img
            src="/womenImage.png"
            alt="signup"
            className="self-center h-full w-full"
          />
          {/* <Icon name="form" className="object-contain  w-full..." /> */}
        </div>
      </div>
    </section>
  );
};

export default Password;
