import { useState } from "react";
import "./App.css";
import SetK from "./Set";
import GetK from "./Get";
import addValues from "./Sadd";
import removeValues from "./Srem";
import Smembers from "./Smembers";
import Keys from "./Keys";
import Del from "./Del";
import Expire from "./Expire";

function App() {
	const [input, setInput] = useState("");
	const [arrayInput, setArrayInput] = useState([]);
	const [keyValue, setKeyValue] = useState({});

	function Execute() {
		var data = {};
		var arrinput = [];
		var commandInput = [];
		var input2 = [];

		//SET key
		commandInput = input.split(" ");
		if (commandInput[0] === "SET" || commandInput[0] === "set") {
			SetK(commandInput[1], commandInput[2], keyValue, (val) => {
				setKeyValue(val);
			});
			data.command = input;
			data.result = "OK";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//GET key value
		} else if (commandInput[0] === "GET" || commandInput[0] === "get") {
			data.command = input;
			data.result = GetK(commandInput[1], keyValue);
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//SADD
		} else if (commandInput[0] === "SADD" || commandInput[0] === "sadd") {
			for (let i = 2; i < commandInput.length; i++) {
				input2.push(commandInput[i]);
			}
			addValues(commandInput[1], input2, keyValue, (val) => {
				setKeyValue(val);
			});
			data.command = input;
			data.result = "OK";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//SREM
		} else if (commandInput[0] === "SREM" || commandInput[0] === "srem") {
			for (let i = 2; i < commandInput.length; i++) {
				input2.push(commandInput[i]);
			}
			removeValues(commandInput[1], input2, keyValue, (val) => {
				setKeyValue(val);
			});
			data.command = input;
			data.result = "OK";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//SMEMBERS
		} else if (
			commandInput[0] === "SMEMBERS" ||
			commandInput[0] === "smembers"
		) {
			data.command = input;
			data.result = Smembers(commandInput[1], keyValue);
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//KEYS
		} else if (commandInput[0] === "KEYS" || commandInput[0] === "keys") {
			data.command = input;
			data.result = Keys(keyValue);
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//DEL
		} else if (commandInput[0] === "DEL" || commandInput[0] === "del") {
			Del(commandInput[1], keyValue, (val) => {
				setKeyValue(val);
			});
			data.command = input;
			data.result = "OK";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
			//EXPIRE
		} else if (
			commandInput[0] === "EXPIRE" ||
			commandInput[0] === "expire"
		) {
			Expire(commandInput[1], commandInput[2], keyValue, (val) => {
				setKeyValue(val);
			});
			data.command = input;
			data.result = "OK";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
		} else {
			data.command = input;
			data.result = "ERROR";
			arrinput = arrinput.concat(arrayInput);
			arrinput.push(data);
			setArrayInput(arrinput);
		}
	}
	const onSubmit = (e) => {
		//prevent refresh page
		e.preventDefault();
	};

	const handleKeypress = (e) => {
		//it triggers by pressing the enter key
		if (e.keyCode === 13) {
			Execute();
		}
	};

	return (
		<div className="page">
			<div className="display">
				{arrayInput.map((value, index) => {
					return (
						<div>
							<div>
								<div>
									<div>{">" + value.command}</div>
									<div>{value.result}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="form">
				<form onSubmit={onSubmit}>
					<input
						type="text"
						name="command"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						onKeyPress={handleKeypress}
						className="input"
					></input>
					<button type="submit" onClick={Execute} className="button">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
