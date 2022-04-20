function addValues(key, value, keyValue, setKeyValue) {
	var keyvalue = keyValue;
	keyvalue[key] = value;
	setKeyValue(keyvalue);
}

export default addValues;
