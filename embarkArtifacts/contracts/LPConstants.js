import EmbarkJS from '../embarkjs';
let LPConstantsJSONConfig = {"contract_name":{"className":"LPConstants","args":[],"code":"6060604052341561000f57600080fd5b61036e8061001e6000396000f3006060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa0029","runtimeBytecode":"6060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa0029","realRuntimeBytecode":"6060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820","linkReferences":{},"swarmHash":"c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa","gasEstimates":{"creation":{"codeDepositCost":"175600","executionCost":"215","totalCost":"175815"},"external":{"ACL_APP()":"305","ACL_APP_ID()":"327","APM_NODE()":"173","APP_ADDR_NAMESPACE()":"217","APP_BASES_NAMESPACE()":"393","CORE_NAMESPACE()":"283","ETH_NODE()":"349","KERNEL_APP()":"239","KERNEL_APP_ID()":"195","LP_APP_ID()":"333","VAULT_APP_ID()":"443"}},"functionHashes":{"ACL_APP()":"a3b4b07f","ACL_APP_ID()":"cbcc65eb","APM_NODE()":"09720778","APP_ADDR_NAMESPACE()":"178e6079","APP_BASES_NAMESPACE()":"db8a61d4","CORE_NAMESPACE()":"756f6049","ETH_NODE()":"cc473be3","KERNEL_APP()":"25012699","KERNEL_APP_ID()":"1113ed0d","LP_APP_ID()":"30744267","VAULT_APP_ID()":"d2dd420f"},"abiDefinition":[{"constant":true,"inputs":[],"name":"APM_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LP_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CORE_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VAULT_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_BASES_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding-console/.embark/contracts/LPConstants.sol","originalFilename":"contracts/LPConstants.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding-console/contracts/LPConstants.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b61036e8061001e6000396000f3006060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa0029","runtime_bytecode":"6060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa0029","real_runtime_bytecode":"6060604052600436106100ae5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146100b35780631113ed0d146100d8578063178e6079146100eb57806325012699146100fe5780633074426714610111578063756f604914610124578063a3b4b07f14610137578063cbcc65eb1461014a578063cc473be31461015d578063d2dd420f14610170578063db8a61d414610183575b600080fd5b34156100be57600080fd5b6100c6610196565b60405190815260200160405180910390f35b34156100e357600080fd5b6100c66101ba565b34156100f657600080fd5b6100c66101de565b341561010957600080fd5b6100c6610202565b341561011c57600080fd5b6100c6610226565b341561012f57600080fd5b6100c661025a565b341561014257600080fd5b6100c661027e565b341561015557600080fd5b6100c66102a2565b341561016857600080fd5b6100c66102c6565b341561017b57600080fd5b6100c66102ea565b341561018e57600080fd5b6100c661031e565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b6040517f6c6971756964506c656467696e670000000000000000000000000000000000008152600e01604051809103902081565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b6040517f7661756c740000000000000000000000000000000000000000000000000000008152600501604051809103902081565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f815600a165627a7a72305820","swarm_hash":"c02dd3a9fc7b997791924a82f0894e1ed4f62b324dbbbc7af3c4195aad64a1aa","gas_estimates":{"creation":{"codeDepositCost":"175600","executionCost":"215","totalCost":"175815"},"external":{"ACL_APP()":"305","ACL_APP_ID()":"327","APM_NODE()":"173","APP_ADDR_NAMESPACE()":"217","APP_BASES_NAMESPACE()":"393","CORE_NAMESPACE()":"283","ETH_NODE()":"349","KERNEL_APP()":"239","KERNEL_APP_ID()":"195","LP_APP_ID()":"333","VAULT_APP_ID()":"443"}},"function_hashes":{"ACL_APP()":"a3b4b07f","ACL_APP_ID()":"cbcc65eb","APM_NODE()":"09720778","APP_ADDR_NAMESPACE()":"178e6079","APP_BASES_NAMESPACE()":"db8a61d4","CORE_NAMESPACE()":"756f6049","ETH_NODE()":"cc473be3","KERNEL_APP()":"25012699","KERNEL_APP_ID()":"1113ed0d","LP_APP_ID()":"30744267","VAULT_APP_ID()":"d2dd420f"},"abi":[{"constant":true,"inputs":[],"name":"APM_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LP_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CORE_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VAULT_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_BASES_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]};
let LPConstants = new EmbarkJS.Blockchain.Contract(LPConstantsJSONConfig);
export default LPConstants;
