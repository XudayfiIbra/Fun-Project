import { useForm } from "react-hook-form";
import * as yup from "yup";
const Form = () => {
  const { register, handleSubmit } = useForm();

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().integer().positive().min(16).max(80),
    password: yup.string().min(4).max(30).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("password")]),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your full name"
          {...register("FullName")}
        />
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password")}
        />
        <input
          type="password"
          placeholder="Confirm password"
          {...register("ConfirmPassword")}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
