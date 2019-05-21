import EmbarkJS from '../embarkjs';
let ScriptHelpersJSONConfig = {"contract_name":{"className":"ScriptHelpers","args":[],"code":"6060604052341561000f57600080fd5b6103538061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e0029","runtimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e0029","realRuntimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820","linkReferences":{},"swarmHash":"e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e","gasEstimates":{"creation":{"codeDepositCost":"170200","executionCost":"209","totalCost":"170409"},"external":{"abiEncode(bytes,bytes,address[])":"infinite"},"internal":{"abiLength(address[] memory)":"infinite","abiLength(bytes memory)":"infinite","addressAt(bytes memory,uint256)":"infinite","copy(bytes memory,uint256,uint256,uint256)":"infinite","encode(bytes memory,bytes memory,address[] memory)":"infinite","getPtr(address[] memory)":"infinite","getPtr(bytes memory)":"12","getSpecId(bytes memory)":"infinite","locationOf(bytes memory,uint256)":"infinite","memcpy(uint256,uint256,uint256)":"infinite","toBytes(bytes4)":"infinite","uint256At(bytes memory,uint256)":"infinite","uint32At(bytes memory,uint256)":"infinite"}},"functionHashes":{"abiEncode(bytes,bytes,address[])":"137d7026"},"abiDefinition":[{"constant":true,"inputs":[{"name":"_a","type":"bytes"},{"name":"_b","type":"bytes"},{"name":"_c","type":"address[]"}],"name":"abiEncode","outputs":[{"name":"d","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding-console/.embark/node_modules/@aragon/os/contracts/evmscript/ScriptHelpers.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/liquid-funding-console/.embark/node_modules/@aragon/os/contracts/evmscript/ScriptHelpers.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding-console/contracts/.embark/node_modules/@aragon/os/contracts/evmscript/ScriptHelpers.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b6103538061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e0029","runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e0029","real_runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663137d70268114610045575b600080fd5b61010d60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061018495505050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b83811015610149578082015183820152602001610131565b50505050905090810190601f1680156101765780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c610315565b61019784848461019f565b949350505050565b6101a7610315565b6060600080806101b688610261565b602002840192506101c687610261565b602002830191506101d68661029c565b60200282019050806040518059106101eb5750595b818152601f19601f830116810160200160405290509450836020860152826040860152816060860152610229856102218a6102a9565b868b516102ac565b61023e85610236896102a9565b858a516102ac565b6102568561024b886102a9565b8489516020026102ac565b505050509392505050565b6000806020835181151561027157fe5b061161027e576000610281565b60015b60ff166020835181151561029157fe5b040160010192915050565b6000815160010192915050565b90565b600082602086010190506102c48185846020016102cb565b5050505050565b81838260005b602082106102f3578351835260209384019390920191601f19909101906102d1565b6001826020036101000a03905080198451168184511617909252505050505050565b602060405190810160405260008152905600a165627a7a72305820","swarm_hash":"e57f316b5f9abefccfcfe4b6204409c15316457001a2afd981b905dbf8b5a76e","gas_estimates":{"creation":{"codeDepositCost":"170200","executionCost":"209","totalCost":"170409"},"external":{"abiEncode(bytes,bytes,address[])":"infinite"},"internal":{"abiLength(address[] memory)":"infinite","abiLength(bytes memory)":"infinite","addressAt(bytes memory,uint256)":"infinite","copy(bytes memory,uint256,uint256,uint256)":"infinite","encode(bytes memory,bytes memory,address[] memory)":"infinite","getPtr(address[] memory)":"infinite","getPtr(bytes memory)":"12","getSpecId(bytes memory)":"infinite","locationOf(bytes memory,uint256)":"infinite","memcpy(uint256,uint256,uint256)":"infinite","toBytes(bytes4)":"infinite","uint256At(bytes memory,uint256)":"infinite","uint32At(bytes memory,uint256)":"infinite"}},"function_hashes":{"abiEncode(bytes,bytes,address[])":"137d7026"},"abi":[{"constant":true,"inputs":[{"name":"_a","type":"bytes"},{"name":"_b","type":"bytes"},{"name":"_c","type":"address[]"}],"name":"abiEncode","outputs":[{"name":"d","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"}]};
let ScriptHelpers = new EmbarkJS.Blockchain.Contract(ScriptHelpersJSONConfig);
export default ScriptHelpers;
