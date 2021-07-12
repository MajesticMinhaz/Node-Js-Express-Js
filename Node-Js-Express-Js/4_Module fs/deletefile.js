var deleteFile = require('fs');

deleteFile.unlink('view/deletefile.txt', (error) =>{
    if(error){
        console.log(error.message);
    }else{
        console.log("Successfully deleted file form veiw/deletefile.txt");
    }
});
