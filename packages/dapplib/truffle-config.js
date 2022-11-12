require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million provide include arch swift tourist'; 
let testAccounts = [
"0x28a102173eb1f7c6c43193fc050fd884a1053503b3fc2b9cfb60853f5abe2e8d",
"0xe1713c1afb48ee8e5ff86e36ef30d04631d3907d82c8402f17c0fd0f998e0d51",
"0xd2da994b572f8511b42866d0939e6b3cc13f66c43bc3da4c5f7eaa31c2470741",
"0x3ab164af0f397ad26eb7e69b1080a7517679fff379d554db75b9345153db4603",
"0x0ca27c48182b33d36f7ffa568f7e46f59ec852094d97553408986e767aa3c84b",
"0x7811846946b364e557618452219c73a46b19c3bfd68b564076bc9c4cd6a3e0ba",
"0x7d80477f01e9e2ff924ef1a7134ebfb142cad5a6f69885874df9468acf64e265",
"0xfba741776115a3910f0cb5c5e92e0f6f8a83ac79d1358817b51a03905f58b0a1",
"0x3699ff0f445ef79e752d0b7dbd6e91722bfa9a9745508d346ec72a30441fdb15",
"0xb545ad4c04397ee7af4dc153e4eebe1d6ec5aa18bcbc69064397807ed3456507"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

