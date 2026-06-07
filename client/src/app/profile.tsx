import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SupabaseService } from "@/services/supabaseService";
import { SvgUri } from "react-native-svg";
import { Colors } from "@/constants/theme";

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
	iconButton: {
		uri: string;
		width: number;
		height: number;
	};
}

export default function ProfileScreen() {
	const [profileData, setProfileData] = useState<ProfileData>({
		name: "",
		email: "",
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
	const headerProps = {
		iconButton: { uri: "", width: 0, height: 0 },
	};

	useEffect(() => {
		try {
			SupabaseService.getProfileById("test").then((res) => {
				if (!res.data) {
					throw Error("Null data from response");
				}
				const data = JSON.parse(res.data);
				const profile = {
					name: data.username,
					email: data.email,
				} as ProfileData;
				setProfileData(profile);
			});
		} catch (e) {
			console.error(e);
		}
	}, []);

	return (
		<View style={styles.container}>
			<ProfileHeader
				name={profileData.name}
				email={profileData.email}
				iconButton={headerProps.iconButton}
			/>
		</View>
	);
}

function ProfileHeader(props: ProfileHeaderProps) {
	return (
		<View>
			<SvgUri
				uri={props.iconButton.uri}
				width={props.iconButton.width}
				height={props.iconButton.height}
			/>
			<View style={styles.container}>
				<Text>{props.name}</Text>
				<Text>{props.email}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		backgroundColor: Colors.primary,
		borderColor: Colors.secondary,
		padding: 24,
		width: 480,
		height: 320,
	},
});
