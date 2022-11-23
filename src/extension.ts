import * as vscode from 'vscode';
import { v4 as uuidv4 } from 'uuid';

export function activate(context: vscode.ExtensionContext) {
	// This generates a UUID inline
	let generateOneInFile = vscode.commands.registerCommand('guid.generateOneInFile', () => {
		try {
			let uuid = uuidv4();
			vscode.window.showInformationMessage(`${uuid} has been inserted.`);

			vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(uuid));


		} catch (error) {
			vscode.window.showInformationMessage(String(error));

		}
	});
	context.subscriptions.push(generateOneInFile);

	// This finds *all* v4 UUIDs in a *single* (open) file and replaces them.
	let replaceAllInFile = vscode.commands.registerCommand('guid.replaceAllInFile', () => {
		try {
			const editor = vscode.window.activeTextEditor;
			const document = editor?.document;
			
			editor?.edit(editBuilder => {
				const lines = vscode.window.activeTextEditor?.document.lineCount || 0;
				let regex = /[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}(?:\/.*)?$/i;

				for (let line = 0; line < lines; line++) {
					let lineToEdit = editor.document.lineAt(line);
					let range = document?.getWordRangeAtPosition(lineToEdit.range.start, regex) || new vscode.Range(lineToEdit.range.start, lineToEdit.range.end);
					let text = vscode.window.activeTextEditor?.document.lineAt(line);
					let newText = typeof text === "undefined" ?  "" : text?.text;
		
					newText = newText.replace(regex, uuidv4());
					editBuilder.replace(range, newText);
				}
			});
		} catch (error) {
			vscode.window.showInformationMessage(String(error));
		}
	});
	context.subscriptions.push(replaceAllInFile);


}

// this method is called when your extension is deactivated
export function deactivate() { }

