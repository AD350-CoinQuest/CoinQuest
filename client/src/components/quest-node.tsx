import { View, Text, StyleSheet } from "react-native";
import StaticIcon from "./static-icon";
import { Colors, Fonts, Spacing } from "@/constants/theme";

export interface DivQuestNodeProps {
	style: any;
	iconSrc: { uri: string; width: number; height: number };
	label: string;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export function DivQuestNode(props: DivQuestNodeProps) {
	console.log(styles.root);
	return (
		<View
			testID={props.testID ?? "264:440"}
			style={{ ...styles, ...styles.root }}
		>
			<StaticIcon source={props.iconSrc} testID="35:163" variant="regular" />
			<Text testID="35:165" style={styles.label}>
				{props.label}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: Colors.surface,
		width: Spacing.six,
		height: Spacing.six,
		padding: 3,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "black",
		shadowColor: "black",
		shadowRadius: 0,
		shadowOffset: { width: 4, height: 4 },
	},
	label: {
		textAlign: "center",
		fontFamily: Fonts.body,
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: 700,
		textTransform: "uppercase",
	},
});
