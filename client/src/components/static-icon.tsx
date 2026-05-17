import { StyleSheet } from "react-native-unistyles";
import { View, Image } from "react-native";

import type { ViewStyle, StyleProp } from "react-native";

export interface StaticIconProps {
	src: string;
	variant: (typeof StaticIconVariants.variant)[number];
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export const StaticIconVariants = {
	variant: ["small", "regular", "large"],
} as const;

export default function StaticIcon(props: StaticIconProps) {
	styles.useVariants({
		size: props.variant,
	});

	return (
		<View testID={props.testID ?? "35:94"} style={styles.root}>
			<Image source={{ uri: props.src }} />
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	root: {
		width: 32,
		height: 32,
		variants: {
			size: {
				large: {
					width: 40,
					height: 40,
				},
				regular: {
					width: 28.6,
					height: 28.6,
				},
				small: {
					width: 26,
					height: 26,
				},
			},
		},
	},
}));
