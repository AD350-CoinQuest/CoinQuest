import { StyleSheet, View, Text } from "react-native";
import { Colors, Fonts, Spacing } from "@/constants/theme";

export default function Header(props: { label: string }) {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{props.label}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		position: "sticky",
		height: Spacing.six,
		backgroundColor: Colors.primary,
		color: Colors.secondary,
		borderBottomWidth: 1,
		borderBottomColor: Colors.secondary,
	},
	headerText: {
		paddingTop: Spacing.two,
		paddingLeft: Spacing.five,
		fontFamily: Fonts.h1,
		fontSize: Spacing.five,
		color: Colors.secondary,
	},
});
