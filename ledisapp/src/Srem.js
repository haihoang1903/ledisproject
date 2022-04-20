function removeValues(key, value, keyValue, setKeyValue) {
	var deValue = [];
	var keyvalue = {};
	keyvalue = keyValue;
	deValue = deValue.concat(keyValue[key]);
	for (let i = 0; i < value.length; i++) {
		deValue.splice(
			deValue.findIndex((val) => {
				if (val === value[i]) {
					return true;
				} else {
					return false;
				}
			}),
			1
		);
	}
	keyvalue[key] = deValue;
	setKeyValue(keyvalue);
}

export default removeValues;
