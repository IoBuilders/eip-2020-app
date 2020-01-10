function getContractAddress() {
  return process.env.REACT_APP_CONTRACT_ADDRESS;
}

function getNodeUrl() {
  return process.env.REACT_APP_NODE_URL;
}

function getUpdateIntervalMs() {
  return process.env.REACT_APP_UPDATE_INTERVAL_MS;
}

function getDecimals() {
  return Number.parseInt(process.env.REACT_APP_DECIMALS);
}

export {
  getContractAddress,
  getNodeUrl,
  getUpdateIntervalMs,
  getDecimals,
};
