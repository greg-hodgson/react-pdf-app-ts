import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: "11px",
    borderBottom: "1px",
  },
  item: {
    width: "4%",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    paddingLeft: 5,
  },
  quantity: {
    width: "7%",
    borderRightWidth: "1px",
    paddingLeft: "5px",
  },
  description: {
    width: "45%",
    borderRightWidth: "1px",
    paddingLeft: "5px",
  },
  unitPrice: {
    width: "15%",
    borderRightWidth: "1px",
    paddingLeft: "5px",
  },
  extendedPrice: {
    width: "15%",
    borderRightWidth: "1px",
    paddingLeft: "5px",
  },
  delivery: {
    width: "14%",
    borderRightWidth: "1px",
    paddingLeft: "5px",
  },
});

export default function QuoteTableHeader() {
  return (
    <View style={styles.headerRow} fixed>
      <Text style={styles.item}>Item</Text>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.unitPrice}>Unit Price</Text>
      <Text style={styles.quantity}>Quantity</Text>
      <Text style={styles.extendedPrice}>Extended Price</Text>
      <Text style={styles.delivery}>Delivery</Text>
    </View>
  );
}
