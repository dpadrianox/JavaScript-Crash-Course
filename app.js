// // how to create a promise
// const statusRef = document.querySelector(".status")
// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("VIP")
//         } , 2000)
//     })
// }
// //1. Then
// getSubscriptionStatus().then(response => console.log(response))


// //2. Async/await
// async function main() {
//     const status = await getSubscriptionStatus()
//     statusRef.innerHTML = status
    
// }
// main()

const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
            if (subscriptionStatus === "VIP") {
                resolve("show video")
            } 
            else if (subscriptionStatus === "FREE") {
                resolve("show trailer")
            }
            else {
                reject("no video")
            }
    })
}
async function main() {
    const status = await getVideo("FREE")
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
    console.log(e)
    videoRef.innerHTML = e
}}

main()