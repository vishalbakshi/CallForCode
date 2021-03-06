import React from "react";
import Header from "../Header";
import GeneralInformation from "../GeneralInformation";
import AdditionalContact from "../AdditionalContact";
import CashGrantInformation from "../CashGrantInformation";
import Notes from "../Notes";
import PhotoID from "../PhotoID";
import AddressProof from "../AddressProof";
import HouseDamage from "../HouseDamage";
import Receipts from "../Receipts";
import Agencies from "../Agencies";
import Signature from "../Signature";

const StartPage = () => {
  return (
    <div>
      <Header />
      <GeneralInformation />
      <AdditionalContact />
      <CashGrantInformation />
      <Notes />
      <PhotoID />
      <AddressProof />
      <HouseDamage />
      <Receipts />
      <Agencies />
      <Signature />
      <button name="preview" type="submit">Preview</button>
    </div>
  );
};

export default StartPage;
