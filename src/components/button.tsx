import clsx from "clsx";
import type { ComponentProps, FC } from "react";

import css from "./button.module.css";

export const Button: FC<
	ComponentProps<"button"> & { variant?: "neutral" | "success" | "danger" }
> = ({ variant = "neutral", className, ...restProps }) => {
	const classes = clsx(
		css.button,
		variant === "neutral" && css.neutral,
		variant === "success" && css.success,
		variant === "danger" && css.danger,
		className,
	);

	return <button className={classes} {...restProps} />;
};
