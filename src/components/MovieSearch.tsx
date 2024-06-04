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
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="type here ..."
            className="h-12 px-4 text-lg font-light border rounded-l-md border-slate-300"
            {...register("movie")}
          />

          <button
            type="submit"
            className="h-12 px-8 font-normal text-white bg-blue-500 rounded-r-md"
          >
            search
          </button>
        </form>
      </div>
      {submitted && <MovieResult searchData={searchKey} />}
    </>
  );
};
