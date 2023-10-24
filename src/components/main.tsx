import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  //   const [isOpen1, setIsOpen1] = useState(true);
  //   const [isOpen2, setIsOpen2] = useState(true);

  //   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  //   const avgUserRating = average(watched.map((movie) => movie.userRating));
  //   const avgRuntime = average(watched.map((movie) => movie.runtime));

  return <main className="main">{children}</main>;
}
