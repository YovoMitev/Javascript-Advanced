 class Request{
     constructor(method,uri,version,mess){
         this.method = method;
         this.uri = uri;
         this.version  = version;
         this.message = mess;
         this.response = undefined;
         this.fulfilled = false
     }
 }

 // •	method (String)
 // •	uri (String)
 // •	version (String)
 // •	message (String)
 // •	response (String)
 // •	fulfilled (Boolean)
