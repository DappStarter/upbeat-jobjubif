require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift release rural essence install battle flower gauge'; 
let testAccounts = [
"0x7793fdaa15c520c289f4d4ba6671bbf0cecfb8ab847c858a408f99a1e1ec1531",
"0xc952ca31f4d745d18a5c17f08708286fdd5cdaaeee21ce0b56f86a340e36a0bd",
"0x187b01732b9f4a04f83a6950e6dcd3203704c0cae9200cea69e3fa3977e563a9",
"0x0ef54ecc0364f83db4bbb3e8cea6e4b4240e902d0808f48fc0198de7697fb9ba",
"0x987072e05821c206ad15aa7a7a45fa20fa52e9ad1707ea2f57bafd05262fd9ed",
"0x694963a97af56d8120efd4fe8a2d7c2858a2f323db4c8fcefc223de75cf22033",
"0xf9b0f6c6a60975cc525660588ce768d033138c2c9b11e5f397b6ea2176ebd90a",
"0x8e103f588404b1b0cf764f7c4a0a53a324b8f32c457dfeabf1bc6d0f152f4a60",
"0x1193c85cb249eaf0b1a15e88bdbe076f306aaa04deaefcd2e47b615327d31c44",
"0x3bfd94bd64ba5f1cf751cd3630f35bd3e7539b5977d78dd90ad21d278c2d73dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
