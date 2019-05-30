import {
	commands, ExtensionContext, TextEditor, TextEditorEdit, Selection
} from 'vscode';

export function activate(context: ExtensionContext) {
	let disposable = commands.registerTextEditorCommand(
		'deleteBlankLinesAtCursors',
		(editor: TextEditor, edit: TextEditorEdit) => {
			const deletions = [];
			editor.selections.forEach((sel: Selection) => {

			});
			return [

			];
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
