import { Colors } from "@/constants/theme";
import { StyleSheet, StyleProp, View, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

export interface IconButtonProps {
	iconUri: string;
	variant: (typeof IconButtonVariants.variant)[number];
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

export const IconButtonVariants = {
	variant: ["small", "regular", "large"],
} as const;

const iconSizes = {
	small: { width: 40, height: 40 },
	regular: { width: 80, height: 80 },
	large: { width: 120, height: 120 },
} as const;

export function IconButton(props: IconButtonProps) {
	const iconSize = iconSizes[props.variant];

	return (
		<View style={[styles.root, props.style]}>
			<SvgUri
				uri={props.iconUri}
				width={iconSize.width}
				height={iconSize.height}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: Colors.primary,
		borderColor: Colors.secondary,
		borderWidth: 1,
		borderRadius: 20,
	},
});
