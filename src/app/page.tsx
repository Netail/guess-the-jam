"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Image } from "@/components/image";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { SONGS } from "@/constants/songs";
import { State } from "@/enums/state";

import css from "./page.module.css";

const Page = () => {
	const [index, setIndex] = useState(0);
	const [state, setState] = useState(State.INITIAL);

	const current = SONGS[index];

	const handleOnNext = () => {
		if (index + 1 < SONGS.length) {
			setState(State.INITIAL);
			setIndex((prev) => prev + 1);
		} else {
			setState(State.END);
		}
	};

	const handleOnSubmit = (formData: FormData) => {
		const answer = formData.get("answer");

		if (!answer || !answer.toString().length) {
			setState(State.FAILED);
			return;
		}

		if (
			answer
				?.toString()
				.toLocaleLowerCase()
				.includes(current.title.toLocaleLowerCase()) &&
			answer
				?.toString()
				.toLocaleLowerCase()
				.includes(current.artist.toLocaleLowerCase())
		) {
			setState(State.SUCCESS);
			return;
		}

		setState(State.FAILED);
	};

	const handleGiveUp = () => {
		setState(State.REVEAL);
	};

	return (
		<div className={css.container}>
			<h1>Guess the Jam</h1>

			{current.imageSrc && <Image src={current.imageSrc} />}

			{![State.SUCCESS, State.REVEAL, State.END].includes(state) &&
				<form className={css.form} action={handleOnSubmit}>
					<input
						id="answer"
						name="answer"
						placeholder="Song title - Artist"
						className={css.input}
					/>
					<Button type="submit">Guess</Button>
				</form>
			}

			{state === State.FAILED && (
				<>
					<hr className={css.hr} />
					<p>That's sadly not the song</p>
					<Button type="button" variant="danger" onClick={handleGiveUp}>
						Give up...
					</Button>
				</>
			)}

			{[State.SUCCESS, State.REVEAL].includes(state) && (
				<>
					<hr className={css.hr} />
					<h3>
						{state === State.SUCCESS ? "Correct! " : ""}It was {current.title}{" "}
						by {current.artist}
					</h3>
					<SpotifyEmbed id={current.spotifyId} />
					<Button
						type="button"
						variant={state === State.SUCCESS ? "success" : "neutral"}
						onClick={handleOnNext}
					>
						Next song
					</Button>
				</>
			)}

			{state === State.END && (
				<>
					<hr className={css.hr} />
					<p>That's it, thanks for playing!</p>
				</>
			)}
		</div>
	);
};

export default Page;
