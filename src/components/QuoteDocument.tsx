import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { LeadRecord } from "../types/interfaces";

import logo from "../media/Powerflo Logo.png";

type DocumentProps = {
  record: LeadRecord;
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  logo: {
    height: "auto",
    width: 100,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
  },
  body: {},
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
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  paddedText: {
    marginBottom: "5px"
  }
});

const quoteDate = new Date(Date.now());

// Create Document Component
const TestDocument = ({ record }: DocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={styles.logo} />


        <View style={styles.infoContainer}>
          <View style={styles.infoColumnRight}>
            <Text style={styles.title}>QUOTE</Text>
            <Text>Reference: {record?.fields["Name"]} </Text>
            <Text>Date: {quoteDate.toLocaleDateString()} </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoColumnLeft}>
            <Text style={styles.paddedText}>Client Reference: {record.fields["Email Reference"]}</Text>
            <Text style={styles.paddedText}>To: {record.fields["Contact Concat"]}</Text>
            <Text style={styles.paddedText}>Address: {record.fields["Company Address"]?.[0]}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TestDocument;
