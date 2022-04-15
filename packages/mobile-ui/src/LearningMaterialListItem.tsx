import { View } from "dripsy";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LearningMateriaListItem: React.FC<{
  onPress: () => void;
  heading: string;
  body: string;
  icon: any;
  leftIcon: any;
}> = ({ onPress, heading, body, icon, leftIcon }) => {
  return (
    <TouchableOpacity
      style={[styles.listItem, styles.learning]}
      onPress={onPress}
    >
      {React.cloneElement(icon, { width: 24, height: 24, stroke: "#000000" })}
      <View style={styles.listItemTextContainer}>
        <Text style={[styles.textMd]}>{heading}</Text>
        <Text style={[styles.text2XS, styles.textSubtle]}>{body}</Text>
      </View>
      {React.cloneElement(leftIcon, {
        width: 18,
        height: 18,
        stroke: "#000000",
      })}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
  },
  codeBlock: {
    backgroundColor: "rgba(55, 65, 81, 1)",
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: "#ffffff",
    fontFamily: "Courier New",
    marginVertical: 4,
  },
  comment: {
    color: "#cccccc",
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: "300",
  },
  textBold: {
    fontWeight: "500",
  },
  textCenter: {
    textAlign: "center",
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: "#6b7280",
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: "white",
    borderRadius: 24,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: "500",
  },
  hero: {
    borderRadius: 12,
    backgroundColor: "#143055",
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: "row",
  },
  heroTitleText: {
    color: "#ffffff",
    marginLeft: 12,
  },
  heroText: {
    color: "#ffffff",
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    borderRadius: 8,
    width: "50%",
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: "center",
  },
});

export default LearningMateriaListItem;
