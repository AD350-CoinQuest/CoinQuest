import { Image, StyleSheet } from "react-native";
import { Spacing } from "@/constants/theme";
import { SvgUri } from "react-native-svg";

export interface StaticIconProps {
	source: { uri: string; width: number; height: number };
	variant: (typeof StaticIconVariants.variant)[number];
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export const StaticIconVariants = {
	variant: ["small", "regular", "large"],
} as const;

export default function StaticIcon(props: StaticIconProps) {
	console.log("PROPS", props);

	return (
		<SvgUri
			style={styles.root}
			uri={props.source.uri}
			width={styles[props.variant].width}
			height={styles[props.variant].height}
		/>
	);
}

const styles = StyleSheet.create({
	root: {
		padding: 2,
	},
	large: {
		width: Spacing.six,
		height: Spacing.six,
	},
	regular: {
		width: Spacing.five,
		height: Spacing.five,
	},
	small: {
		width: Spacing.four,
		height: Spacing.four,
	},
});
