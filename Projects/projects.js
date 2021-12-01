/* Font Size reduce */
for (let i of document.querySelectorAll('p')) {
    if (i.innerText.length > 80) {
        i.style.fontFamily = "Segoe UI , Tahoma,Verdana,sans-serif"
        i.style.fontSize = "0.8rem"
    }
}
/* grive Image-id  */
let imageArr = [
    'https://blog.hubspot.com/hubfs/google-quiz.jpg',
    'https://blog.hubspot.com/hubfs/google-quiz.jpg',
    '1d6gt-SO3CTqkx1n3K3Ewvpsz2Gcu6XeV',
    '1-aYdj9SdTuST8kzhNzehOVYFe0bVVT2v',
    '1JwyeiybaJCb8c9Khuq5LnEyZ1oh1t1QB',
    '18tHG04akxS46nPixstqc-LJVblOZhW-U',
    '11QPW-xzRXMwWUpe12Y8wg5ada1gZr0qJ',
    '10QgUKCcKnZG7jvX4iVBsZoT2L_tFzYPW',
    '1JZ6LGO7UFIP_OC6MAp9dsbSz8QTb0zAo',
    '1Ds62QKeDKfl8FM41glciiwU24ycKeTX6',
    '1sHeVPg5LxPAwN7nMfG1INKt_Ux9O_eae',
    '1HSLKIke3eAPpqHprbZLGp1YEToXjl0em'
]
document.querySelectorAll('.body').forEach((e, i) => e.addEventListener("mouseover", () => {
    if (i <= 11) {
        if (i > 1 && i <= 11) {
            e.style.backgroundImage = `url("https://drive.google.com/uc?export=view&id=${imageArr[i]}")`
        } else {
            e.style.backgroundImage = `url(${imageArr[i]})`
        }
        e.style.backgroundSize = "cover"
        e.childNodes[1].style.opacity = '0'
        e.childNodes[3].style.opacity = '0'
    }
}))
document.querySelectorAll('.body').forEach(e => e.addEventListener("mouseout", () => {
    e.style.backgroundImage = ""
    e.style.backgroundSize = "cover"
    e.childNodes[1].style.opacity = '1'
    e.childNodes[3].style.opacity = '1'
}))