import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SupabaseService } from "@/services/supabaseService";
import { SvgUri } from "react-native-svg";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import IconDefaultProfile from "@/assets/images/icon-profile-default.svg";
import IconEdit from "@/assets/images/icon-edit.svg";
import { Rowdies_400Regular } from "@expo-google-fonts/rowdies/400Regular";
import { Roboto_400Regular } from "@expo-google-fonts/roboto/400Regular";
import { useFonts } from "@expo-google-fonts/rowdies/useFonts";

interface ProfileData {
	name: string;
	email: string;
	achievements: {
		goalsAchieved: {
			iconUri: string;
			label: string;
			metric: string;
		};
		moneySaved: {
			iconUri: string;
			label: string;
			metric: string;
		};
		moneyInvested: {
			iconUri: string;
			label: string;
			metric: string;
		};
	};
}

interface ProfileHeaderProps {
	name: string;
	email: string;
}

export default function ProfileScreen() {
	useFonts({
		Rowdies_400Regular,
		Roboto_400Regular,
	});

	const [profileData, setProfileData] = useState<ProfileData>({
		name: "test",
		email: "test@abc.com",
		achievements: {
			goalsAchieved: {
				iconUri: "",
				label: "",
				metric: "",
			},
			moneySaved: {
				iconUri: "",
				label: "",
				metric: "",
			},
			moneyInvested: {
				iconUri: "",
				label: "",
				metric: "",
			},
		},
	});

	useEffect(() => {
		const loadedData = sessionStorage.getItem("profile");
		if (!loadedData) {
			return;
		}
		const loadedJSON = JSON.parse(loadedData);
		if (!loadedJSON) {
			return;
		}

		setProfileData({
			...profileData,
			name: loadedJSON["username"],
			email: loadedJSON["email"],
		});
	}, []);

	return (
		<View style={styles.container}>
			<ProfileHeader name={profileData.name} email={profileData.email} />
		</View>
	);
}

function ProfileHeader(props: ProfileHeaderProps) {
	return (
		<View style={styles.header}>
			<View style={styles.topSection}>
				<View style={styles.profilePic}>
					<SvgUri
						style={styles.centeredIcon}
						uri={IconDefaultProfile.uri}
						width={IconDefaultProfile.width}
						height={IconDefaultProfile.height}
					/>
				</View>
				<Pressable style={styles.editButton}>
					<SvgUri
						style={styles.centeredIcon}
						uri={IconEdit.uri}
						width={IconEdit.width}
						height={IconEdit.height}
					/>
				</Pressable>
			</View>
			<View style={styles.bottomSection}>
				<Text style={styles.userNameText}>{props.name}</Text>
				<Text style={styles.emailText}>{props.email}</Text>
			</View>
		</View>
	);
}

function ProfileMenu() {
	<View></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
		height: "100%",
		backgroundColor: Colors.background,
	},
	header: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
		width: 480,
		height: 160,
	},
	menu: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	topSection: {
		width: "auto",
		height: 160,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		overflow: "hidden",
		left: 60,
		top: 40,
		zIndex: 100,
		gap: 40,
	},
	bottomSection: {
		width: "100%",
		height: 160,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
		overflow: "hidden",
		backgroundColor: Colors.primary,
		gap: 10,
		paddingBottom: 30,
		borderRadius: 8,
	},
	profilePic: {
		width: 155,
		height: 155,
		backgroundColor: Colors.surface,
		borderColor: Colors.secondary,
		borderRadius: 8,
		borderWidth: 3,
	},
	editButton: {
		display: "flex",
		width: 72,
		height: 72,
		borderWidth: 2,
		backgroundColor: Colors.background,
		borderColor: Colors.secondary,
		borderRadius: "50%",
	},
	menuButton: {
		backgroundColor: Colors.primary,
		borderColor: Colors.secondary,
	},
	centeredIcon: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "auto",
		marginBottom: "auto",
	},
	userNameText: {
		textAlign: "center",
		fontFamily: Fonts.h1,
		fontSize: Spacing.five,
		color: Colors.secondary,
	},
	emailText: {
		textAlign: "center",
		fontFamily: Fonts.body,
		fontSize: Spacing.four,
		color: Colors.surface,
	},
});
