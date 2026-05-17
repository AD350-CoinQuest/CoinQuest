import { StyleSheet } from "react-native-unistyles";
import { View, Text } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";
import StaticIcon from "./static-icon";
import { Colors } from "@/constants/theme";

export interface DivQuestNodeProps {
	iconSrc: string;
	label: string;
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export function DivQuestNode(props: DivQuestNodeProps) {
	return (
		<View testID={props.testID ?? "264:440"} style={[styles.root, props.style]}>
			<StaticIcon src={props.iconSrc} testID="35:163" variant="$2" />
			<Text testID="35:165" style={styles.label}>
				{props.label}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		width: 61,
		height: 61,
		paddingTop: 3,
		paddingLeft: 3,
		paddingBottom: 3,
		paddingRight: 3,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "black",
		backgroundColor: Colors.surface,
		shadowColor: "rgba(0, 0, 0, 1)",
		shadowRadius: 0,
		shadowOffset: { width: 4, height: 4 },
	},
	label: {
		color: Colors.background,
		textAlign: "center",
		fontFamily: "Roboto",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: 700,
		textTransform: "uppercase",
	},
});
