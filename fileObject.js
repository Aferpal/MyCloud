class fileObject{
    constructor(fullname){
        this.name=fullname.substring(0, fullname.lastIndexOf("."));
        this.type=fullname.substring(fullname.lastIndexOf(".")+1, fullname.length);
        this.fullname=fullname;
        this.url=`url("../fileFetch/${fullname}")`;
    }
}
module.exports=fileObject;