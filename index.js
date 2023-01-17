var posts = [{title:'first post',body:'this is first post',createdAt :Date.now(),lastActive :Date.now()},{title:'second post',body:'this is second post',createdAt :Date.now(),lastActive :Date.now()}]

function getPost(){
    setTimeout(()=>{
    var output=""
    posts.forEach((element) => {
        
        output+=`<li>${element.title}. ${element.body} - ${(Date.now()-element.createdAt)/1000} seconds ago, ${element.lastActive} active<li/>`
    }
    );
    document.body.innerHTML = output
    
},1000)
}

function createPost(post){
  
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push(post)
                const error = false
                if(!error){
                    resolve('success!')
                }
                else{
                    reject('Something went wrong')
                }
            },2000)
        })  
}
function updateLastUserActivityTime(posts){
    return new Promise((resolve,reject)=>{
        setTimeout((posts)=>{
            posts.forEach((element)=>{
                element.lastActive = Date.now
            })
            console.log(posts)
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ans=posts.pop()
            // const error = false
            if(ans!==undefined){
                resolve('success!')
            }
            else{
                reject('Array is empty')
            }
        },1000)
    }) 
}

// wait for few seconds to get displayed
createPost({title:'third post',body:'this is third post',createdAt :Date.now(),lastActive :Date.now()})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{console.log('success')})
                .catch((err)=>{console.log(err)
                    createPost({title:'fourth post',body:'this is fourth post',createdAt :Date.now()})
                    .then(()=>{
                        getPost()
                        deletePost().then(getPost)
                    })
                
                })
            })
        })
    })
    
})
const promise1=Promise.resolve('hello world')
const promise2= 10
const promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'good bye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
Promise.all([promise1,promise2,promise3,promise4])
.then((values)=>{console.log(values)})


const promise5 = createPost({title:'fourth post',body:'this is fourth post',createdAt :Date.now(),lastActive :Date.now()})
const promise6 = updateLastUserActivityTime(posts)

Promise.all([promise5,promise6])
.then(()=>{deletePost()})
.then(()=>{console.log(posts)})



