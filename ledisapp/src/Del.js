function Del(key, keyValue, setKeyValue) {
	var keyvalue = keyValue;
	delete keyvalue[key];
	setKeyValue(keyvalue);
}

export default Del;
