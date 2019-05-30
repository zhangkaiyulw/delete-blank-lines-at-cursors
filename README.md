# delete-blank-lines-at-cursors

VSCode plugin that provides deleting blank lines at cursors functionality.
Multiple cursors are supported.

This plugin is inspired from the emacs editor. These are from emacs help:

C-x C-o runs the command delete-blank-lines which is an interactive compiled
Lisp function in `simple.el'. It is bound to C-x C-o. (delete-blank-lines)

* On blank line, delete all surrounding blank lines, leaving just one.
* On isolated blank line, delete that one.
* On nonblank line, delete any immediately following blank lines.

If you are a emacs user, you may want to add this to your `keybindings.json`.

```json
{
  "key": "ctrl+x ctrl+o",
  "command": "deleteBlankLinesAtCursors",
  "when": "editorTextFocus && !editorReadonly"
}
```

## Need Help?

Open an issue [here](https://github.com/zhangkaiyulw/delete-blank-lines-at-cursors/issues).

## License

[MIT](https://github.com/zhangkaiyulw/delete-blank-lines-at-cursors/blob/master/LICENSE) @ Victor Zhang
