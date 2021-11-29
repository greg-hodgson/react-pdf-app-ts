import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default function PageNumber() {
  return (
    <Text
      style={styles.pageNumber}
      render={({ pageNumber }) => `Page ${pageNumber}`}
      fixed
    />
  );
}
