export const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <hr className="border border-slate-300 w-[95%]" />
      <div className="flex flex-col gap-4 px-20 font-light py-7 pt-14">
        <div className="flex flex-wrap gap-4 text-xl">
          <span className="font-semibold">MovieApp</span>
          <span>/</span>
          <span className="italic">by Manuela Barbic</span>
        </div>
        <div className="text-slate-500">created in 2024 / June</div>
        <div className="lg:w-3/5 text-slate-500">
          Created with: The OMDb API is a RESTful web service to obtain movie
          information, all content and images on the site are contributed and
          maintaned by our users. More Infos on the API you can find here -{" "}
          <a
            href="https://www.omdbapi.com/"
            target="_blank"
            className="text-blue-600 underline"
          >
            https://www.omdbapi.com/
          </a>
        </div>
      </div>
    </div>
  );
};
