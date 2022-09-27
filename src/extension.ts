// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';
import clipboard from 'clipboardy';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "guid-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('guid.generate', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		try {
			let uuid = uuidv4();
			vscode.window.showInformationMessage(`${uuid} has been inserted.`);

			vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(uuid));
		} catch (error) {
			vscode.window.showInformationMessage(String(error));

		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
