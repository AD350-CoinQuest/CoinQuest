import { StyleSheet } from "react-native-unistyles";
import { View, Text } from "react-native";

import type { ViewStyle, StyleProp } from "react-native";
import { Colors } from "@/constants/theme";

export interface TransactionItemProps {
	dateString: string;
	merchantString: string;
	amountString: string;
	/** Used to override the default root style. */
	style?: StyleProp<ViewStyle>;
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export function TransactionItem(props: TransactionItemProps) {
	return (
		<View testID={props.testID ?? "267:504"} style={[styles.root, props.style]}>
			<View testID="39:371" style={styles.divTransactionInfo}>
				<View testID="39:372" style={styles.spanDate}>
					<Text testID="39:373" style={styles.dateText}>
						{props.dateString}
					</Text>
				</View>
				<View testID="39:374" style={styles.spanMerchant}>
					<Text testID="39:375" style={styles.merchantText}>
						{props.merchantString}
					</Text>
				</View>
			</View>
			<View testID="39:376" style={styles.spanAmount}>
				<Text testID="39:377" style={styles.amountText}>
					{props.amountString}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		width: 560,
		paddingTop: 10,
		paddingLeft: 0,
		paddingBottom: 11,
		paddingRight: 0,
		alignItems: "center",
		gap: 375,
		borderBottomWidth: 1,
	},
	dateText: {
		color: Colors.surface,
		fontFamily: "Roboto",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: 700,
	},
	divTransactionInfo: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	spanDate: {
		flexDirection: "column",
		alignItems: "flex-start",
		alignSelf: "stretch",
	},
	merchantText: {
		color: Colors.highlight,
		fontFamily: "Roboto",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: 700,
		textTransform: "uppercase",
	},
	spanMerchant: {
		flexDirection: "column",
		alignItems: "flex-start",
		alignSelf: "stretch",
	},
	amountText: {
		color: Colors.highlight,
		fontFamily: "Roboto",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: 700,
	},
	spanAmount: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
});
