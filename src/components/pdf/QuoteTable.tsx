import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

import { LineItemRecord } from "../../types/interfaces";

interface QuoteTableProps {
  lineItems: LineItemRecord[];
  currency: string;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    fontSize: "11px",
    borderBottomWidth: "1px",
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

// function currencyConvert (currency: string) {
  
// }


export default function QuoteTable({ lineItems, currency }: QuoteTableProps) {
  // const 


  const items: React.ReactNode = lineItems.map((record) => (
    <View key={record.id} style={styles.row} wrap={false}>
      <Text style={styles.item}>{record.fields["Item Number"]}</Text>
      <Text style={styles.description}>{record.fields["Description"]}</Text>
      <Text style={styles.unitPrice}>{record.fields["Unit Price"]}</Text>
      <Text style={styles.quantity}>{record.fields["Quantity"]}</Text>
      <Text style={styles.extendedPrice}>
        {record.fields["Extended Price"]}
      </Text>
      <Text style={styles.delivery}>{record.fields["Delivery"]}</Text>
    </View>
  ));
  return (
    <Fragment>
      {items}
    </Fragment>
  );
}
