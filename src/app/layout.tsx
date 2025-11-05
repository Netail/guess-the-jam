import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
	title: "Guess the Jam",
	description: "Guess the song based on an AI generated image",
	icons: "https://netail.dev/favicon.ico",
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
