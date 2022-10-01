import { ethers } from "ethers";

export const isValidAddress = (address) => ethers.utils.isAddress(address);

export const isValidValue = (value) => {
  try {
    return ethers.utils.parseUnits(value, "ether");
  } catch (err) {
    return false;
  }
};

export const parseText = (textValue) => {
  const lines = textValue.split("\n");
  let updatedRecipients = [];

  lines.map((line) => {
    if (
      line.includes(" ") ||
      line.includes(",") ||
      line.includes("=") ||
      line.includes("\t")
    ) {
      const [address, value] = line.split(/[,= \t]+/);
      const validValue = isValidValue(value);
      if (isValidAddress(address) && validValue) {
        updatedRecipients.push({
          address,
          value: validValue,
        });
      }
    }
  });

  return updatedRecipients;
};
