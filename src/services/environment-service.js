function getContractAddress() {
  return process.env.REACT_APP_CONTRACT_ADDRESS;
}

function getFromAddress() {
  return process.env.REACT_APP_FROM_ADDRESS;
}

function getNodeUrl() {
  return process.env.REACT_APP_NODE_URL;
}

function getUpdateIntervalMs() {
  return process.env.REACT_APP_UPDATE_INTERVAL_MS;
}

export {
  getContractAddress,
  getFromAddress,
  getNodeUrl,
  getUpdateIntervalMs,
};
