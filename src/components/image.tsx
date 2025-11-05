"use client";

import type { ComponentProps } from "react";

import css from "./image.module.css";

export const Image = (props: ComponentProps<"img">) => {
	return <img className={css.image} alt="" {...props} />;
};
