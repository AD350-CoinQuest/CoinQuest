import { StyleSheet } from "react-native-unistyles";
import { View, Text } from "react-native";
import { Image } from "react-exo/image";

import type { ViewStyle, StyleProp } from "react-native";

export interface ProfileStatProps {
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
	statLabel?: string;
	statMetricLabel?: string;
	iconSrc?: string;
}

export function ProfileStat(props: ProfileStatProps) {
	return (
		<View testID={props.testID ?? "72:197"} style={[styles.root, props.style]}>
			<Text testID="72:198" style={styles.label}>
				{props.statLabel ?? ""}
			</Text>
			<Text testID="72:202" style={styles.metric}>
				{props.statMetricLabel ?? ""}
			</Text>
			<Image url={props.iconSrc ?? ""} width={64} height={64} />
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	root: {
		width: 480,
		height: 140,
	},
	label: {
		width: 216,
		height: 49,
		flexDirection: "column",
		justifyContent: "center",
		color: "rgba(119, 119, 119, 1)",
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "300",
		letterSpacing: 2,
	},
	metric: {
		width: 216,
		height: 49,
		flexDirection: "column",
		justifyContent: "center",
		color: "rgba(1, 1, 1, 1)",
		textAlign: "center",
		textShadowColor: "rgba(1, 1, 1, 0.3019607961177826)",
		textShadowRadius: 2,
		textShadowOffset: { width: 1, height: 1 },
		fontFamily: "Inter",
		fontSize: 36,
		fontStyle: "normal",
		fontWeight: "300",
		letterSpacing: 2,
	},
}));
