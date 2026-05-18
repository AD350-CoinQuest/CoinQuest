import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "@expo-google-fonts/rowdies/useFonts";
import { Rowdies_400Regular } from "@expo-google-fonts/rowdies/400Regular";
import { ThemedView } from "@/components/themed-view";
import { DivQuestNode } from "@/components/quest-node";
import {
	BottomTabInset,
	Colors,
	MaxContentWidth,
	Spacing,
} from "@/constants/theme";
import IconIncome from "@/assets/images/icon-income.svg";
import IconBudget from "@/assets/images/icon-budget.svg";
import IconReward from "@/assets/images/icon-reward.svg";
import IconAddExpense from "@/assets/images/icon-addexpense.svg";

export default function HomeScreen() {
	const [CustomFonts] = useFonts({
		Rowdies_400Regular,
	});

	return (
		<ThemedView style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				<ThemedView style={styles.heroSection}>
					<QuestMap />
				</ThemedView>

				{/* {Platform.OS === "web" && <WebBadge />} */}
			</SafeAreaView>
		</ThemedView>
	);
}

function QuestMap() {
	return (
		<View>
			<DivQuestNode iconSrc={"@/images/icon-income.svg"} label="Income" />
			{/* <DivQuestNode iconSrc={IconBudget} label="Budget" />
			<DivQuestNode iconSrc={IconReward} label="Reward" />
			<DivQuestNode iconSrc={IconAddExpense} label="Add Expense" /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: Colors.background,
	},
	safeArea: {
		flex: 1,
		alignItems: "center",
		gap: Spacing.three,
		paddingBottom: BottomTabInset + Spacing.three,
		maxWidth: MaxContentWidth,
	},
	heroSection: {
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
		flex: 1,
		gap: Spacing.four,
		paddingTop: Spacing.six,
		backgroundColor: Colors.background,
	},
	title: {
		textAlign: "center",
	},
	code: {
		textTransform: "uppercase",
	},
	stepContainer: {
		gap: Spacing.three,
		alignSelf: "stretch",
		paddingHorizontal: Spacing.three,
		paddingVertical: Spacing.four,
		borderRadius: Spacing.four,
	},
});
