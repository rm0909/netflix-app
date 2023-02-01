import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import VideoModal from "../modal/VideoModal";
import InfoModal from "../modal/InfoModal";
import { MediaType, Movie } from "../../typing";
import Card from "./Card";

interface Props extends MediaType {
  media: Movie[];
}

export default function MediaGrid({ media, mediaType }: Props) {
  const { selectedMovie, showVideoModal, showInfoModal } = useContext(Context);
  const router = useRouter();

  //parse query to number
  let page = router.query.page ? +router.query.page : undefined;

  const path = mediaType === "movie" ? "filmes" : "series";

  const previousPage = () => {
    if (page && page > 1) {
      router.push(`/${path}/${--page}`);
    }
  };
  const nextPage = () => {
    if (page) {
      router.push(`/${path}/${++page}`);
    }
  };

  return (
    <>
      <section
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
       lg:grid-cols-6 auto-cols-fr place-content-center
       place-items-center gap-x-10 gap-y-16 px-12 py-8 pt-32"
      >
        {media.map((movie, i) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </section>
      <footer className="w-full flex justify-center gap-4 mt-12">
        {page && page > 1 && (
          <ArrowLeftIcon
            onClick={previousPage}
            className=" w-6 h-6 cursor-pointer text-gray"
          />
        )}
        <div className="text-gray">Página {page}</div>
        {page && (
          <ArrowRightIcon
            onClick={nextPage}
            className="text-gray w-6 h-6 cursor-pointer"
          />
        )}
      </footer>

      {showVideoModal && selectedMovie && <VideoModal mediaType={mediaType} />}
      {showInfoModal && selectedMovie && <InfoModal mediaType={mediaType} />}
    </>
  );
}
