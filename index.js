const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`There is an error :${err}`);
    }
    console.log(`Server is running on port number ${port}`);
})