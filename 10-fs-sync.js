// const fs = require('fs');
// fs.readFileSync()
        /** Or */

        const {readFileSync, writeFileSync} = require('fs')     /**all destructed element */

        const first = readFileSync('./content/first.txt', 'utf-8')
        const second = readFileSync('./content/second.txt', 'utf-8')
        
        // console.log(first, second)
        
        writeFileSync('./content/result.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'})
        
        /**
         * writeFileSync :- will create file and the content inside that file, if already created then over write that file
         * {flag : 'a'} :- will duplicate the content inside the file
         */