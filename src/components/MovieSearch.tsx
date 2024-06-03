import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { MovieResult } from "./MovieResult";

type Inputs = {
  movie: string;
};

const schema = yup.object().shape({
  movie: yup.string().required("*"),
});

export const MovieSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const [searchKey, setSearchKey] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (data: Inputs) => {
    setSearchKey(data.movie);
    setSubmitted(true);
  };

  return (
    <>
      <div className="px-10 pt-20 pb-10 text-lg font-light sm:px-20">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-col">
              <span>
                Name of movie{" "}
                {errors.movie && (
                  <span className="text-red-500">{errors.movie.message}</span>
                )}
              </span>
              <input
                type="text"
                placeholder="type here ..."
                className="border-[1px] rounded-md px-4 mt-2 font-light text-lg border-slate-300 h-12"
                {...register("movie")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="h-12 px-8 mt-5 font-normal text-white bg-blue-500 rounded-md"
          >
            search
          </button>
        </form>
      </div>
      {submitted && <MovieResult searchData={searchKey} />}
    </>
  );
};
