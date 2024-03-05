/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const CreatePertanyaan = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full flex justify-center overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Pertanyaan</span>
            </div>
            <input
              type="text"
              placeholder="Masukan Pertanyaan"
              //   defaultValue={judul}
              {...register("Pertanyaan", { required: true, maxLength: 20 })}
              className="input input-bordered w-full "
            />
            {/* <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
        </div> */}
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Quiz Id</span>
            </div>
            <input
              name="id_quiz"
              id="id_quiz"
              placeholder="Masukan Quiz Id"
              //   defaultValue={deskripsi}
              {...register("id_quiz", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Opsi Pertanyaan B</span>
            </div>
            <input
              name="opsiA"
              id="opsiA"
              placeholder="Masukan Opsi A"
              //   defaultValue={deskripsi}
              {...register("opsiA", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Opsi Pertanyaan B</span>
            </div>
            <input
              name="opsiB"
              id="opsiB"
              placeholder="Masukan Opsi B"
              //   defaultValue={deskripsi}
              {...register("opsiB", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Opsi Pertanyaan C</span>
            </div>
            <input
              name="opsiC"
              id="opsiC"
              placeholder="Masukan Opsi C"
              //   defaultValue={deskripsi}
              {...register("opsiC", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Opsi Pertanyaan D</span>
            </div>
            <input
              name="opsiD"
              id="opsiD"
              placeholder="Masukan Opsi D"
              {...register("opsiD", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Jawaban</span>
            </div>
            <input
              name="jawaban"
              id="jawaban"
              placeholder="Masukan Jawaban"
              {...register("jawaban", { required: true, maxLength: 100 })}
              className="input input-bordered w-full "
            ></input>
          </label>

          <button
            type="submit"
            className="btn btn-primary mt-4 py-2 cursor-pointer modal-action"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePertanyaan;
