import { StyleSheet } from "react-native-unistyles";
import { View } from "react-native";
import { Image } from "react-exo/image";
import type { ViewStyle, StyleProp } from "react-native";

export interface ProfileIconProps {
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
	iconSrc?: string;
}

export function ProfileIcon(props: ProfileIconProps) {
	return (
		<View testID={props.testID ?? "72:271"} style={[styles.root, props.style]}>
			<View testID="72:99" style={styles.bg} />
			<Image url={props.iconSrc ?? ""} width={120} height={120} />
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	root: {
		width: 155,
		height: 155,
	},
	bg: {
		width: 155,
		height: 155,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderWidth: 3,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
}));
