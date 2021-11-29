import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { LeadRecord } from "../../types/interfaces";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: "row",
    wordWrap: "break-word",
  },
  infoColumnLeft: {
    fontSize: 11,
    flexDirection: "column",
    maxWidth: "50%",
    padding: 5,
  },
  infoColumnRight: {
    fontSize: 11,
    flexDirection: "column",
    padding: 5,
    marginLeft: "auto",
  },
  paddedText: {
    marginBottom: "5px"
  }
});

interface QuoteHeaderProps {
  leadRecord: LeadRecord;
}

const quoteDate = new Date().toLocaleDateString()

export default function QuoteHeader({ leadRecord }: QuoteHeaderProps) {
  return (
    <>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumnRight}>
          <Text style={styles.title}>QUOTE</Text>
          <Text>Reference: {leadRecord?.fields["Name"]} </Text>
          <Text>Date: {quoteDate} </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumnLeft}>
          <Text style={styles.paddedText}>
            Client Reference: {leadRecord.fields["Email Reference"]}
          </Text>
          <Text style={styles.paddedText}>
            To: {leadRecord.fields["Contact Concat"]}
          </Text>
          <Text style={styles.paddedText}>
            Address: {leadRecord.fields["Company Address"]?.[0]}
          </Text>
        </View>
      </View>
    </>
  );
}
