import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { Record } from "../types/interfaces";

import logo from "../media/Powerflo Logo.png";

type DocumentProps = {
  record?: Record | null;
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
    width: 84,
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
  },
  body: {
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoColumn: {
    fontSize: 11,
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

});

// Create Document Component
const TestDocument = ({ record }: DocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={styles.logo} />
        <Text></Text>
        <View style={styles.body}>
          <View style={styles.infoContainer}>
            <View style={styles.infoColumn}>
              <Text>Reference: {record ? record.fields["Name"] : null}</Text>
              <Text>To: {record ? record.fields["Contact Concat"] : null}</Text>
              <Text>From: Greg Hodgson</Text>
            </View>
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
