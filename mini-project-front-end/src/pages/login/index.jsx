import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Jika berhasil, lanjutkan ke halaman beranda atau lakukan tindakan sesuai kebutuhan
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4 text-3xl font-bold text-center">
          Login Khusus Admin
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true, maxLength: 20 })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="mt-10 w-full btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
