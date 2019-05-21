import EmbarkJS from '../embarkjs';
let StandardTokenJSONConfig = {"contract_name":{"className":"StandardToken","args":[],"code":"6060604052341561000f57600080fd5b60038054600160a060020a03191633600160a060020a031617905561063e806100396000396000f3006060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a723058204ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf520029","runtimeBytecode":"6060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a723058204ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf520029","realRuntimeBytecode":"6060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a72305820","linkReferences":{},"swarmHash":"4ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf52","gasEstimates":{"creation":{"codeDepositCost":"319600","executionCost":"20717","totalCost":"340317"},"external":{"allowance(address,address)":"870","approve(address,uint256)":"22330","balanceOf(address)":"705","decreaseApproval(address,uint256)":"23286","increaseApproval(address,uint256)":"22690","mint(address,uint256)":"42975","totalSupply()":"395","transfer(address,uint256)":"43332","transferFrom(address,address,uint256)":"64071"}},"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","decreaseApproval(address,uint256)":"66188463","increaseApproval(address,uint256)":"d73dd623","mint(address,uint256)":"40c10f19","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abiDefinition":[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x66188463"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xd73dd623"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding-console/.embark/contracts/test/StandardToken.sol","originalFilename":"contracts/test/StandardToken.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding-console/contracts/test/StandardToken.sol","gas":"auto","type":"file","deploy":true,"_gasLimit":6000000,"error":false,"deploymentAccount":"0xeb11Dc64B00B769982FA70F6280210Fa457e7753","realArgs":[],"address":"0x0033a50Db52A47d95443371E775d27bE232cBe9a","deployedAddress":"0x0033a50Db52A47d95443371E775d27bE232cBe9a"},"address":"0x0033a50Db52A47d95443371E775d27bE232cBe9a","code":"6060604052341561000f57600080fd5b60038054600160a060020a03191633600160a060020a031617905561063e806100396000396000f3006060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a723058204ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf520029","runtime_bytecode":"6060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a723058204ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf520029","real_runtime_bytecode":"6060604052600436106100985763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009d57806318160ddd146100d357806323b872dd146100f857806340c10f1914610120578063661884631461014457806370a0823114610166578063a9059cbb14610185578063d73dd623146101a7578063dd62ed3e146101c9575b600080fd5b34156100a857600080fd5b6100bf600160a060020a03600435166024356101ee565b604051901515815260200160405180910390f35b34156100de57600080fd5b6100e6610258565b60405190815260200160405180910390f35b341561010357600080fd5b6100bf600160a060020a036004358116906024351660443561025e565b341561012b57600080fd5b610142600160a060020a0360043516602435610358565b005b341561014f57600080fd5b6100bf600160a060020a03600435166024356103d1565b341561017157600080fd5b6100e6600160a060020a03600435166104b7565b341561019057600080fd5b6100bf600160a060020a03600435166024356104d2565b34156101b257600080fd5b6100bf600160a060020a036004351660243561057c565b34156101d457600080fd5b6100e6600160a060020a03600435811690602435166105e9565b600160a060020a0333811660008181526020818152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60025490565b6000600160a060020a038316151561027557600080fd5b600160a060020a03841660009081526001602052604090205482111561029a57600080fd5b600160a060020a0380851660009081526020818152604080832033909416835292905220548211156102cb57600080fd5b600160a060020a038481166000818152600160209081526040808320805488900390558785168084528184208054890190558484528383528184203390961684529490915290819020805486900390557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60035433600160a060020a0390811691161461037357600080fd5b6002805482019055600160a060020a0382166000818152600160205260408082208054850190557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9084905190815260200160405180910390a35050565b600160a060020a033381166000908152602081815260408083209386168352929052908120548083111561042a57600160a060020a03338116600090815260208181526040808320938816835292905290812055610453565b600160a060020a0333811660009081526020818152604080832093881683529290522083820390555b600160a060020a033381166000818152602081815260408083209489168084529490915290819020547f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a35060019392505050565b600160a060020a031660009081526001602052604090205490565b6000600160a060020a03831615156104e957600080fd5b600160a060020a03331660009081526001602052604090205482111561050e57600080fd5b600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03338116600081815260208181526040808320948716808452949091528082208054860190819055919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925915190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260208181526040808320939094168252919091522054905600a165627a7a72305820","swarm_hash":"4ac5d2c995eae02f71500509803c2188a21fccb5f4dc311503fa1c3a49ebdf52","gas_estimates":{"creation":{"codeDepositCost":"319600","executionCost":"20717","totalCost":"340317"},"external":{"allowance(address,address)":"870","approve(address,uint256)":"22330","balanceOf(address)":"705","decreaseApproval(address,uint256)":"23286","increaseApproval(address,uint256)":"22690","mint(address,uint256)":"42975","totalSupply()":"395","transfer(address,uint256)":"43332","transferFrom(address,address,uint256)":"64071"}},"function_hashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","decreaseApproval(address,uint256)":"66188463","increaseApproval(address,uint256)":"d73dd623","mint(address,uint256)":"40c10f19","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abi":[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x66188463"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xd73dd623"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}]};
let StandardToken = new EmbarkJS.Blockchain.Contract(StandardTokenJSONConfig);
export default StandardToken;
