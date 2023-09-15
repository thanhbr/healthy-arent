import imgSandwich from "../assets/images/food/sandwich.png"
import imgOrigiriRice from "../assets/images/food/origiri-rice.png"
import imgGuydon from "../assets/images/food/guydon.png"
import imgSoba from "../assets/images/food/soba.png"
import imgCurryRice from "../assets/images/food/curry-rice.png"
import imgHotDog from "../assets/images/food/hot-dog.png"
import imgChocolate from "../assets/images/food/chocolate.png"
import imgMeal from "../assets/images/food/meal.png"
import imgBodyRecord from "../assets/images/statistical/body-record.png"
import imgMyDiary from "../assets/images/statistical/my-diary.png"
import imgMyExercise from "../assets/images/statistical/my-exercise.png"
import imgRecommended1 from "../assets/images/recommended/img-1.png"
import imgRecommended2 from "../assets/images/recommended/img-2.png"
import imgRecommended3 from "../assets/images/recommended/img-3.png"
import imgRecommended4 from "../assets/images/recommended/img-4.png"
import imgRecommended5 from "../assets/images/recommended/img-5.png"
import imgRecommended6 from "../assets/images/recommended/img-6.png"
import imgRecommended7 from "../assets/images/recommended/img-7.png"
import imgRecommended8 from "../assets/images/recommended/img-8.png"
import {ICON} from "../interface/icons"

export const navLinks = [
  {
    id: "home",
    title: "自分の記録",
    icon: ICON.memo,
    to: 'home-recommended'
  },
  {
    id: "features",
    title: "チャレンジ",
    icon: ICON.challenge
  },
  {
    id: "product",
    title: "お知らせ",
    icon: ICON.info
  },
]

export const menuLink = [
  {
    id: 1,
    name: '自分の記録',
    to: 'home-statistical' 
  },
  {
    id: 2,
    name: '体重グラフ'
  },
  {
    id: 3,
    name: '目標'
  },
  {
    id: 4,
    name: '選択中のコース'
  },
  {
    id: 5,
    name: 'コラム一覧',
    to: 'home-recommended'
  },
  {
    id: 6,
    name: '設定'
  },
]

export const overviewChart = {
  labels: ['6月', '7月', '8月', '9 月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
  data: [
    {
      id: 1,
      data: [39, 35, 30, 28, 23, 22, 20, 19,17,13,10,0],
      color: '#8FE9D0'
    },
    {
      id: 2,
      data: [39, 37, 28, 32, 30, 27, 31, 26,25,24,23,25],
      color: '#FFCC21'
    },
  ]
}

export const periods = [
  {
    id: 1,
    code: 'morning',
    title: 'Morning',
    image: ICON.periodMorning
  },
  {
    id: 2,
    code: 'lunch',
    title: 'Lunch',
    image: ICON.periodMorning
  },
  {
    id: 3,
    code: 'dinner',
    title: 'Dinner',
    image: ICON.periodMorning
  },
  {
    id: 4,
    code: 'snack',
    title: 'Snack',
    image: ICON.periodSnack
  },
]

export const foods = [
  {
    id: 1,
    name: 'Sandwich',
    period: periods[0].title,
    date: '05.21',
    image: imgSandwich
  },
  {
    id: 2,
    name: 'Onigiri rice ball',
    period: periods[1].title,
    date: '05.21',
    image: imgOrigiriRice
  },
  {
    id: 3,
    name: 'Gyudon rice',
    period: periods[2].title,
    date: '05.21',
    image: imgGuydon
  },
  {
    id: 4,
    name: 'Soba noodles',
    period: periods[3].title,
    date: '05.21',
    image: imgSoba
  },
  {
    id: 5,
    name: 'Sandwich',
    period: periods[0].title,
    date: '05.21',
    image: imgSandwich
  },
  {
    id: 6,
    name: 'Hot dog',
    period: periods[0].title,
    date: '05.20',
    image: imgHotDog
  },
  {
    id: 7,
    name: 'Curry rice',
    period: periods[1].title,
    date: '05.20',
    image: imgCurryRice
  },
  {
    id: 8,
    name: 'Soba noodles',
    period: periods[2].title,
    date: '05.20',
    image: imgChocolate
  },
  {
    id: 9,
    name: 'Ramen noodles',
    period: periods[3].title,
    date: '05.21'
  },
  {
    id: 10,
    name: 'Japanese fried chicken',
    period: periods[0].title,
    date: '05.19'
  },
  {
    id: 11,
    name: 'Hot pot Shabu',
    period: periods[3].title,
    date: '05.18'
  },
  {
    id: 12,
    name: 'Gyutanyaki tongue',
    period: periods[2].title,
    date: '05.18'
  },
]

export const mealOverview = {
  image: imgMeal,
  complete: 5,
  total: 21,
  percent: 75,
}

export const statisticalHeader = [
  {
    id: 1,
    title: 'BODY RECORD',
    languageJapan: '自分のカラダの記録',
    image: imgBodyRecord
  },
  {
    id: 2,
    title: 'MY EXERCISE',
    languageJapan: '自分の運動の記録',
    image: imgMyDiary
  },
  {
    id: 3,
    title: 'MY DIARY',
    languageJapan: '自分の日記',
    image: imgMyExercise
  },
]

export const statisticalBodyRecord = {
  labels: ['6月', '7月', '8月', '9 月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
  data: [
    {
      id: 1,
      data: [39, 35, 30, 28, 23, 22, 20, 19,17,13,5,0],
      color: '#8FE9D0'
    },
    {
      id: 2,
      data: [39, 37, 28, 32, 30, 27, 31, 26,25,24,8,5],
      color: '#FFCC21'
    },
  ]
}

export const statisticalMyExercise = [
  {
    id: 1,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 2,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 3,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 4,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 5,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 6,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 7,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 8,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 9,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 10,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 11,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 12,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 13,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 14,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 15,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 16,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 17,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 18,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 19,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 20,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 21,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 22,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
]

export const statisticalMyDiary = [
  {
    id: 1,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 2,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 3,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 4,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 5,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 6,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 7,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 8,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 9,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 10,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 11,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 12,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
]

export const recommendedCategory = [
  {
    id: 1,
    title: 'RECOMMENDED COLUMN',
    languageJapan: 'オススメ'
  },
  {
    id: 2,
    title: 'RECOMMENDED DIET',
    languageJapan: 'ダイエット'
  },
  {
    id: 3,
    title: 'RECOMMENDED BEAUTY',
    languageJapan: '美容'
  },
  {
    id: 4,
    title: 'RECOMMENDED HEALTH',
    languageJapan: '健康'
  },
]

export const recommendedList = [
   {
    id: 1,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended1
   },
   {
    id: 2,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended2
   },
   {
    id: 3,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended3
   },
   {
    id: 4,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended4
   },
   {
    id: 5,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended5
   },
   {
    id: 6,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended6
   },
   {
    id: 7,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended7
   },
   {
    id: 8,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: imgRecommended8
   },
   {
    id: 9,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: ''
   },
   {
    id: 10,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: ''
   },
   {
    id: 11,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: ''
   },
   {
    id: 12 ,
    date: '2021.05.17-23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    tags: ['魚料理', '和食', 'DHA'],
    image: ''
   },
]

export const listFooter = [
  {
    id: 1,
    name: '会員登録'
  },
  {
    id: 2,
    name: '運営会社'
  },
  {
    id: 3,
    name: '利用規約'
  },
  {
    id: 4,
    name: '個人情報の取扱について'
  },
  {
    id: 5,
    name: '特定商取引法に基づく表記'
  },
  {
    id: 6,
    name: 'お問い合わせ'
  },
]