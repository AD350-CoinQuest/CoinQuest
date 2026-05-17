import { useVariants } from "react-exo/utils";
import { StyleSheet } from "react-native-unistyles";
import { View, Image } from "react-native";

import type { ViewStyle, StyleProp } from "react-native";

export interface StaticIconProps {
	src: string;
	variant: (typeof StaticIconVariants.variant)[number];
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export const StaticIconVariants = {
	variant: ["$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9"],
} as const;

export default function StaticIcon(props: StaticIconProps) {
	const { variant } = props;
	const { vstyles } = useVariants(StaticIconVariants, { variant }, styles);

	return (
		<View
			testID={props.testID ?? "35:94"}
			style={[vstyles.root(), props.style]}
		>
			<Image source={{ uri: props.src }} />
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	root: {
		width: 32,
		height: 32,
	},
	rootVariant5: {
		width: 40,
		height: 40,
	},
	rootVariant6: {
		width: 28.6,
		height: 28.6,
	},
	rootVariant7: {
		width: 26,
		height: 26,
	},
	rootVariant8: {
		width: 26,
		height: 26,
	},
	rootVariant9: {
		width: 26,
		height: 26,
	},
}));
