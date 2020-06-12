function check(){
    let name = document.getElementById('txtName').value;
    if(name.length == 0)
    {
        alert('cant be empty!');
        return false;
    }
    else
    {
        return true;   
    }
 }