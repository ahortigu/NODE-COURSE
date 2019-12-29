//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'I am a text! ') */
//fs.appendFileSync('notes.txt', ' I live in London!')
// nodemon (global) will continue to monitor the directory (or directories) and restart the script if there are any changes.

const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')
const yargs = require('yargs')
const msg = getNotes()
console.log(msg)
console.log(validator.isEmail('ana@example.com'))
console.log(chalk.blue.bold.inverse('Success'))

// console.log(process.argv) to print the comands available
// const command = prcoess.arg[2]  I could create any commands I want (command parsing) this one would correspond to the 3rd element of the command array.

// Customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command:'Add',
    describer:'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'String',
        },
        body: {
            describe: 'Gives a body',
            demandOption: 'true',
            type: 'String',
        }   
    },
    handler: function (argv) {
      console.log('Title: ' + argv.title)
      console.log('Body: ' + argv.body)
    } 
}) 

// Create remove command 
yargs.command({
    command:'Remove',
    describer:'Remove a note',
    handler: function () {
      console.log('Removing the note!')
    } 
})

// Create read a command
yargs.command({
    command:'Read',
    describer:'Read a note',
    handler: function (){ 
      console.log('Reading the note!')
    } 
})

// Create list a command
yargs.command({
    command:'List',
    describer:'List a note',
    handler: function () {
      console.log('Listing the note!')
    } 
})

//console.log(yargs.argv)
yargs.parse()
