import { StyleSheet, View, Text } from "react-native";

import type { ViewStyle, StyleProp } from "react-native";

export interface ButtonProps {
	label: string;
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export function Button(props: ButtonProps) {
	return (
		<View testID={props.testID ?? "72:123"} style={[styles.root, props.style]}>
			<View testID="72:122" style={styles.background} />
			<Text testID="72:124" style={styles.buttonLabel}>
				{props.label}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		width: 480,
		height: 80,
	},
	background: {
		width: 480,
		height: 80,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "rgba(1, 1, 1, 1)",
		backgroundColor: "rgba(253, 253, 253, 1)",
	},
	buttonLabel: {
		color: "rgba(1, 1, 1, 1)",
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "300",
		letterSpacing: 2,
	},
});
