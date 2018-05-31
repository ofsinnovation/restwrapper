pragma solidity 0.4.21;


interface SalesforceSmartContractI {
    function write(string key, string value) external;
    function executeFunction(string functionName, string key, string value) external;
    function read(string key) external view returns (string, string, uint, uint, string);

}


contract HLSContract is SalesforceSmartContractI {

    struct  LOV {
        string  key;
        string  value;
        uint createdDate;
        uint updatedDate;
        string status;
    }

    mapping (string => LOV) private providerCredStore;
    event FunctionCalled(string);
    event FunctionCalledWithParam(string);
    event MatchingFunctionFound(bool);

    function write(string key, string value) external {

        providerCredStore[key] = LOV({
            key: key,
            value: value,
            createdDate: now,
            updatedDate: now,
            status:"ACTIVE"
        });
    }

    function executeFunction(string functionName, string key, string value) external {

        emit MatchingFunctionFound(compareStrings(functionName, "update"));
        if (compareStrings(functionName, "update")) {

            update(key, value);
        }
    }

    function read(string key) external view returns (string, string, uint, uint, string) {

        LOV storage lov = providerCredStore[key];
        return (lov.key, lov.value, lov.createdDate, lov.updatedDate, lov.status);
    }

    function update(string key, string value) internal {

        emit FunctionCalledWithParam(key);
        emit FunctionCalledWithParam(value);
        providerCredStore[key].value = value;
        providerCredStore[key].updatedDate = now;
    }

    //Utility Method
    function compareStrings (string a, string b) internal pure  returns (bool) {

        return keccak256(a) == keccak256(b);
    }

}
