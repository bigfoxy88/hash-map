function HashMap(size){
    let buckets=new Array(size)
    let loadfactor=Math.floor(size*75/100)

    const hash=(key)=>{
        let hashCode=0;
        const primeNumber=31;
        for(let i=0;i<key.length;i++){
            hashCode=(primeNumber*hashCode+key.charCodeAt(i))%size
        }
        return hashCode
    } 
    
    const set=(key,value)=>{
        let itemIndex=hash(key);
        if(itemIndex<0||itemIndex>=buckets.length){
            throw new Error('Trying to access index out of bound')
        }
       
        if(length()+1===loadfactor){
            buckets=buckets.concat(new Array(size))
            loadfactor=Math.floor(buckets.length*75/100)

        }



        if(buckets[hash(key)]===undefined){
            let obj={}
            obj[key]=value
            obj.next=null
            buckets[hash(key)]=obj
            return {buckets,hash,set,get,has,remove,length,clear,keys,values,entries,loadfactor}
        }
            for(let i=buckets[hash(key)];i!=null;i=i.next){
                if(Object.keys(i).some((x)=>{return x==key})){
                    i[key]=value
                    return {buckets, hash, set,get,has,remove,length,clear,keys,values,entries,loadfactor}
                }
            }
            let newobj={}
            newobj[key]=value;
            newobj.next=null
            buckets[hash(key)].next=newobj
            return {buckets, hash, set,get,has,remove,length,clear,keys,values,entries,loadfactor}
        
        
    
    }

    const get=(key)=>{
        let itemIndex=hash(key);
        if(itemIndex<0||itemIndex>=buckets.length){
            throw new Error('Trying to access index out of bound')
        }

        for(let i=buckets[itemIndex];i!=null;i=i.next){
            if(Object.keys(i).some((x)=>{return x==key})){
              return i[key]
            }

        }
        return null

    }

    const has=(key)=>{
        let itemIndex=hash(key);
        if(itemIndex<0||itemIndex>=buckets.length){
            throw new Error('Trying to access index out of bound')
        }

        for(let i=0;i<buckets.length;i++){
            for(let j=buckets[i];j!=null;j=j.next){
                if(Object.keys(j).some((x)=>{return x==key})){
                return true
                } 
            }
        }
        return false

    }

    const remove=(key)=>{
        let itemIndex=hash(key);
        if(itemIndex<0||itemIndex>=buckets.length){
            throw new Error('Trying to access index out of bound')
        }
        let count=0
        for(let i=buckets[itemIndex];i!=null;i=i.next){
            if(Object.keys(i).some((x)=>{return x==key})&& count===0){
                if(i.next!==null){
                    buckets[itemIndex]=i.next;
                    //console.log(buckets)
                    return true
                }else{
                    buckets[itemIndex]=undefined

                }
            }

            
            if(Object.keys(i.next).some((x)=>{return x==key})){
                
                    //console.log(i.next)
                    i.next=i.next.next
                    //console.log(buckets)
                    return true
            }
            count++
        }
        return false
    }

    const length=()=>{
        let count=0
        
        for(let i=0;i<buckets.length;i++){
            for(let j=buckets[i];j!=null;j=j.next){
                count++
            }
        }
        return count
    }

    const clear=()=>{
        let newArr=new Array(buckets.length);
        return {buckets:newArr,hash,set ,get, has,remove,length,clear,keys,values,entries,loadfactor}


    }

    const keys=()=>{
        let arr=[]
        for(let i=0;i<buckets.length;i++){
            for(let j=buckets[i];j!=null;j=j.next){
                arr=arr.concat(Object.keys(j).filter((x)=>{return x!=='next'}))

            }
        }
        return arr
    }

    const values=()=>{
        let arr=[]
        for(let i=0;i<buckets.length;i++){
            for(let j=buckets[i];j!=null;j=j.next){
            arr=arr.concat(Object.values(j).filter(x=>{return typeof x !=='object'}))
            }
        }
        return arr
    } 

    const entries=()=>{
        let arr=[]
        for(let i=0;i<buckets.length;i++){
            for(let j=buckets[i];j!=null;j=j.next){
                let newArr=Object.keys(j).filter((x)=>{return x!=='next'}).concat(Object.values(j).filter(x=>{return typeof x !=='object'}))
            arr.push(newArr)
            }
        }
        return arr

    }

    return {buckets,hash,set ,get, has,remove,length,clear,keys,values,entries,loadfactor}
    
}

let hashmap1=HashMap(16).set('carlos','mencho');
hashmap1.set('pana','magwenzi')
hashmap1.set('pa','mai')
hashmap1.set('a','mi')
hashmap1.set('b','b')
hashmap1.set('ana','mag')
hashmap1.set('n','magi')
hashmap1.set('she','zi')
hashmap1.set('shein','titzi')
hashmap1.set('he','eats')
hashmap1.set('me','its him')
//console.log(hashmap1.hash('juax'))
let hashmap2=hashmap1.set('juar','mexican')
      
console.log(hashmap2.length())