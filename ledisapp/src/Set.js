function SetK(key, value, keyValue, setKeyValue) {
	var keyvalue = keyValue;
	keyvalue[key] = value;
	setKeyValue(keyvalue);
}

export default SetK;
