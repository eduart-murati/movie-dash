import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

interface Video {
  key: string;
  name: string;
  site: string;
  type: string;
}

interface UseMovieTrailerProps {
  movieId: number;
}

const useMovieTrailer = ({ movieId }: UseMovieTrailerProps) => {
  const [trailer, setTrailer] = useState<Video | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/movie/${movieId}/videos`);
        const videos = response.data.results;
        const movieTrailer = videos.find(
          (video: Video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (movieTrailer) {
          setTrailer(movieTrailer);
        }
        setLoading(false);
      } catch (err) {
        setError("Error fetching trailer");
        setLoading(false);
      }
    };

    if (movieId) {
      fetchTrailer();
    }
  }, [movieId]);

  return { trailer, loading, error };
};

export default useMovieTrailer;
