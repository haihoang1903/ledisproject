function Expire(key, second, keyValue, setKeyValue) {
	var keyvalue = {};
	keyvalue = keyValue;
	keyvalue[key] = undefined;
	setTimeout(() => {
		setKeyValue(keyvalue);
	}, second * 1000);
}

export default Expire;
