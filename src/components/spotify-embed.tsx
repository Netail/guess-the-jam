import css from "./spotify-embed.module.css";

interface SpotifyEmbedProps {
	id: string;
}

export const SpotifyEmbed = ({ id }: SpotifyEmbedProps) => {
	return (
		<iframe
			title="Spotify preview"
			src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
			className={css.embed}
		/>
	);
};
