# linesof - A command line tool for counting code lines
 Count how many lines of your code.

# Usage

Count all file lines recursively from currenty directory. 

```shell
$ npx linesof
```
> If `.gitignore` file exist in your current folder, linesof will automatically exclude these path.

<br />
<br />

Ignore more specified file path.
```shell
$ npx linesof -i '*.json' '*.md' 'dist'
```
<br />

# Install globally
<br />

`npm -g i linesof`

or

`yarn global add linesof`
