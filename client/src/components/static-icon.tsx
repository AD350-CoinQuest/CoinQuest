import { StyleSheet } from "react-native-unistyles";
import { View, Image } from "react-native";
import { Spacing } from "@/constants/theme";

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
			<Image
				source={{ uri: props.src }}
				width={Spacing.six}
				height={Spacing.six}
			/>
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	root: {
		variants: {
			size: {
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
			},
		},
	},
}));
