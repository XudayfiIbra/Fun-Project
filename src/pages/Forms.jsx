import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(30).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
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
          {...register("fullName")} 
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
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>
    </>
  );
};

export default Form;


