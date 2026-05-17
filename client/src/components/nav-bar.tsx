import { StyleSheet } from "react-native-unistyles";
import { View, Text } from "react-native";

import StaticIcon from "./static-icon";

import type { ViewStyle, StyleProp } from "react-native";
import { Colors } from "@/constants/theme";

export interface NavNavbarProps {
	navTransactions: string;
	variant: (typeof NavNavbarVariants.variant)[number];
	/** Used to locate this view in end-to-end tests. */
	testID?: string;
}

export const NavNavbarVariants = {
	variant: ["NavProfile", "NavHome", "NavTransactions", "NavAchievements"],
} as const;

export function NavNavbar(props: NavNavbarProps) {
	// styles.useVariants({
	// 	size: props.variant,
	// });

	return (
		<View testID={props.testID ?? "137:264"} style={styles.root}>
			<View testID="115:513" style={styles.divNavItem}>
				<View testID="115:514" style={styles.margin}>
					<View testID="115:515" style={styles.divIconBox}>
						<StaticIcon
							src={require("@/assets/images/icon-home.svg")}
							testID="115:516"
							variant="small"
						/>
					</View>
				</View>
				<View testID="115:517" style={styles.margin2}>
					<Text testID="115:518" style={styles.home}>
						HOME
					</Text>
				</View>
			</View>
			<View testID="115:519" style={styles.divNavItem2}>
				<View testID="115:520" style={styles.margin3}>
					<View testID="115:521" style={styles.divIconBox2}>
						<StaticIcon
							src={require("@/assets/images/icon-transactions.svg")}
							testID="115:522"
							variant="small"
						/>
					</View>
				</View>
				<View testID="115:523" style={styles.margin4}>
					<Text testID="137:444" style={styles.transactions}>
						TRANSACTIONS
					</Text>
				</View>
			</View>
			<View testID="115:525" style={styles.divNavItem3}>
				<View testID="115:526" style={styles.margin5}>
					<View testID="115:527" style={styles.divIconBox3}>
						<StaticIcon
							src={require("@/assets/images/icon-achievements.svg")}
							testID="115:528"
							variant="small"
						/>
					</View>
				</View>
				<View testID="115:529" style={styles.margin6}>
					<Text testID="115:530" style={styles.achievements}>
						ACHIEVEMENTS
					</Text>
				</View>
			</View>
			<View testID="115:531" style={styles.divNavItem4}>
				<View testID="115:532" style={styles.margin7}>
					<View testID="115:533" style={styles.divIconBox4}>
						<StaticIcon
							src={require("@/assets/images/icon-profile.svg")}
							testID="115:534"
							variant="small"
						/>
					</View>
				</View>
				<View testID="115:535" style={styles.margin8}>
					<Text testID="115:536" style={styles.profile}>
						PROFILE
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		width: 641,
		height: 99,
		justifyContent: "center",
		alignItems: "flex-start",
		position: "absolute",
		left: 20,
		top: 20,
		borderTop: 1,
		backgroundColor: Colors.primary,
	},
	divNavItem: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 0,
		alignSelf: "stretch",
	},
	margin: {
		width: 48,
		height: 52,
		paddingBottom: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divIconBox: {
		flexDirection: "row",
		width: 64,
		height: 64,
		paddingTop: 5,
		paddingLeft: 5,
		paddingBottom: 5,
		paddingRight: 5,
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
		borderWidth: 5,
		borderStyle: "solid",
		borderColor: Colors.secondary,
		variants: {
			selected: {
				NavTransactions: {
					width: 48,
					height: 48,
					paddingTop: 2,
					paddingLeft: 2,
					paddingBottom: 2,
					paddingRight: 2,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderWidth: 2,
					backgroundColor: Colors.primary,
				},
				NavAchievements: {
					width: 48,
					height: 48,
					paddingTop: 2,
					paddingLeft: 2,
					paddingBottom: 2,
					paddingRight: 2,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderWidth: 2,
					backgroundColor: Colors.primary,
				},
			},
		},
	},
	divIconBoxProperty1NavAchievements: {
		width: 48,
		height: 48,
		paddingTop: 2,
		paddingLeft: 2,
		paddingBottom: 2,
		paddingRight: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderWidth: 2,
		backgroundColor: Colors.primary,
	},
	divIconBoxProperty1NavProfile: {
		width: 48,
		height: 48,
		paddingTop: 2,
		paddingLeft: 2,
		paddingBottom: 2,
		paddingRight: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderWidth: 2,
		backgroundColor: Colors.primary,
	},
	home: {
		color: Colors.secondary,
		fontFamily: "Roboto",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "700",
	},
	homeProperty1NavTransactions: {
		textAlign: "center",
		fontWeight: "400",
	},
	homeProperty1NavAchievements: {
		textAlign: "center",
		fontWeight: "400",
	},
	homeProperty1NavProfile: {
		textAlign: "center",
		fontWeight: "400",
	},
	margin2: {
		paddingTop: 4,
		width: 56,
		height: 60,
		paddingBottom: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divNavItem2: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 0,
		alignSelf: "stretch",
	},
	margin3: {
		width: 56,
		height: 60,
		paddingTop: 4,
		paddingBottom: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divIconBox2: {
		flexDirection: "row",
		width: 56,
		height: 56,
		paddingTop: 1,
		paddingLeft: 1,
		paddingBottom: 1,
		paddingRight: 1,
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: Colors.secondary,
	},
	divIconBox2Property1NavTransactions: {
		borderWidth: 5,
	},
	transactions: {
		color: Colors.secondary,
		fontFamily: "Roboto",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "400",
	},
	transactionsProperty1NavTransactions: {
		fontWeight: "700",
	},
	margin4: {
		width: 56,
		height: 60,
		paddingBottom: 4,
		paddingTop: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divNavItem3: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 0,
		alignSelf: "stretch",
	},
	margin5: {
		width: 56,
		height: 60,
		paddingTop: 4,
		paddingBottom: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divIconBox3: {
		flexDirection: "row",
		width: 56,
		height: 56,
		paddingTop: 1,
		paddingLeft: 1,
		paddingBottom: 1,
		paddingRight: 1,
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: Colors.secondary,
	},
	divIconBox3Property1NavAchievements: {
		borderWidth: 5,
	},
	achievements: {
		color: Colors.secondary,
		fontFamily: "Roboto",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "400",
	},
	achievementsProperty1NavAchievements: {
		fontWeight: "700",
	},
	margin6: {
		width: 56,
		height: 60,
		paddingBottom: 4,
		paddingTop: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divNavItem4: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 0,
		alignSelf: "stretch",
	},
	margin7: {
		width: 56,
		height: 60,
		paddingTop: 4,
		paddingBottom: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	divIconBox4: {
		flexDirection: "row",
		width: 56,
		height: 56,
		paddingTop: 1,
		paddingLeft: 1,
		paddingBottom: 1,
		paddingRight: 1,
		justifyContent: "center",
		alignItems: "center",
		flexShrink: 0,
		borderBottomLeftRadius: 14,
		borderBottomRightRadius: 14,
		borderTopLeftRadius: 14,
		borderTopRightRadius: 14,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: Colors.secondary,
	},
	divIconBox4Property1NavProfile: {
		borderWidth: 5,
	},
	profile: {
		color: Colors.secondary,
		fontFamily: "Roboto",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "400",
	},
	profileProperty1NavProfile: {
		fontWeight: "700",
	},
	margin8: {
		paddingTop: 4,
		flexDirection: "column",
		alignItems: "flex-start",
	},
});
