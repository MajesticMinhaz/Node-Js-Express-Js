var existFile = require('fs');

existFile.exists('view/deletefile.txt', (result) => {
    if(result){
        console.log("File existing...on view/deletefile.txt");
    }else{
        console.log("File not found on view/deletefile.txt");
    }
});