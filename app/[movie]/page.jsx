import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `http://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );

  return (
    <div>
      <div>
        <h1 className="text-2xl">{res.title}</h1>
        <h1 className="text-lg">{res.release_date}</h1>
        <h1>Runtime: {res.runtime} minute</h1>
        <h2 className="bg-cyan-500 inline-block my-2 py-2 px-4 rounded-md text-white">
          {res.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
}
