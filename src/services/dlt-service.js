import Web3Utils from 'web3-utils';

function isAddress(address) {
  return Web3Utils.isAddress(address);
}

function isPrivateKey(privateKey) {
  return Web3Utils.isHexStrict(privateKey) && privateKey.length === 66
}

export {
  isAddress,
  isPrivateKey
}
