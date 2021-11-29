import {
  Page,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { LeadRecord, LineItemRecord } from "../../types/interfaces";

import logo from "../../media/Powerflo Logo.png";
import QuoteHeader from "./QuoteHeader";
import QuoteTable from "./QuoteTable";
// import PageNumber from "./PageNumber";
import QuoteTableHeader from "./QuoteTableHeader";

type DocumentProps = {
  leadRecord: LeadRecord;
  lineItems: LineItemRecord[];
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 65,
  },
  logo: {
    height: "auto",
    width: 100,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
  },
  table: {
    fontSize: 11,
    borderStyle: "solid",
    margin: "5px",
    flexDirection: "row",
  },
  tableHeader: {
    fontWeight: "bold",
  },

  tableColumn: {
    flexDirection: "column",
  },
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

// Create Document Component
const QuoteDocument = ({ leadRecord, lineItems }: DocumentProps) => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page} wrap>
        <Image src={logo} style={styles.logo} />
        <QuoteHeader leadRecord={leadRecord} />
        <QuoteTableHeader />
        <QuoteTable lineItems={lineItems} currency={leadRecord.fields["Currency"]} />
        {/* <PageNumber /> */}
      </Page>
    </Document>
  );
};

export default QuoteDocument;
