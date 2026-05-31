import { StyleSheet } from "react-native-unistyles";
import { View, Text, Image } from "react-native";

import type { ViewStyle, StyleProp } from "react-native";
import { Colors } from "@/constants/theme";

export interface AchievementIconProps {
	iconSrc: string;
	labelString: string;
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export function AchievementIcon(props: AchievementIconProps) {
	return (
		<View testID={props.testID ?? "267:722"} style={[styles.root, props.style]}>
			<Text testID="64:203" style={styles.labelText}>
				{props.labelString}
			</Text>
			<Image src={props.iconSrc} width={104} height={104} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		width: 146,
		height: 140,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		rowGap: 5,
		columnGap: 5,
	},
	labelText: {
		width: 146,
		height: 31,
		flexDirection: "column",
		justifyContent: "center",
		flexShrink: 0,
		color: Colors.surface,
		textAlign: "center",
		fontFamily: "Roboto",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "400",
	},
});
