[Home](/) \| [e4c Training](/e4cTraining)

# JavaScript Tutorials

## Comments

Contained here is my sample code for the JavaScript basic training.  I spent \[wasted\] a bit of
extra time here working out how I wanted to present these materials to you.  A GitHub repository
seemed like an easy solution.  However, while I was at it, I decided to add GitHub Pages and 
JSDoc to the ToDo list.  GitHub pages in particular has been on my ToDo list for awhlie.

Both GitHub pages and JSDocs are a bit quirky (not suprising) but generally functional so I'll 
likely spend more time exploring both.

## Training Materials

The e4c basic JavaScript training uses the 
[JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c) by Traversy Media

## Setup

For these exercises I used the following:

1. VSCode
2. Live Server extension by Ritwick Dey
3. Downloaded index.html and style.css from the comments below the video
4. JSDoc installed via npm for Windows.
5. DocDash plugin installed via npm for Windows.  
6. JSDoc to Markdown plugin installed via npm for Windows.

**NOTE:** The default installation for DocDash did not work properly.  I had to copy the docdash,
jsdoc and the jsdoc-to-markdown directories from 

_C:\Users\rober\AppData\Roaming\nvm\v22.3.0\node_modules_
<br>to
<br>_C:\Users\rober\AppData\Roaming\nvm\v22.3.0\node_modules\jsdoc\node_modules_

This is probably a path/configuration problem with my npm setup.

**NOTE 2:** in order to run npm (and install JSDoc) I had to execute the following in a
PowerShell terminal run as Administrator.
<pre>
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
</pre>

## Sample Application and Documentation

[Sample Application](./index1.html)  _Not Yet Ready_
<br>[Sample Application Documentation](./docs)

