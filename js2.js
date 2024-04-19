let doc = document
let body = doc.querySelector('body')
let header = doc.querySelector('header')
let div = doc.querySelector('.div')
let aboba = doc.querySelector('.aboba')
let obaba = doc.querySelector('obaba')
let goryachii_blyuda = doc.querySelector('.a')
let supi = doc.querySelector('.b')
let hinkali = doc.querySelector('.c')

let yeda = [
    {
        img: './img/Mask Group.png',
        name: 'Хачапури по-аджарски',
        weight: '430 г',
        opisanie: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        price: '470 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-1.png',
        name: 'Хинкали традиционные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '495 ₽',
        korzina: './img/Group 7.png',
        skidka: '620 ₽'
    },
    {
        img: './img/Mask Group-2.png',
        name: 'Хинкали жаренные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '520 ₽',
        korzina: './img/Group 7.png',
        skidka: '650 ₽'
    },
    {
        img: './img/Mask Group-3.png',
        name: 'Ланч низкокалорийный',
        weight: '450 г',
        opisanie: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        price: '1 148 ₽',
        korzina: './img/Group 7.png',
        skidka: '1 435 ₽'
    },
    {
        img: './img/Mask Group-4.png',
        name: 'Хачапури по-мегрельски',
        weight: '430 г',
        opisanie: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        price: '490 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-5.png',
        name: 'Котлета с картофелем по-деревенски',
        weight: '350 г',
        opisanie: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        price: '430 ₽',
        button: '3 вида',
        skidka: '410 ₽ –'
    },
    {
        img: './img/Mask Group-6.png',
        name: 'Хинкали традиционные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '495 ₽',
        korzina: './img/Group 7.png',
        skidka: '620 ₽'
    },
    {
        img: './img/Mask Group-7.png',
        name: 'Хачапури по-мегрельски',
        weight: '430 г',
        opisanie: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        price: '490 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-8.png',
        name: 'Хачапури по-аджарски',
        weight: '430 г',
        opisanie: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        price: '470 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-9.png',
        name: 'Котлета с картофелем по-деревенски',
        weight: '350 г',
        opisanie: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        price: '430 ₽',
        button: '3 вида',
        skidka: '410 ₽'
    },
    {
        img: './img/Mask Group-10.png',
        name: 'Хинкали жаренные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '520 ₽',
        korzina: './img/Group 7.png',
        skidka: '650 ₽'
    },
    {
        img: './img/Mask Group-11.png',
        name: 'Ланч низкокалорийный',
        weight: '450 г',
        opisanie: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        price: '1 148 ₽',
        korzina: './img/Group 7.png',
        skidka: '1 435 ₽'
    }
]

let mem_you = [
    {
        h1: '30%',
        p: 'акция',
        ogon: './img/image 9.png',
        h12: '20%',
    },
    {
        img: './img/image 17.png',
        p: 'Горячие блюда', ima: './img/Vector (1).svg',
        img2: './img/image 18.png',
    },
    {
        img: './img/image 19.png',
        p: 'Супы', ima: './img/Vector (1).svg',
        img2: './img/image 20.png',
    },
    {
        img: './img/image 21.png',
        p: 'Хинкали',
        img2: './img/image 22.png',
    },
    {
        img: './img/image 23.png',
        p: 'Холодные закуски',
        img2: './img/image 24.png',
    },
    {
        img: './img/image 25.png',
        p: 'Салаты',
        img2: './img/image 26.png',
    }
]


let aksii = doc.createElement('p')
let ogon = doc.createElement('img')
let goryachee = doc.createElement('p')
let strela = doc.createElement('img')
let holodnoe = doc.createElement('p')
let strelkadva = doc.createElement('img')
let svezhaya_vipechka = doc.createElement('p')
let deserti = doc.createElement('p')
let napitki = doc.createElement('p')
let awd = doc.createElement('div')
let dwa = doc.createElement('div')

aksii.innerText = 'Акции'
ogon.src = './img/image 9.png'
goryachee.innerText = 'Горячее'
strela.src = './img/Vector (1).svg'
holodnoe.innerText = 'Холодное'
strelkadva.src = './img/Vector (1).svg'
svezhaya_vipechka.innerText = 'Свежая выпечка'
deserti.innerText = 'Десерты'
napitki.innerText = 'Напитки'

awd.classList.add('awd')
aksii.classList.add('aksii')
ogon.classList.add('ogon')
goryachee.classList.add('goryachee')
strela.classList.add('strelka')
holodnoe.classList.add('holodnoe')
strelkadva.classList.add('strelka')
svezhaya_vipechka.classList.add('svezhaya_vipechka')
deserti.classList.add('deserti')
napitki.classList.add('napitki')

awd.appendChild(strela)
awd.appendChild(goryachee)
div.appendChild(aksii)
div.appendChild(ogon)
div.appendChild(goryachee)
div.appendChild(strela)
div.appendChild(holodnoe)
div.appendChild(strelkadva)
div.appendChild(svezhaya_vipechka)
div.appendChild(deserti)
div.appendChild(napitki)

goryachee.addEventListener('click', () => {
    aboba.classList.toggle('aboba_active')
    goryachii_blyuda.classList.toggle('goryachii_blyuda_active')
    supi.classList.toggle('supi_active')
    hinkali.classList.toggle('hinkali_active')
})
strela.addEventListener('click', () => {
    aboba.classList.toggle('aboba_active')
    goryachii_blyuda.classList.toggle('goryachii_blyuda_active')
    supi.classList.toggle('supi_active')
    hinkali.classList.toggle('hinkali_active')
})

awd.addEventListener('click', () => {
    strela.src = './img/Vector (2).svg'
    goryachee.style.color = '#FBD13E'
})

