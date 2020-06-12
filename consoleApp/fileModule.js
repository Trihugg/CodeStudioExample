var fs = require('fs');
var fileModule = {
    taoFile: function(tenFile, noiDung)
    {
        fs.writeFile(tenFile, noiDung, function(err){
            if(err)
                console.log(err);
            else
                console.log('Write operation complete');
        });
    },
    docFile: function(tenFile)
    {
        fs.readFile(tenFile, 'utf-8', function(err,data){
            if(err) throw err;
            console.log(data);
        });
    }
}
module.exports = fileModule;