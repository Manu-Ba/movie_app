type HeaderProps = {
  page: string;
};

export const Header = ({ page }: HeaderProps) => {
  return (
    <div className="h-20 border-b-[1px] flex items-center justify-between px-10 sm:px-20 sticky top-0 bg-white">
      <span className="text-lg font-semibold lg:text-2xl">🎦 MovieApp</span>
      <span className="flex gap-5 lg:text-lg">
        <a href="/" className={`${page == "home" && "underline"}`}>
          search
        </a>
        <a
          href="/favorites"
          className={`${page == "favorites" && "underline"}`}
        >
          favorites
        </a>
      </span>
    </div>
  );
};
