/**
 * @file
 * @description Fail manipulation part of tutorial, pulled out so I could
 *              also practice working with modules
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 */
function messWithFile () 
{
    console.log(__filename);
    console.log(__dirname);

    const fs = require('fs');

    /**
     * Read file using a synchronous or blocking method.  Wrapped in a 
     * try/catch block because it does not use the arrow function callback.
     */
    try {
        const data = fs.readFileSync('hi.txt', 'utf8');
        console.log(`Sync: ${data}`);   
        } catch (error) { console.error(err); }

    /**
     * Read file in an asynchronous method.  This will likely end up 
     * happening after at least some of the following code.
     */
    fs.readFile('hi.txt', 'utf8'
        , (err, data) => 
        {
            if (err) { console.error(err); return } 
            console.log(`Async: ${data}`);
        });

    /**
     * Practice with destructuring a portion of a required module.
     */
    const {writeFile, writeFileSync} = require ('fs');

    const newText = '\nThis is some new text...';

    writeFile('hi.txt', newText, {flag: 'a'}
        , (err) => 
        {
            if (err) { console.error(err); return; }
            console.log('Content written!');    
        })

    /**
     * Last line of code, but not last output due to the asynchronous
     * read and write calls above.
     */
    console.log("Outside function...");

}

/**
 * function exports
 */
module.exports = messWithFile;
/**
 * End of File
 */